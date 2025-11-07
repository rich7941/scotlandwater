# ScotWater Website - Deployment Guide

## Package Contents

This ZIP contains everything needed to deploy the ScotWater website:

### 1. Production Build (`/dist/public/`)
- **Ready-to-deploy static files**
- All HTML, CSS, JavaScript (minified and optimized)
- All images and assets
- Can be deployed to any static hosting service

### 2. Source Code (`/client/`, `/server/`, `/shared/`)
- Complete React + TypeScript source code
- All components and pages
- Styling and configuration files

### 3. Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration
- `.netlify/netlify.toml` - Netlify deployment settings

### 4. Assets (`/client/public/`)
- All original images
- Logos and icons
- Service images

## Deployment Options

### Option 1: Deploy Production Build (Fastest)
Simply upload the contents of `/dist/public/` to any web hosting:

**Static Hosts:**
- Netlify: Drag & drop the `/dist/public/` folder
- Vercel: Deploy the `/dist/public/` folder
- GitHub Pages: Push to gh-pages branch
- AWS S3: Upload to S3 bucket with static hosting
- Any web server: Upload via FTP/SFTP

### Option 2: Deploy from Source
If you want to modify the site:

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Development mode:**
   ```bash
   npm run dev
   ```
   Opens at http://localhost:3000

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output: `/dist/public/`

4. **Deploy the `/dist/public/` folder**

## GitHub Repository
Already pushed to: https://github.com/rich7941/scotlandwater

## Current Live Site
- Production: https://scotlandwater.netlify.app
- Netlify Project ID: 87145c8f-3962-4213-a5fd-bd3233a87ec2

## Technology Stack
- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Build Tool:** Vite
- **Routing:** Wouter (client-side)

## File Structure
```
scotlandwater/
├── dist/public/          # Production build (deploy this)
├── client/               # Source code
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   └── ...
│   └── public/           # Static assets
├── package.json          # Dependencies
└── vite.config.ts        # Build config
```

## Support
For questions or modifications, refer to:
- GitHub: https://github.com/rich7941/scotlandwater
- Original site: https://www.scotwater.co.uk/

## Notes
- The site is currently a single-page application (homepage)
- All images are optimized (WebP + fallbacks)
- Fully responsive design
- No backend required (static site)
