import re

# Extract urls from the errors.txt file for manual processing

def extract_archive_urls(file_path):
    pattern = r'https://web\.archive\.org/web/[^\s]+'
    
    with open(file_path, 'r') as file:
        content = file.read()
    
    matches = re.findall(pattern, content)
    return matches

# Usage
file_path = 'data/errors.txt' 
urls = extract_archive_urls(file_path)

for url in urls:
    print(url)

# save the URLs to a new file
with open('data/extracted_urls.txt', 'w') as output_file:
    for url in urls:
        output_file.write(url + '\n')

print(f"\nTotal URLs extracted: {len(urls)}")
print("URLs have been saved to 'extracted_urls.txt'")