# ScotWater Website - Complete Backup & Deployment Guide

## 📦 What's Included

This ZIP file contains the complete ScotWater website with:

- ✅ All source code (React + TypeScript)
- ✅ All 34 pages (Home, About, Reviews, Contact, 9 service pages, 7 help/advice pages, 2 legal pages, 10 location pages)
- ✅ All images and assets
- ✅ All CSS and styling (Tailwind CSS 4)
- ✅ Complete component library
- ✅ Scroll-to-top navigation functionality
- ✅ Responsive design for all devices
- ✅ Configuration files (package.json, vite.config.ts, etc.)

## 🚀 Quick Start - Deploy Anywhere

### Prerequisites
- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation Steps

1. **Extract the ZIP file**
   ```bash
   unzip scotlandwater-complete-backup-20251113.zip
   cd scotlandwater
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Run development server**
   ```bash
   pnpm run dev
   # or: npm run dev
   ```
   Open http://localhost:3000 in your browser

4. **Build for production**
   ```bash
   pnpm run build
   # or: npm run build
   ```
   Production files will be in `dist/public/`

## 🌐 Deployment Options

### Option 1: Netlify (Current Setup)

**Automatic Deployment from GitHub:**
1. Push code to GitHub repository
2. Connect Netlify to your GitHub repo
3. Set build command: `pnpm run build`
4. Set publish directory: `dist/public`
5. Deploy automatically on every push

**Manual Deployment:**
```bash
pnpm run build
npx netlify deploy --prod --dir=dist/public
```

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

### Option 3: Any Static Host

Build the site and upload the `dist/public/` folder to:
- GitHub Pages
- AWS S3 + CloudFront
- DigitalOcean Spaces
- Cloudflare Pages
- Any web server (Apache, Nginx, etc.)

## 📁 Project Structure

```
scotlandwater/
├── client/
│   ├── public/              # Static assets (images, favicon, etc.)
│   │   └── images/          # All website images
│   ├── src/
│   │   ├── components/      # Reusable components (Header, Footer, etc.)
│   │   ├── pages/           # All 34 page components
│   │   │   ├── services/    # 9 service pages
│   │   │   ├── help-advice/ # 7 help & advice pages
│   │   │   └── locations/   # 10 location pages
│   │   ├── App.tsx          # Main app with routing & scroll-to-top
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
├── package.json             # Dependencies
├── vite.config.ts           # Build configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── netlify.toml             # Netlify configuration
└── todo.md                  # Project task list

```

## 🔧 Configuration

### Environment Variables
No environment variables required for basic deployment.

### Build Configuration
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 4
- **Routing:** Wouter (client-side routing)
- **Build command:** `pnpm run build`
- **Output directory:** `dist/public`

## 📄 All Pages Included

### Main Pages (4)
- Home (/)
- About (/about)
- Reviews (/reviews)
- Contact (/contact)

### Service Pages (9)
- Lead Pipe Replacement (/services/lead-pipe-replacement)
- Water Supply Pipe Renewals (/services/water-supply-pipe-renewals)
- Water Supply Pipe Installations (/services/water-supply-pipe-installations)
- Water Supply Pipe Repairs (/services/water-supply-pipe-repairs)
- Water Main Installations (/services/water-main-installations)
- Water Main Renewals (/services/water-main-renewals)
- Water Main Repairs (/services/water-main-repairs)
- Water Leak Detection (/services/water-leak-detection)
- Impact Moling (/services/impact-moling)

### Help & Advice Pages (7)
- Water Leaks (/help-advice/water-leaks)
- Lead Pipe Replacement Scheme (/help-advice/lead-pipe-replacement-scheme)
- Lead Pipe in Scotland (/help-advice/lead-pipe-in-scotland)
- Lead Pipe Landlords (/help-advice/lead-pipe-landlords)
- Lead Pipe Replacement (/help-advice/lead-pipe-replacement)
- Water Filter (/help-advice/water-filter)
- Impact Moling Prices 2025 (/help-advice/impact-moling-prices-2025-scotland)

### Legal Pages (2)
- Privacy Policy (/privacy-policy)
- Terms & Conditions (/terms-and-conditions)

### Location Pages (10)
- Edinburgh (/locations/edinburgh)
- Glasgow (/locations/glasgow)
- Aberdeen (/locations/aberdeen)
- Inverness (/locations/inverness)
- Dundee (/locations/dundee)
- Paisley (/locations/paisley)
- East Kilbride (/locations/east-kilbride)
- Livingston (/locations/livingston)
- Dunfermline (/locations/dunfermline)
- Hamilton (/locations/hamilton)

## ✨ Features

- ✅ Fully responsive design
- ✅ Dropdown navigation menus
- ✅ Scroll-to-top on page navigation
- ✅ Professional styling with Tailwind CSS
- ✅ Fast loading with Vite build system
- ✅ SEO-friendly structure
- ✅ Clean, maintainable code
- ✅ Easy to customize

## 🛠️ Customization

### Update Content
- Edit page files in `client/src/pages/`
- Modify components in `client/src/components/`

### Change Styling
- Global styles: `client/src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific: Inline Tailwind classes

### Add New Pages
1. Create new page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `Header.tsx` or `Footer.tsx`

## 📞 Support

For questions or issues:
- GitHub: https://github.com/rich7941/scotlandwater
- Live site: https://scotlandwater.netlify.app

## 📝 License

All rights reserved. This is a complete backup for duplication purposes.

---

**Backup Date:** November 13, 2025
**Version:** Latest with scroll-to-top functionality
**Total Pages:** 34
**Status:** Production-ready ✅
