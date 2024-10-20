import asyncio
import aiohttp
import json
from web3 import AsyncWeb3
import os
import signal
import logging
from typing import List, Dict, Any
import time
import sys
import aiosqlite

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

# ABI for the ERC-1155 contract (minimal ABI with only the uri function)
abi = json.loads(
    """
[
    {
        "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
        "name": "uri",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }
]
"""
)


async def create_tables(db: aiosqlite.Connection) -> None:
    await db.executescript(
        """
        CREATE TABLE IF NOT EXISTS processed_ids (
            contract_address TEXT,
            token_id TEXT,
            PRIMARY KEY (contract_address, token_id)
        );
        CREATE TABLE IF NOT EXISTS failed_ids (
            contract_address TEXT,
            token_id TEXT,
            PRIMARY KEY (contract_address, token_id)
        );
        CREATE TABLE IF NOT EXISTS token_data (
            contract_address TEXT,
            token_id TEXT,
            owner_address TEXT,
            data TEXT,               
            PRIMARY KEY (contract_address, token_id)
        );
    """
    )
    await db.commit()


async def is_processed_or_failed(
    db: aiosqlite.Connection, contract_name: str, token_id: str
) -> bool:
    async with db.execute(
        "SELECT 1 FROM processed_ids WHERE contract_address = ? AND token_id = ? "
        "UNION ALL "
        "SELECT 1 FROM failed_ids WHERE contract_address = ? AND token_id = ?",
        (contract_name, token_id, contract_name, token_id),
    ) as cursor:
        return await cursor.fetchone() is not None


async def mark_processed_or_failed(
    db: aiosqlite.Connection, contract_name: str, token_id: str, success: bool
) -> None:
    table = "processed_ids" if success else "failed_ids"
    await db.execute(
        f"INSERT OR IGNORE INTO {table} (contract_address, token_id) VALUES (?, ?)",
        (contract_name, token_id),
    )
    await db.commit()


async def save_token_data(
    db: aiosqlite.Connection, contract_name: str, token_id: str, data: Dict[str, Any]
) -> None:
    await db.execute(
        "INSERT OR REPLACE INTO token_data (contract_address, token_id, data) VALUES (?, ?, ?)",
        (contract_name, token_id, json.dumps(obj=data)),
    )
    await db.commit()


async def fetch_token_ids(session, contract_address, db) -> None:
    base_url: str = (
        f"https://explorer.harmony.one/api/v2/tokens/{contract_address}/instances"
    )
    next_page_params = None

    while True:
        url: str = base_url
        if next_page_params:
            url += f"?unique_token={next_page_params['unique_token']}"

        async with session.get(url) as response:
            data = await response.json()

        items = data.get("items", [])

        # Insert token IDs into the database
        async with db.cursor() as cursor:
            for item in items:
                if item:
                    logging.debug(
                        msg=f"Processing {contract_address} token ID: {item['id']}"
                    )
                    token_id: str = item["id"]
                    if item["owner"]:
                        owner_address: str = item.get("owner", {"hash": ""}).get(
                            "hash", ""
                        )
                    else:
                        owner_address: str = ""
                    await cursor.execute(
                        """
                        INSERT OR IGNORE INTO token_data (contract_address, token_id, owner_address)
                        VALUES (?, ?, ?)
                    """,
                        (contract_address, token_id, owner_address),
                    )

        await db.commit()

        next_page_params = data.get("next_page_params")
        if not next_page_params:
            break

    logging.info(msg=f"Finished fetching token IDs for contract {contract_address}")


async def fetch_ipfs_data(
    session: aiohttp.ClientSession,
    w3: AsyncWeb3,
    contract,
    token_id: str,
    contract_name: str,
    db: aiosqlite.Connection,
) -> None:
    try:
        if await is_processed_or_failed(
            db=db, contract_name=contract_name, token_id=token_id
        ):
            logging.info(
                msg=f"{contract_name} token ID {token_id} already processed or failed. Skipping."
            )
            return

        logging.info(msg=f"Processing {contract_name} token ID: {token_id}")

        ipfs_hash: str = await contract.functions.uri(int(token_id)).call()
        url: str = f"https://ipfs.io/ipfs/{ipfs_hash}"

        async with session.get(
            url=url, timeout=aiohttp.ClientTimeout(total=30)
        ) as response:
            if response.status == 200:
                data = await response.json()
                await save_token_data(
                    db=db, contract_name=contract_name, token_id=token_id, data=data
                )
                logging.info(
                    msg=f"Successfully fetched and saved data for {contract_name} token ID: {token_id}"
                )
                await mark_processed_or_failed(
                    db=db, contract_name=contract_name, token_id=token_id, success=True
                )
            else:
                logging.warning(
                    msg=f"Failed to fetch data for {contract_name} token ID: {token_id}. Status: {response.status}"
                )
                await mark_processed_or_failed(
                    db=db, contract_name=contract_name, token_id=token_id, success=False
                )
    except Exception as e:
        logging.error(
            msg=f"Error processing {contract_name} token ID: {token_id}. Error: {str(e)}"
        )
        await mark_processed_or_failed(
            db=db, contract_name=contract_name, token_id=token_id, success=False
        )


async def process_contract(
    w3: AsyncWeb3,
    contract_name: str,
    contract_address: str,
    db: aiosqlite.Connection,
    check_IPFS: bool = True,
    get_token_ids: bool = True,
) -> None:
    logging.info(msg=f"Processing contract: {contract_name}")

    checksum_address: str = AsyncWeb3.to_checksum_address(contract_address)
    contract = w3.eth.contract(address=checksum_address, abi=abi)

    async with aiohttp.ClientSession() as session:
        if get_token_ids:
            # Fetch and save token IDs
            await fetch_token_ids(
                session=session, contract_address=contract_address, db=db
            )

    # Fetch token IDs from the database
    async with db.execute(
        "SELECT token_id FROM token_data WHERE contract_address = ?",
        (contract_address,),
    ) as cursor:
        token_ids = [row[0] for row in await cursor.fetchall()]

    logging.info(f"Loaded {len(token_ids)} token IDs for {contract_name}")

    batch_size = 10
    if check_IPFS:
        logging.info(msg=f"Checking IPFS for {contract_name}")
        async with aiohttp.ClientSession() as session:
            for i in range(0, len(token_ids), batch_size):
                batch = token_ids[i : i + batch_size]
                tasks = [
                    fetch_ipfs_data(
                        session=session,
                        w3=w3,
                        contract=contract,
                        token_id=token_id,
                        contract_name=contract_name,
                        db=db,
                    )
                    for token_id in batch
                ]
                await asyncio.gather(*tasks)
                logging.info(
                    msg=f"{contract_name} Progress: {i+len(batch)}/{len(token_ids)} ({(i+len(batch))/len(token_ids)*100:.2f}%)"
                )


async def main(check_IPFS: bool = True, get_token_ids: bool = True) -> None:
    try:
        logging.info(msg="Starting main function")
        w3 = AsyncWeb3(provider=AsyncWeb3.AsyncHTTPProvider("https://api.harmony.one"))

        async with aiosqlite.connect(database="./db/contracts.sqlite") as db:
            await create_tables(db=db)
            for contract_name, contract_address in contracts.items():
                await process_contract(
                    w3=w3,
                    contract_name=contract_name,
                    contract_address=contract_address,
                    db=db,
                    check_IPFS=check_IPFS,
                    get_token_ids=get_token_ids,
                )
    except Exception as e:
        logging.error(
            msg=f"An error occurred in the main function: {str(e)}", exc_info=True
        )


if __name__ == "__main__":
    contracts: Dict[str, str] = {
        "image": "0x1548c6227cbd78e51eb0a679c1f329b9a5a99beb",
        "model": "0x4f1e81f6736b04a75e6a552a30aa32787566c84d",
        "audio": "0x9f407c15f859277e6654b775cb410bd4aad7fe1f",
        "music": "0xbde650853b535d738ce67f1bdeb335e38834a9e9",
        "video": "0x474d8fd12780fbe2b7b7bd74eb326bb75ded91d8",
        "movie": "0x5d1d9a2cd71d0d03bfc7ba234a4006be38b64362",
        "book": "0x51f6290510be3c802471e27f0843a3a54a8226df",
        "domain": "0x09f2e816d9a084e1e049713a9ce479e0b1278009",
        "text": "0x47e50e7056994e8115820d101ffe5ce69cfa77b0",
    }
    check_IPFS: bool = False
    get_token_ids: bool = True
    asyncio.run(main=main(check_IPFS=check_IPFS, get_token_ids=get_token_ids))
