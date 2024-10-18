import asyncio
import aiohttp
import json
from web3 import AsyncWeb3
import os
import signal
import logging
from typing import List, Dict, Any

# Set up logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

w3 = AsyncWeb3(AsyncWeb3.AsyncHTTPProvider("https://api.harmony.one"))

# Contract address DaVinci
contract_address = "0x1548c6227CBD78E51eB0A679c1f329B9a5a99BEb"

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

os.makedirs("data/token_data", exist_ok=True)

# Global variables for tracking progress - should be in a database but this is async and wont bode well with sqlite
progress: Dict[str, List[Dict[str, Any]]] = {"processed": [], "failed": []}

# Semaphore to limit concurrent requests
sem = asyncio.Semaphore(value=100)

stop_processing = False


async def fetch_ipfs_data(session: aiohttp.ClientSession, token_id: str) -> None:
    global stop_processing
    if stop_processing:
        return
    async with sem:
        try:
            # Check if the token has been processed or failed before
            if any(
                item["id"] == token_id
                for item in progress["processed"] + progress["failed"]
            ):
                logging.info(
                    f"Token ID {token_id} already processed or failed. Skipping."
                )
                return

            # Call the uri() function to get the IPFS hash
            ipfs_hash = await contract.functions.uri(int(token_id)).call()

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
                    progress["processed"].append({"id": token_id})
                else:
                    logging.warning(
                        f"Failed to fetch data for token ID: {token_id}. Status: {response.status}"
                    )
                    progress["failed"].append(
                        {"id": token_id, "error": f"HTTP Status: {response.status}"}
                    )
        except asyncio.TimeoutError:
            logging.error(f"Timeout error for token ID: {token_id}")
            progress["failed"].append({"id": token_id, "error": "Timeout Error"})
        except Exception as e:
            logging.error(f"Error processing token ID: {token_id}. Error: {str(e)}")
            progress["failed"].append({"id": token_id, "error": str(e)})


def save_progress() -> None:
    with open("data/progress.json", "w") as f:
        json.dump(progress, f)
    logging.info("Progress saved")


async def main() -> None:
    global progress, stop_processing
    # Load token IDs from JSON file
    with open("data/token_ids.json", "r") as f:
        all_token_ids = json.load(f)

    # Load progress if exists
    if os.path.exists("data/progress.json"):
        with open("data/progress.json", "r") as f:
            progress = json.load(f)
        logging.info(
            f"Loaded progress: {len(progress['processed'])} processed, {len(progress['failed'])} failed"
        )

    # Filter out already processed or failed IDs
    processed_and_failed_ids = set(
        item["id"] for item in progress["processed"] + progress["failed"]
    )
    token_ids_to_process = [
        id for id in all_token_ids if id not in processed_and_failed_ids
    ]
    logging.info(f"Total IDs to process: {len(token_ids_to_process)}")

    async with aiohttp.ClientSession() as session:
        tasks = [
            fetch_ipfs_data(session, token_id) for token_id in token_ids_to_process
        ]

        try:
            for i, future in enumerate(asyncio.as_completed(tasks)):
                await future
                # Save progress every 100 processed items
                if (i + 1) % 100 == 0:
                    save_progress()
        except asyncio.CancelledError:
            logging.info("Main task cancelled. Stopping gracefully.")
        finally:
            stop_processing = True
            # Wait for all tasks to complete
            await asyncio.gather(*tasks, return_exceptions=True)
            save_progress()

    logging.info(
        f"Processing complete. Total processed: {len(progress['processed'])}, Total failed: {len(progress['failed'])}"
    )


def signal_handler(sig, frame):
    logging.info("Interrupt received, stopping processing and saving progress...")
    global stop_processing
    stop_processing = True


if __name__ == "__main__":
    signal.signal(signal.SIGINT, signal_handler)
    asyncio.run(main())
