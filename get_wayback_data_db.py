import re
import json
import time
import requests
from wayback import WaybackClient
from bs4 import BeautifulSoup
from eth_utils.hexadecimal import remove_0x_prefix
from eth_utils.address import to_normalized_address
from database import create_database, insert_or_update_nft, get_nft_by_id, get_all_nfts, add_processed_url, url_exists, create_processed_urls_table, bulk_insert_or_update_nfts

errors = []

def extract_view_info(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    info = {}
    #  Find the script tag containing the session.item data
    script_tag = soup.find(name="script", string=lambda t: t and "session.item" in str(t))

    # print(script_tag)
    if script_tag:
        # Extract the JSON-like data
        match = re.search(r"session\.item\s*=\s*({.*?});", script_tag.string, re.DOTALL)
        if match:
            data_str = match.group(1)

        # Parse the JSON-like data
        data = json.loads(data_str)

        # print(f"Data: {data}")

        if "address" in data:
            hex_id = data["address"]
            normalized_hex_id = "0x" + remove_0x_prefix(to_normalized_address(hex_id))
            info["id"] = str(int(normalized_hex_id, 16))
            info["hex_id"] = normalized_hex_id

        if "name" in data:
            info["name"] = data["name"]

        if "description" in data:
            info["description"] = data["description"]

        if "author" in data:
            info["creator"] = data["author"]

        if "verified" in data:
            info["verified"] = data["verified"]

        if "cover" in data:
            info["image"] = data["cover"]

        if "collection" in data:
            info["collection"] = data["collection"]

        # print(f"Info: {info}")
        return info

    # Extract hex_id
    address_input = soup.find("input", {"id": "address"})
    if address_input:
        hex_id = address_input["value"]
        # Normalize the hex_id by removing leading zeros
        normalized_hex_id = "0x" + remove_0x_prefix(to_normalized_address(hex_id))
        info["hex_id"] = normalized_hex_id
        info["id"] = str(int(hex_id, 16))

    # Extract name
    title = soup.find("h1", class_="title")
    if title:
        info["name"] = title.text.strip()

    # Extract image
    img = soup.find("img", class_="card-image")
    if img:
        info["image"] = img["src"].split("/")[-1]

    # Extract rarity
    rarity = soup.find("div", class_="rarity")
    if rarity:
        info["rarity"] = rarity.text.strip()

    # Extract description
    description = soup.find("div", class_="card-info")
    if description:
        info["description"] = description.find_all("li")[1].text.strip()

    # Extract creator
    creator = soup.find("li", lambda tag: tag.find("label", text="Author"))
    if creator:
        creator_link = creator.find("a")
        if creator_link:
            info["creator"] = creator_link.text.strip()

    # Check if verified
    verified_img = soup.find("img", class_="verified", title="Verified author")
    info["verified"] = "Yes" if verified_img else "No"

    return info


def extract_card_info(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    cards = soup.find_all("div", class_="card")
    extracted_info = []

    for card in cards:
        found = False
        info = {}

        # Extract hex_id
        link = card.find("a", href=True)
        if link:
            hex_id = link["href"].split("/")[-1]
            # Normalize the hex_id by removing leading zeros
            normalized_hex_id = "0x" + remove_0x_prefix(to_normalized_address(hex_id))
            info["hex_id"] = normalized_hex_id
            info["id"] = int(hex_id, 16)
            found = True
        # Extract image
        img = card.find("img", class_="nft")
        if img:
            info["image"] = img["src"].split("/")[-1]

        # Extract name
        name = card.find("h1")
        if name:
            info["name"] = name.text.strip()

        # Extract creator
        creator = card.find("h2")
        if creator:
            creator_link = creator.find("a")
            if creator_link:
                info["creator"] = creator_link.text.strip()

        # Check if verified
        verified = card.find("img", class_="verified")
        info["verified"] = "Yes" if verified else "No"

        # Extract rarity
        rarity = card.find("span", class_="rarity")
        if rarity:
            info["rarity"] = rarity.text.strip()

        if found:
            extracted_info.append(info)

    return extracted_info


def process_url(client, url):
    results = []
    for record in client.search(url):
        try:
            response = client.get_memento(record)
            content = response.content.decode()
            if url.startswith("https://davinci.gallery/view/"):
                extracted_info = extract_view_info(html_content=content)
                if extracted_info:
                    results.append(extracted_info)
            else:
                extracted_info = extract_card_info(html_content=content)
                results.extend(extracted_info)
            print(f"Processed snapshot: {record.timestamp} for {url}")
        except Exception as e:
            msg: str = f"Error processing {url} at {record.timestamp}: {str(e)}"
            errors.append(msg)
            print(msg)
    # print(f"Results: {results}")
    return results

def manually_scrape_url(url):
    response = requests.get(url)
    content = response.content.decode()
    # print(f"Content: {content}")
    if "davinci.gallery/view/" in url:
        extracted_info = extract_view_info(html_content=content)
        if extracted_info:
            return [extracted_info]
    else:
        extracted_info = extract_card_info(html_content=content)
        return extracted_info


def process_urls(urls: list[str], client: WaybackClient) -> None:
    global errors
    manual_count = 0
    for url in urls:
        try:
            if url_exists(url):
                print(f"Skipping already processed URL: {url}")
                continue
            
            results = []
            # This is a Wayback Machine web URL, use manual scraping
            if url.startswith("https://web.archive.org/web/"):
                # this is manual processing, the front end is restrictive with requests so be patient and run multiple times with sleeps to process them all.. 
                # logic below has some sleep but it is not perfect due to retries.. just run again if any errors after a minute.. 
                print(f"{manual_count}: Processing Manual URL: {url}...")
                manual_count += 1
                if manual_count % 20 == 0:
                    print(f"Sleeping for 60 seconds...")
                    time.sleep(60)
                
                results = manually_scrape_url(url=url)
                time.sleep(3)
            else:
                print(f"Processing {url}...")
                if url.startswith(
                    ("https://www.davinci.gallery/view/", "https://davinci.gallery/view/")
                ):
                    token_id = int(
                        url.split("/")[-1].split("%")[0].split("#")[0].split("?")[0], 16
                    )
                    existing_nft = get_nft_by_id(nft_id=str(token_id))
                    # print(f"Existing NFT: {existing_nft}")
                    if existing_nft and existing_nft.get("image"):
                        print(f"Skipping {existing_nft.get('name')} because it already exists with an image in the database")
                        add_processed_url(url=url)
                        continue
                results = process_url(client=client, url=url)

            # print(f"Results: {results}")
            if results:
                try:
                    bulk_insert_or_update_nfts(results)
                except Exception as e:
                    print(f"Error processing {url}: {str(e)}")
            add_processed_url(url=url)

        except Exception as e:
            print(f"Error processing {url}: {str(e)}")

    print("All URLs processed and data saved.")


def load_data(path="token_data_structure.json") -> list:  # -> Any | list[Any]:
    try:
        with open(path, "r") as f:
            data = json.load(f)
            return data
    except FileNotFoundError:
        print(f"No data found in {path}")
        return []


def main():
    # Set up signal handler
    client = WaybackClient()

    # Create the database if it doesn't exist
    input_file = "data/token_ids.json"
    db_file = "db/davinci.sqlite"
    create_database(input_file=input_file, db_file=db_file)
    create_processed_urls_table(db_name=db_file)

    print(f"Processing {len(cards_urls)} URLs...")
    process_urls(urls=cards_urls, client=client)
    process_urls(urls=view_urls, client=client)
    process_urls(urls=extracted_urls, client=client)


if __name__ == "__main__":
    cards_urls: list[str] = [
        # "www.davinci.gallery/view/"
        "www.davinci.gallery/market",
        "www.davinci.gallery/explore",
        "www.davinci.gallery/explore/image",
        "www.davinci.gallery/explore/music",
        "www.davinci.gallery/explore/video",
        "www.davinci.gallery/explore/book",
        "www.davinci.gallery/explore/graphics",
        "www.davinci.gallery/explore/paintings",
        "www.davinci.gallery/explore/photos",
        "www.davinci.gallery/explore/kids",
        "www.davinci.gallery/explore/memes",
        "www.davinci.gallery/explore/private",
        "www.davinci.gallery/explore/collection/0x1548c6227cbd78e51eb0a679c1f329b9a5a99beb",
    ] + [f"www.davinci.gallery/market?page={i}" for i in range(1, 100)]

    view_urls: list[str] = [
        url for url in load_data(path="data/davinci_gallery_view_urls.json")
    ]
    explore_urls: list[str] = [
        url for url in load_data(path="data/davinci_gallery_explore_urls.json")
    ]
    view_urls += explore_urls

    # Cleaned error urls, direct web scrape
    with open('data/extracted_urls.txt', 'r') as f:
        extracted_urls = [line.strip() for line in f]

    main()

    all_nfts = get_all_nfts()
    nfts_with_names = [nft for nft in all_nfts if nft.get("name")]
    print(f"Found {len(nfts_with_names)} NFTs out of {len(all_nfts)}")

    print(f"Errors:")
    for error in errors:
        print(error)
