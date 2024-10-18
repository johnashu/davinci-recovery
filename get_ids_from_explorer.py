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

logging.basicConfig(
    level=logging.DEBUG, format="%(asctime)s - %(levelname)s - %(message)s"
)

# Contract address DaVinci
contract_address: str = "0x1548c6227CBD78E51eB0A679c1f329B9a5a99BEb"

# ABI for the ERC-1155 contract (minimal ABI with only the uri function)
abi = json.loads(
    """
[
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
"""
)

contract = w3.eth.contract(address=contract_address, abi=abi)

os.makedirs("token_data", exist_ok=True)

# Global variables for tracking progress
processed_ids: List[str] = []
failed_ids: List[str] = []


async def fetch_ipfs_data(
    session: aiohttp.ClientSession, w3: AsyncWeb3, token_id: str
) -> None:
    try:
        logging.info(f"Processing token ID: {token_id}")

        # Check if the token has been processed or failed before
        if token_id in processed_ids or token_id in failed_ids:
            logging.info(f"Token ID {token_id} already processed or failed. Skipping.")
            return

        # Call the uri() function to get the IPFS hash
        ipfs_hash = await contract.functions.uri(int(token_id)).call()
        logging.debug(f"Received IPFS hash for token ID {token_id}: {ipfs_hash}")

        # Construct IPFS URL
        url = f"https://ipfs.io/ipfs/{ipfs_hash}"

        # Fetch data from IPFS
        async with session.get(url, timeout=30) as response:
            if response.status == 200:
                data = await response.json()

                # Save data to JSON file
                with open(f"data/token_data/{token_id}.json", "w") as f:
                    json.dump(data, f)

                logging.info(
                    f"Successfully fetched and saved data for token ID: {token_id}"
                )
                processed_ids.append(token_id)
            else:
                logging.warning(
                    f"Failed to fetch data for token ID: {token_id}. Status: {response.status}"
                )
                failed_ids.append(token_id)
    except Exception as e:
        logging.error(f"Error processing token ID: {token_id}. Error: {str(e)}")
        failed_ids.append(token_id)


async def process_batch(
    session: aiohttp.ClientSession, w3: AsyncWeb3, batch: List[str]
) -> None:
    tasks = [fetch_ipfs_data(session, w3, token_id) for token_id in batch]
    await asyncio.gather(*tasks)
    save_progress()


async def main() -> None:
    try:
        logging.info("Starting main function")

        # Load token IDs from JSON file
        with open("data/token_ids.json", "r") as f:
            all_token_ids = json.load(f)
        logging.info(f"Loaded {len(all_token_ids)} token IDs from file")

        # Load progress if exists
        if os.path.exists("data/progress.json"):
            with open("data/progress.json", "r") as f:
                progress = json.load(f)
            processed_ids.extend(progress["processed"])
            failed_ids.extend(progress["failed"])
            logging.info(
                f"Loaded progress: {len(processed_ids)} processed, {len(failed_ids)} failed"
            )

        # Filter out already processed or failed IDs
        token_ids_to_process = [
            id
            for id in all_token_ids
            if id not in processed_ids and id not in failed_ids
        ]
        logging.info(f"Total IDs to process: {len(token_ids_to_process)}")

        # Initialize AsyncWeb3
        w3 = AsyncWeb3(AsyncWeb3.AsyncHTTPProvider("https://api.harmony.one"))

        batch_size = 10  # Process 10 tokens concurrently
        async with aiohttp.ClientSession() as session:
            for i in range(0, len(token_ids_to_process), batch_size):
                print(
                    f"Processing batch {i//batch_size + 1}/{len(token_ids_to_process)//batch_size + 1}"
                )
                batch = token_ids_to_process[i : i + batch_size]
                logging.info(
                    f"Processing batch {i//batch_size + 1}/{len(token_ids_to_process)//batch_size + 1}"
                )
                await process_batch(session, w3, batch)
                logging.info(
                    f"Progress: {i+len(batch)}/{len(token_ids_to_process)} ({(i+len(batch))/len(token_ids_to_process)*100:.2f}%)"
                )

        logging.info(
            f"Processing complete. Total processed: {len(processed_ids)}, Total failed: {len(failed_ids)}"
        )
    except Exception as e:
        logging.error(
            f"An error occurred in the main function: {str(e)}", exc_info=True
        )


def save_progress() -> None:
    progress = {"processed": processed_ids, "failed": failed_ids}
    with open("data/progress.json", "w") as f:
        json.dump(progress, f)
    logging.debug("Progress saved")


def signal_handler(sig, frame):
    logging.info("Interrupt received, saving progress and exiting...")
    save_progress()
    sys.exit(0)


if __name__ == "__main__":
    signal.signal(signal.SIGINT, signal_handler)
    asyncio.run(main())
