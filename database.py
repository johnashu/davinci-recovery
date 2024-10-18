import sqlite3
from eth_typing import HexAddress
from eth_utils.address import to_normalized_address
import json
from typing import Dict, Any, List

# Contract address DaVinci
contract_address = "0x1548c6227CBD78E51eB0A679c1f329B9a5a99BEb"

# DB file location
davinci_db = "db/davinci.sqlite"

def int_to_hex(int_str):
    return "0x" + hex(int(int_str))[2:].zfill(40)


def create_database(input_file, db_file):
    # Connect to the SQLite database (it will be created if it doesn't exist)
    conn = sqlite3.connect(database=db_file)
    cursor = conn.cursor()

    # Create the tokens table
    cursor.execute(
        """
    CREATE TABLE IF NOT EXISTS nfts (
        id TEXT UNIQUE,
        hex_id TEXT UNIQUE,
        image TEXT,
        name TEXT,
        description TEXT,
        collection TEXT,
        creator TEXT,
        rarity TEXT,
        verified TEXT        
    )
    """
    )

    with open(file=input_file, mode="r") as f:
        token_ids = json.load(f)

    # Process each token ID and insert into the database from the daVinci contract
    for token_id in token_ids:
        hex_id: str = int_to_hex(int_str=token_id)
        normalized_hex_id: HexAddress = to_normalized_address(value=hex_id)

        cursor.execute(
            """
        INSERT OR IGNORE INTO nfts (id, hex_id, collection)
        VALUES (?, ?, ?)
        """,
            (token_id, normalized_hex_id, contract_address),
        )

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

    print(f"Processed {len(token_ids)} tokens and saved to {db_file}")

def create_processed_urls_table(db_name: str = davinci_db) -> None:
    conn: sqlite3.Connection = sqlite3.connect(database=db_name)
    c: sqlite3.Cursor = conn.cursor()

    c.execute('''
    CREATE TABLE IF NOT EXISTS processed_urls
    (url TEXT PRIMARY KEY)
    ''')

    conn.commit()
    conn.close()

def url_exists(url: str, db_name: str = davinci_db) -> bool:
    conn: sqlite3.Connection = sqlite3.connect(database=db_name)
    c: sqlite3.Cursor = conn.cursor()

    c.execute("SELECT 1 FROM processed_urls WHERE url = ?", (url,))
    result = c.fetchone()

    conn.close()
    return result is not None

def add_processed_url(url: str, db_name: str = davinci_db):
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    c.execute("INSERT OR IGNORE INTO processed_urls (url) VALUES (?)", (url,))

    conn.commit()
    conn.close()

def insert_or_update_nft(
    nft_data: Dict[str, Any], db_name: str = davinci_db
):
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    c.execute(
        """
    INSERT OR REPLACE INTO nfts 
    (id, hex_id, name, description, creator, verified, image, collection, rarity)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """,
        (
            str(nft_data.get("id")),
            nft_data.get("hex_id"),
            nft_data.get("name"),
            nft_data.get("description"),
            nft_data.get("creator"),
            nft_data.get("verified") == "Yes",
            nft_data.get("image"),
            nft_data.get("collection"),
            nft_data.get("rarity"),
        ),
    )

    conn.commit()
    conn.close()

def bulk_insert_or_update_nfts(nft_data_list: List[Dict[str, Any]], db_name: str = davinci_db):
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    c.executemany("""
    INSERT OR REPLACE INTO nfts 
    (id, hex_id, name, description, creator, verified, image, collection, rarity)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, [(
        str(nft.get("id")),
        nft.get("hex_id"),
        nft.get("name"),
        nft.get("description"),
        nft.get("creator"),
        nft.get("verified") == "Yes",
        nft.get("image"),
        nft.get("collection"),
        nft.get("rarity")
    ) for nft in nft_data_list])

    conn.commit()
    conn.close()
    
def get_nft_by_id(
    nft_id: str, db_name: str = davinci_db
) -> Dict[str, Any]:
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    c.execute("SELECT * FROM nfts WHERE id = ?", (nft_id,))
    result = c.fetchone()

    conn.close()

    if result:
        return {
            "id": result[0],
            "hex_id": result[1],
            "image": result[2],
            "name": result[3],
            "description": result[4],
            "collection": result[5],
            "creator": result[6],
            "rarity": result[7],
            "verified": "Yes" if result[8] else "No",
        }
    return {}


def get_all_nfts(db_name: str = davinci_db) -> List[Dict[str, Any]]:
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    c.execute("SELECT * FROM nfts")
    results = c.fetchall()

    conn.close()

    return [
        {
            "id": result[0],
            "hex_id": result[1],
            "name": result[2],
            "description": result[3],
            "creator": result[4],
            "verified": "Yes" if result[5] else "No",
            "image": result[6],
            "collection": result[7],
            "rarity": result[8],
        }
        for result in results
    ]


def update_collection_for_tokens(
    token_ids: List[str],
    collection_address: str,
    db_name: str = davinci_db,
    batch_size: int = 999,
):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()

    total_updated = 0
    for i in range(0, len(token_ids), batch_size):
        batch = token_ids[i : i + batch_size]
        placeholders = ",".join(["?"] * len(batch))
        print(f"Updating {len(batch)} tokens with collection address: {collection_address}")
        print(batch[1:10])
        
        cursor.execute(
            f"""
        UPDATE nfts
        SET collection = ?
        WHERE id IN ({placeholders})
        """,
            (collection_address, *tuple(batch)),
        )

        total_updated += cursor.rowcount

    conn.commit()
    conn.close()

    print(
        f"Updated {total_updated} records with collection address: {collection_address}"
    )

    return total_updated


def check_duplicates(db_name: str, columns: List[str]) -> dict:
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    results = {}
    for column in columns:
        c.execute(
            f"""
        SELECT {column}, COUNT(*) as count
        FROM nfts
        GROUP BY {column}
        HAVING count > 1
        """
        )
        duplicates = c.fetchall()
        if duplicates:
            results[column] = duplicates

    conn.close()
    return results


def print_duplicates(duplicates: dict, print_to_console: bool = False):
    if not duplicates:
        print("No duplicates found.")
    else:
        for column, dupes in duplicates.items():
            print(f"\nDuplicate {column}s found: {len(dupes)}")
            for value, count in dupes:
                if print_to_console:
                    print(f"{column}: {value}, Count: {count}")


def check_for_duplicates(
    db_name: str = davinci_db,
    columns_to_check: List[str] = ["id", "hex_id", "image", "name", "collection"],
    print_to_console: bool = False,
):

    duplicates = check_duplicates(db_name, columns_to_check)
    print_duplicates(duplicates, print_to_console)


if __name__ == "__main__":
    input_file = "data/token_ids.json"
    db_file = davinci_db
    create_database(input_file=input_file, db_file=db_file)
    create_processed_urls_table(db_name=db_file)

    # Check for duplicates after creating the database
    columns_to_check = [
        "id", 
        "hex_id", 
        "image", 
        "name", 
        "collection"
        ]

    duplicates = check_for_duplicates(db_name=db_file, columns_to_check=columns_to_check, print_to_console=False)
