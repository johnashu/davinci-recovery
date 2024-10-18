import os
import json


def extract_solidity_source(directory, dest):
    for filename in os.listdir(directory):
        if filename.endswith(".json"):
            file_path = os.path.join(directory, filename)
            with open(file=file_path, mode="r") as file:
                try:
                    data = json.load(file)
                    if "source" in data:
                        sol_filename = os.path.splitext(filename)[0] + ".sol"
                        sol_path = os.path.join(dest, sol_filename)
                        with open(file=sol_path, mode="w") as sol_file:
                            sol_file.write(data["source"])
                        print(f"Created {sol_filename}")
                    else:
                        print(f"No 'source' key found in {filename}")
                except json.JSONDecodeError:
                    print(f"Error decoding JSON in {filename}")


# Usage
directory_path = "davinci"
dest_path = "davinci/solidity"
extract_solidity_source(directory=directory_path, dest=dest_path)
