#!/bin/bash

echo "=== HELP & ADVICE PAGES AUDIT ==="
echo ""
echo "Files:"
ls -1 client/src/pages/help-advice/
echo ""

for file in client/src/pages/help-advice/*.tsx; do
  echo "=== $(basename $file) ==="
  echo "H1 titles:"
  grep -n "<h1" "$file" | head -3
  echo "H2 headings:"
  grep -n "<h2" "$file" | head -3
  echo "H3 headings:"
  grep -n "<h3" "$file" | head -3
  echo "Body paragraphs (first 3):"
  grep -n "<p" "$file" | head -3
  echo ""
done
