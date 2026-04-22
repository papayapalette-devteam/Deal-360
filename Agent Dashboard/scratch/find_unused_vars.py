import os
import re

css_file = r'd:\AntiGravity\Agent Dashboard\src\index.css'
src_dir = r'd:\AntiGravity\Agent Dashboard\src'

with open(css_file, 'r') as f:
    content = f.read()

# Find all variables in :root
root_match = re.search(r':root\s*\{(.*?)\}', content, re.DOTALL)
if not root_match:
    print("No :root block found")
    exit()

variables = re.findall(r'(--[a-zA-Z0-9-]+):', root_match.group(1))
print(f"Found {len(variables)} variables in :root")

used_vars = set()

# Search in all files in src
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.css', '.js', '.jsx')):
            # If it's index.css, only count it as "used" if it's used in a @apply or a property that isn't the definition itself
            # This is hard to regex perfectly, so let's just skip index.css for now and rely on other files
            if file == 'index.css':
                continue
            with open(os.path.join(root, file), 'r', encoding='utf-8', errors='ignore') as f:
                file_content = f.read()
                for var in variables:
                    if var in file_content:
                        used_vars.add(var)

# Also check tailwind.config.js for usages
tailwind_config = r'd:\AntiGravity\Agent Dashboard\tailwind.config.js'
if os.path.exists(tailwind_config):
    with open(tailwind_config, 'r') as f:
        config_content = f.read()
        for var in variables:
            if var in config_content:
                used_vars.add(var)

unused_vars = [v for v in variables if v not in used_vars]

print("\nUnused variables:")
for var in unused_vars:
    print(var)
