#!/bin/bash

echo "=== Text Styling Analysis ==="
echo ""
echo "Analyzing H2 headings (should be text-[#1B3A6B]):"
grep -r "text-2xl\|text-3xl\|text-4xl" client/src/pages/ | grep -E "text-\[#[0-9a-fA-F]+\]|text-blue|text-purple" | head -20
echo ""
echo "Analyzing H3 headings:"
grep -r "text-xl\|text-2xl" client/src/pages/ | grep -E "text-\[#[0-9a-fA-F]+\]|text-blue|text-purple" | head -20
echo ""
echo "Analyzing body text colors:"
grep -r "text-gray" client/src/pages/ | head -10
