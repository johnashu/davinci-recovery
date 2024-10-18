import json

# Create a json data structure for the tokens

def int_to_hex(int_str):
    return hex(int(int_str))

def process_token_ids(input_file, output_file):
    # Read the input JSON file
    with open(input_file, "r") as f:
        token_ids = json.load(f)

    # Process each token ID
    processed_tokens = []
    for token_id in token_ids:
        token_dict = {
            "id": token_id,
            "hex_id": int_to_hex(int_str=token_id),
            "image": "",
            "name": "",
            "description": "",
            "collection": "",
            "creator": "",
            "rarity": "",
            "verified": "",
        }
        processed_tokens.append(token_dict)

    # Write the processed tokens to the output JSON file
    with open(output_file, 'w') as f:
        json.dump(processed_tokens, f, indent=2)

    print(f"Processed {len(processed_tokens)} tokens and saved to {output_file}")

# Usage
input_file = "data/token_ids.json"
output_file = "data/token_data_structure.json"
process_token_ids(input_file=input_file, output_file=output_file)
