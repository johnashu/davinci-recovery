import requests
import json


def get_unique_view_urls(path):
    base_url = "https://web.archive.org/web/timemap/json"

    params = {
        "url": f"https://davinci.gallery/{path}/",
        "matchType": "prefix",
        "collapse": "urlkey",
        "output": "json",
        "fl": "original,mimetype,timestamp,endtimestamp,groupcount,uniqcount",
        "filter": "!statuscode:[45]..",
        "limit": 100000,
        "_": 1729093794167,
    }

    response = requests.get(url=base_url, params=params)
    data = response.json()

    unique_urls = set()
    for item in data[1:]:  # Skip the first item as it's the header
        unique_urls.add(item[0])  # Add the URL (index 0) to the set

    return list(set(unique_urls))


def save_to_json(data, filename):
    with open(filename, "w") as f:
        json.dump(data, f, indent=2)


if __name__ == "__main__":
    path = "explore"
    unique_view_urls = get_unique_view_urls(path=path)
    save_to_json(unique_view_urls, f"data/davinci_gallery_{path}_urls.json")
    print(
        f"Saved {len(unique_view_urls)} unique URLs to davinci_gallery_{path}_urls.json"
    )

