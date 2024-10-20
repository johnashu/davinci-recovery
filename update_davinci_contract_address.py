import json
from database import update_collection_for_tokens

# Contract address DaVinci
contract_address = "0x1548c6227CBD78E51eB0A679c1f329B9a5a99BEb"


def int_to_hex(int_str):
    return hex(int(int_str))


def process_token_ids(input_file, db_file):
    # Read the input JSON file
    with open(input_file, "r") as f:
        token_ids = json.load(f)

    total_updated = update_collection_for_tokens(
        token_ids, contract_address, db_name=db_file
    )

    print(f"Processed {total_updated} tokens")


# Usage
input_file = "data/token_ids.json"
db_file = "db/davinci.sqlite"
process_token_ids(input_file=input_file, db_file=db_file)
