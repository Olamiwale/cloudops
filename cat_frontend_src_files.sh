#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$ROOT_DIR/apps/frontend/src"

if [ ! -d "$TARGET_DIR" ]; then
  echo "Directory not found: $TARGET_DIR" >&2
  exit 1
fi

find "$TARGET_DIR" -type f | sort | while read -r file; do
  echo "===== $file ====="
  cat "$file"
  echo
  echo
 done
