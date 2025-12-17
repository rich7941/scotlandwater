# ScotWater Website - Complete Backup & Deployment Guide

## 📦 Package Contents

This backup contains the complete ScotWater website with:

- ✅ All source code (TypeScript/React)
- ✅ All CSS and styling files
- ✅ All images and assets
- ✅ Configuration files
- ✅ Server code
- ✅ Package dependencies list
- ✅ Build configuration

## 🚀 Quick Start Deployment

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (or npm/yarn)
- Git (optional, for version control)

### Installation Steps

1. **Extract the ZIP file**
   ```bash
   unzip scotlandwater-complete-backup.zip
   cd scotlandwater
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or: npm install
   # or: yarn install
   ```

3. **Run locally for testing**
   ```bash
   pnpm dev
   # or: npm run dev
   ```
   
   Visit: http://localhost:5000

4. **Build for production**
   ```bash
   pnpm build
   # or: npm run build
   ```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Current Host)

1. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

2. **Via Netlify Web UI:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository or drag & drop the `dist` folder
   - Build settings:
     - Build command: `pnpm build`
     - Publish directory: `dist`

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 3: GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set build command: `pnpm build`
4. Set publish directory: `dist`

### Option 4: Any Static Host

Build the site and upload the `dist` folder to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages
- DigitalOcean App Platform

## 📁 Project Structure

```
scotlandwater/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (images, fonts)
│   └── src/               # Source code
│       ├── components/    # React components
│       ├── pages/         # Page components
│       ├── data/          # Data files
│       └── lib/           # Utilities
├── server/                # Backend server code
├── shared/                # Shared code
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── netlify.toml          # Netlify configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory if needed:

```env
VITE_APP_TITLE=ScotWater
VITE_SITE_URL=https://scotlandwater.netlify.app
```

### Build Configuration

The site uses Vite for building. Configuration is in `vite.config.ts`.

### Netlify Configuration

Deployment settings are in `netlify.toml`:
- Build command: `pnpm build`
- Publish directory: `dist`
- Redirects configured for SPA routing

## 📝 Key Files

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Build configuration
- `netlify.toml` - Netlify deployment settings
- `tsconfig.json` - TypeScript configuration
- `client/src/main.tsx` - Application entry point
- `client/src/App.tsx` - Main app component

## 🛠️ Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm type-check
```

## 📱 Features

- Responsive design (mobile, tablet, desktop)
- React Router for navigation
- TypeScript for type safety
- Tailwind CSS for styling
- SEO optimized
- Fast page loads with Vite

## 🔗 Important URLs

- Live site: https://scotlandwater.netlify.app
- GitHub: https://github.com/rich7941/scotlandwater
- Project ID: 87145c8f-3962-4213-a5fd-bd3233a87ec2

## 📞 Support

For questions or issues:
- Email: hello@scotwater.co.uk
- Phone: 0800 206 2778

## 📄 License

Copyright © ScotWater 2025
Registered office: Hudson House, 8 Albany Street, Edinburgh, EH1 3QB

---

**Backup Created:** December 15, 2025
**Version:** Complete source code with all assets
