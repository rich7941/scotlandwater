# Text Styling Analysis - ScotlandWater Website

## Current Issues Identified

Based on analysis of the homepage and sample pages (LeadPipeReplacement.tsx, Edinburgh.tsx), the following inconsistencies have been identified:

### Homepage Standard (Correct)
- **H1**: `text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1B3A6B] leading-tight`
- **H2**: `text-3xl md:text-4xl font-bold text-[#1B3A6B]`
- **H3**: `text-lg font-bold text-[#1B3A6B]`
- **Body Text**: `text-lg lg:text-xl text-gray-700` or `text-lg leading-relaxed`

### Service Pages (LeadPipeReplacement.tsx) - INCONSISTENT
- **H2**: Uses `text-[#5B2C6F]` (purple) instead of `text-[#1B3A6B]` (dark blue)
- **H3**: Uses `text-[#5B2C6F]` (purple) instead of `text-[#1B3A6B]` (dark blue)
- **H4**: Uses `text-[#5B2C6F]` (purple) instead of `text-[#1B3A6B]` (dark blue)

### Location Pages (Edinburgh.tsx) - INCONSISTENT
- **H2**: Uses `text-[#1e3a8a]` (different blue) instead of `text-[#1B3A6B]`
- **H3**: Uses `text-[#1e3a8a]` (different blue) instead of `text-[#1B3A6B]`
- **H4**: Uses `text-[#5B2C6F]` (purple) - mixed with blue headings

## Required Changes

### All Service Pages (in client/src/pages/services/)
Replace all instances of:
- `text-[#5B2C6F]` → `text-[#1B3A6B]` (for all headings)

### All Location Pages (in client/src/pages/locations/)
Replace all instances of:
- `text-[#1e3a8a]` → `text-[#1B3A6B]` (for H2, H3)
- `text-[#5B2C6F]` → `text-[#1B3A6B]` (for H4)

### All Help & Advice Pages (in client/src/pages/help-advice/)
Replace all instances of:
- `text-[#5B2C6F]` → `text-[#1B3A6B]` (for all headings)
- `text-[#1e3a8a]` → `text-[#1B3A6B]` (if present)

### Other Pages (About, Contact, Reviews, etc.)
Check and replace any non-standard heading colors with `text-[#1B3A6B]`

## Standard to Apply

All heading elements across all pages should use:
- **Color**: `text-[#1B3A6B]` (dark blue) - the homepage standard
- **Exception**: Only when headings appear on purple backgrounds (`bg-[#5B2C6F]`), they should be white (`text-white`)

Body text should consistently use:
- `text-gray-700` for standard body text on white backgrounds
- `text-white` for text on purple backgrounds
