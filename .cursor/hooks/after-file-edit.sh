#!/usr/bin/env bash
# Example Cursor hook: runs after the Agent edits a file.
# Reads JSON from stdin (see Cursor docs: afterFileEdit). Writes {} to stdout.
# Appends a timestamp + file path to .cursor/hook-activity.log (gitignored via *.log).

json=$(cat)
path=$(echo "$json" | python3 -c "import sys, json; d=json.load(sys.stdin); print(d.get('file_path', ''))" 2>/dev/null || echo "")
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) afterFileEdit ${path}" >> .cursor/hook-activity.log
printf '%s\n' '{}'
exit 0
