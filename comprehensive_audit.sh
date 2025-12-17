#!/bin/bash

echo "=== COMPREHENSIVE TEXT STYLING AUDIT ==="
echo ""
echo "Total page files to check:"
find client/src/pages -name "*.tsx" | wc -l
echo ""

echo "1. CHECKING H1 HERO TITLES (should be: text-4xl md:text-6xl OR text-4xl lg:text-5xl xl:text-6xl)"
echo "Files with H1 not matching standard:"
for file in $(find client/src/pages -name "*.tsx"); do
  if grep -q "<h1" "$file"; then
    if ! grep -q "text-4xl.*text-6xl\|text-4xl.*text-5xl.*text-6xl" "$file"; then
      echo "  - $file"
      grep -n "<h1" "$file" | head -2
    fi
  fi
done
echo ""

echo "2. CHECKING H2 SECTION HEADINGS (should be: text-3xl md:text-4xl)"
echo "Files with H2 missing md:text-4xl:"
for file in $(find client/src/pages -name "*.tsx"); do
  if grep -q "<h2.*text-3xl" "$file"; then
    if ! grep -q "text-3xl md:text-4xl" "$file"; then
      echo "  - $file"
    fi
  fi
done
echo ""

echo "3. CHECKING BODY TEXT COLOR (should be: text-gray-700, NOT text-gray-600)"
echo "Files still using text-gray-600:"
grep -l "text-gray-600" client/src/pages/**/*.tsx 2>/dev/null | head -10
echo ""

echo "4. CHECKING BODY TEXT SIZE (paragraphs should have text-lg)"
echo "Sample files with <p> tags missing text-lg:"
for file in $(find client/src/pages -name "*.tsx" | head -10); do
  if grep -q '<p className="text-gray-700">' "$file" 2>/dev/null; then
    echo "  - $file has paragraphs without text-lg"
  fi
done
echo ""

echo "5. CHECKING HEADING COLORS (all should be text-[#1B3A6B])"
echo "Files with headings using wrong colors:"
grep -l "text-\[#5B2C6F\]\|text-\[#1e3a8a\]" client/src/pages/**/*.tsx 2>/dev/null | head -10
echo ""

