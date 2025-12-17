# CTA Section Analysis

## Finding

I've scrolled through the entire Lead Pipe Replacement Scheme page and **the "Want to talk to someone?" purple CTA section is NOT visible** on the live website.

## Code Status

The section DOES exist in the source code at lines 612-626:

```tsx
{/* Want to Talk Section - Purple */}
<section className="py-12 bg-[#5B2C6F]">
  <div className="container flex flex-col md:flex-row items-center justify-between">
    <div className="text-white mb-6 md:mb-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Want to talk to someone?</h2>
      <p className="text-lg">Call us 24/7, 365 days a year</p>
    </div>
    <Button
      className="bg-[#F4E04D] text-[#1B3A6B] hover:bg-[#F4E04D]/90 font-bold text-xl px-12 py-6"
      onClick={() => (window.location.href = "tel:08003167322")}
    >
      0800 316 7322
    </Button>
  </div>
</section>
```

## Issue

The section exists in code but is not rendering on the live site. This could be due to:
1. Build/deployment issue
2. React rendering error
3. CSS issue hiding the section
4. JavaScript error preventing rendering

## Action Required

Need to check if there's a build error or deployment issue preventing this section from displaying.
