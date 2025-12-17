# Homepage Font Size Standards - ScotlandWater

## Standard Font Sizes (from Homepage Components)

### H1 - Hero/Page Titles
**Classes:** `text-4xl md:text-6xl` or `text-4xl lg:text-5xl xl:text-6xl`
- Mobile: `text-4xl` (2.25rem / 36px)
- Tablet (md): `text-6xl` (3.75rem / 60px) OR
- Large (lg): `text-5xl` (3rem / 48px)
- XL: `text-6xl` (3.75rem / 60px)
- Weight: `font-bold`

### H2 - Section Headings
**Classes:** `text-3xl md:text-4xl`
- Mobile: `text-3xl` (1.875rem / 30px)
- Tablet (md): `text-4xl` (2.25rem / 36px)
- Weight: `font-bold`

### H3 - Subsection Headings
**Classes:** `text-2xl`
- All sizes: `text-2xl` (1.5rem / 24px)
- Weight: `font-bold`

### H4 - Minor Headings
**Classes:** `text-xl`
- All sizes: `text-xl` (1.25rem / 20px)
- Weight: `font-bold`

### Body Text - Standard Paragraphs
**Classes:** `text-lg` or `text-lg lg:text-xl`
- Mobile: `text-lg` (1.125rem / 18px)
- Large (lg): `text-xl` (1.25rem / 20px) - optional for hero/lead paragraphs
- Color: `text-gray-700` on white backgrounds
- Line height: `leading-relaxed` for longer content

### Body Text - Lists
**Classes:** `text-lg`
- All sizes: `text-lg` (1.125rem / 18px)
- Color: `text-gray-700`

## Current Issues Found

### Service Pages
- H2: Mix of `text-3xl` and `text-4xl` (inconsistent responsive sizing)
- H3: Using `text-2xl` (CORRECT)
- H4: Using `text-xl` (CORRECT)
- Body: Mix of sizes, some missing `text-lg`, some have `text-gray-600` instead of `text-gray-700`

### Location Pages
- Similar inconsistencies with H2 sizing
- Some body text using `text-gray-600` instead of standard `text-gray-700`

## Standardization Rules

1. **H1**: Always use `text-4xl md:text-6xl` for page hero titles
2. **H2**: Always use `text-3xl md:text-4xl` for section headings
3. **H3**: Always use `text-2xl` for subsection headings
4. **H4**: Always use `text-xl` for minor headings
5. **Body paragraphs**: Always use `text-lg` (with optional `lg:text-xl` for hero/lead paragraphs only)
6. **Body color**: Always use `text-gray-700` on white backgrounds (not `text-gray-600`)
7. **List items**: Always use `text-lg text-gray-700`
