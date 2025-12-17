# Homepage Text Styling Standards

Based on analysis of the scotlandwater homepage components, here are the text styling standards to apply across all pages:

## Typography

### Font Family
- Default: System font stack (via Tailwind CSS)
- Applied globally through body element

### Headings

#### H1 (Main Hero Headings)
- Classes: `text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1B3A6B] leading-tight`
- Font size: 2.25rem (36px) mobile, 3rem (48px) lg, 3.75rem (60px) xl
- Color: #1B3A6B (dark blue)
- Font weight: bold
- Line height: tight

#### H2 (Section Headings)
- Classes: `text-3xl md:text-4xl font-bold text-[#1B3A6B]`
- Font size: 1.875rem (30px) mobile, 2.25rem (36px) md
- Color: #1B3A6B (dark blue)
- Font weight: bold
- Alternative for white backgrounds: Same size but on purple background (#5B2C6F) with white text

#### H3 (Service/Card Titles)
- Classes: `text-lg font-bold text-[#1B3A6B]`
- Font size: 1.125rem (18px)
- Color: #1B3A6B (dark blue)
- Font weight: bold

### Body Text

#### Large Body Text (Hero/Lead Paragraphs)
- Classes: `text-lg lg:text-xl text-gray-700`
- Font size: 1.125rem (18px) mobile, 1.25rem (20px) lg
- Color: #374151 (gray-700)

#### Standard Body Text
- Classes: `text-lg leading-relaxed`
- Font size: 1.125rem (18px)
- Line height: relaxed (1.625)
- Color: Inherits from parent (white on purple sections, gray-700 on white sections)

## Colors

### Primary Text Colors
- Dark Blue: `#1B3A6B` - Used for headings on white/light backgrounds
- Gray: `text-gray-700` (#374151) - Used for body text on white backgrounds
- White: `text-white` - Used for text on purple (#5B2C6F) backgrounds

### Background Colors
- White: `bg-white` - Main sections
- Gray: `bg-gray-50` (#F9FAFB) - Alternate sections
- Purple: `bg-[#5B2C6F]` - Accent sections (About, CTA)

## Spacing

### Section Padding
- Standard: `py-16` (4rem / 64px top and bottom)
- Hero sections: `py-12 lg:py-20` (3rem mobile, 5rem desktop)

### Text Spacing
- Heading bottom margin: `mb-6` (1.5rem / 24px) for H2, `mb-12` (3rem / 48px) for section headings
- Paragraph spacing: `mb-8` (2rem / 32px)
- Content spacing: `space-y-6` (1.5rem / 24px between elements)

### Container
- Max width: 1280px (defined in index.css)
- Padding: 1rem mobile, 1.5rem tablet, 2rem desktop
- Centered: `mx-auto`

## Consistency Rules

1. All H1 headings should use `text-[#1B3A6B]` color
2. All H2 section headings should use `text-[#1B3A6B]` unless on purple background
3. Body text on white backgrounds should use `text-gray-700`
4. Maintain consistent spacing with `py-16` for sections
5. Use `leading-tight` for headings, `leading-relaxed` for body text
6. Font weight should be `font-bold` for all headings
