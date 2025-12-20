#!/usr/bin/env python3
import sys

# Read the backup file
with open('/workspaces/FaithFrontier/index.md.backup', 'r') as f:
    lines = f.readlines()

# Keep lines 1-10 (front matter + markdown comment) and 205+ (clean HTML)
front_matter = ''.join(lines[0:10])
clean_html = ''.join(lines[204:])  # 0-indexed, so 204 = line 205

# Write new file
with open('/workspaces/FaithFrontier/index.md', 'w') as f:
    f.write(front_matter)
    f.write('\n')
    f.write(clean_html)

print("Fixed index.md - removed broken inline CSS")
