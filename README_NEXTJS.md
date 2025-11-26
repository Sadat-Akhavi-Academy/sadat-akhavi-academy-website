# Sadat Akhavi Academy Website - Next.js Migration

This repository contains the Next.js version of the Sadat Akhavi Academy website, configured for static site generation and deployment to GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Docker (for containerized deployment)

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a static export:

```bash
npm run build
```

This generates a static site in the `out/` directory.

## 🐳 Docker Deployment

### Build the Docker Image

```bash
docker build -t sadat-akhavi-academy-website .
```

### Run the Container

```bash
docker run -d -p 80:80 --name saa-website sadat-akhavi-academy-website
```

The website will be available at `http://localhost`

### Docker Compose (Optional)

Create a `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## 📦 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── privacypolicy/     # Privacy policy page
│   │   └── pages/             # Product pages
│   │       ├── alpha_bike_j/
│   │       ├── alpha_bike_x/
│   │       └── ...
│   └── components/            # React components
│       ├── ClientScripts.tsx  # Client-side functionality
│       └── ProductPage.tsx    # Reusable product page template
├── public/                    # Static assets (images, fonts, etc.)
│   ├── images/
│   ├── CNAME
│   ├── robots.txt
│   └── sitemap.xml
├── Dockerfile                 # Docker configuration for Linux VM
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🌐 GitHub Pages Deployment

The site automatically deploys to GitHub Pages when you push to the `production` branch.

### Setup GitHub Pages

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. The workflow in `.github/workflows/nextjs.yml` handles the deployment

### Manual Deployment

```bash
npm run build
# The static files in 'out/' can be deployed to any static hosting
```

## 🔧 Configuration

### Next.js Configuration (`next.config.js`)

- `output: 'export'` - Enables static export
- `images.unoptimized: true` - Required for static export
- `trailingSlash: true` - Adds trailing slashes to URLs

### Environment Variables

No environment variables are required for the current setup. All external links are hardcoded.

## 📄 Static Assets

All static files should be placed in the `public/` directory:

- `/public/images/` - All image assets
- `/public/CNAME` - Custom domain configuration
- `/public/robots.txt` - SEO robots file
- `/public/sitemap.xml` - Sitemap for search engines

## 🛠️ Creating New Product Pages

To add a new product page:

1. Create a new directory under `src/app/pages/[product-name]/`
2. Add a `page.tsx` file using the ProductPage component
3. Configure the product details, images, and metadata

Example:

```tsx
import ProductPage from '@/components/ProductPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Name - Sadat Akhavi Academy',
  // ... other metadata
}

export default function ProductNamePage() {
  return (
    <ProductPage
      title="Product Name"
      slug="product-name"
      mainImage="/images/product.jpg"
      description={["Description paragraphs..."]}
      // ... other props
    />
  )
}
```

## 🎨 Styling

The project uses:
- Global CSS in `src/app/globals.css`
- W3.CSS framework (loaded via CDN)
- Font Awesome icons (loaded via CDN)

## 📊 Analytics

Google Analytics (G-Y85LB15940) is integrated in the root layout.

## 🔐 SEO & Metadata

- Comprehensive metadata in each page
- Open Graph tags for social sharing
- Structured data (JSON-LD) for search engines
- Canonical URLs
- Sitemap and robots.txt

## 🚢 Deployment Options

### Option 1: GitHub Pages (Current)
Automatic deployment via GitHub Actions to GitHub Pages.

### Option 2: Docker on Linux VM
```bash
# Build and run with Docker
docker build -t saa-website .
docker run -d -p 80:80 saa-website
```

### Option 3: Any Static Host
Deploy the `out/` directory to:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Any web server

## 📝 License

© 2024 Sadat Akhavi Academy (Xigrom Pty Ltd). All rights reserved.

## 🤝 Contributing

For questions or contributions, contact: contactus@sadat-akhavi-academy.com

## 🔗 Links

- Website: https://sadat-akhavi-academy.com
- YouTube: https://www.youtube.com/@sadat-akhavi-academy
- Discord: https://discord.gg/2fA3ypEcHb
- Instagram: https://www.instagram.com/sadat.akhavi.academy/
