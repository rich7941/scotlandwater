#!/bin/bash

echo "=== HOMEPAGE FONT SIZE STANDARDS ==="
echo ""
echo "H1 (Hero/Page Titles):"
grep -h "className.*h1\|<h1" client/src/components/{Hero,Services,About}.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq
echo ""
echo "H2 (Section Headings):"
grep -h "className.*h2\|<h2" client/src/components/{Hero,Services,About}.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq
echo ""
echo "H3 (Subsection Headings):"
grep -h "className.*h3\|<h3" client/src/components/{Hero,Services,About}.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq
echo ""
echo "Body Text:"
grep -h "className.*<p\|<p.*className" client/src/components/{Hero,Services,About}.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq
echo ""
echo "=== CURRENT PAGE VARIATIONS ==="
echo ""
echo "Service Pages H2 sizes:"
grep -h "<h2" client/src/pages/services/*.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq -c
echo ""
echo "Service Pages H3 sizes:"
grep -h "<h3" client/src/pages/services/*.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq -c
echo ""
echo "Service Pages H4 sizes:"
grep -h "<h4" client/src/pages/services/*.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq -c
echo ""
echo "Service Pages body text sizes:"
grep -h "<p" client/src/pages/services/*.tsx | grep -o 'text-[0-9a-z-]*' | sort | uniq -c
