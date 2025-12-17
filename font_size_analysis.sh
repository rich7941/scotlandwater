#!/bin/bash

echo "=== FONT SIZE INCONSISTENCIES ANALYSIS ===" > font_size_issues.txt
echo "" >> font_size_issues.txt

echo "1. H2 WITHOUT md:text-4xl (should be text-3xl md:text-4xl):" >> font_size_issues.txt
grep -n "<h2.*text-3xl" client/src/pages/**/*.tsx | grep -v "md:text-4xl" | wc -l >> font_size_issues.txt
echo "" >> font_size_issues.txt

echo "2. Body paragraphs WITHOUT text-lg:" >> font_size_issues.txt
grep -n "<p.*className" client/src/pages/**/*.tsx | grep -v "text-lg\|text-xl\|text-sm\|text-white" | head -20 >> font_size_issues.txt
echo "" >> font_size_issues.txt

echo "3. Body text using text-gray-600 (should be text-gray-700):" >> font_size_issues.txt
grep -rn "text-gray-600" client/src/pages/ | wc -l >> font_size_issues.txt
echo "" >> font_size_issues.txt

echo "4. H4 headings without text-xl:" >> font_size_issues.txt
grep -n "<h4" client/src/pages/**/*.tsx | grep -v "text-xl" | head -10 >> font_size_issues.txt

cat font_size_issues.txt
