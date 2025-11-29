# Product Data Management Guide

## Overview

The product pages are now **data-driven** and generated dynamically from a single source of truth. This means:

- ✅ **One file to rule them all**: All product information lives in `/src/data/products.ts`
- ✅ **No duplicate code**: All pages use the same template component
- ✅ **Easy to maintain**: Add/edit/remove products by updating the data file
- ✅ **Type-safe**: TypeScript ensures data consistency
- ✅ **SEO-optimized**: Metadata is automatically generated from product data

## File Structure

```
src/
├── data/
│   └── products.ts          # 🎯 ONLY data source (TypeScript)
├── app/
│   └── pages/
│       └── [slug]/
│           └── page.tsx      # 🎨 Dynamic route template
└── components/
    └── ProductPage.tsx       # 🧩 Reusable product page component
```

## How It Works

### 1. Data File (`src/data/products.ts`)

This is where all product information lives. Each product has:

```typescript
{
  slug: 'alpha_bike_j',              // URL identifier
  title: 'Alpha Bike J',             // Display name
  status: 'active',                  // 'active' or 'retiring'
  metaTitle: '...',                  // Browser tab title
  metaDescription: '...',            // Search engine description
  metaKeywords: '...',               // SEO keywords
  ogImage: '...',                    // Social media preview image
  mainImage: '/images/...',          // Hero image
  gallery: ['...'],                  // Gallery images array
  description: ['...', '...'],       // Description paragraphs
  introVideoId: '...',               // YouTube video ID
  assemblyVideoId: '...',            // Optional assembly video
  guideDocUrl: '...',                // Optional guide document
  printingDocUrl: '...',             // Optional 3D printing guide
  softwareUrl: '...',                // Optional code repository
  skills: [{icon: '...', name: '...'}], // Skills learned
  relatedKits: [{title: '...', slug: '...'}] // Related products
}
```

### 2. Dynamic Route (`src/app/pages/[slug]/page.tsx`)

This template:
- Reads product data based on URL slug
- Generates SEO metadata automatically
- Renders the product page using the `ProductPage` component
- Returns 404 if product doesn't exist

### 3. Component (`src/components/ProductPage.tsx`)

The reusable client component that renders all product pages with:
- Navigation bar
- Hero section with main image
- Description paragraphs
- Video embeds (intro, assembly, troubleshooting, etc.)
- Photo gallery with lightbox
- Skills badges
- Resource links (guides, software, etc.)
- Related products
- Footer

## Adding a New Product

### Method 1: Edit TypeScript File (Recommended)

1. Open `/src/data/products.ts`
2. Add a new object to the `products` array:

```typescript
{
  slug: 'new_product',
  title: 'New Product',
  status: 'active',
  metaTitle: 'New Product - Amazing Kit | Sadat Akhavi Academy',
  metaDescription: 'Build the New Product...',
  metaKeywords: 'new product, DIY, robotics',
  ogImage: 'https://sadat-akhavi-academy.com/images/new_product.jpg',
  ogUrl: 'https://sadat-akhavi-academy.com/pages/new_product',
  mainImage: '/images/new_product.jpg',
  gallery: [
    '/images/new_product_1.jpg',
    '/images/new_product_2.jpg'
  ],
  description: [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph..."
  ],
  introVideoId: 'YOUTUBE_VIDEO_ID',
  skills: [
    { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
    { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
  ],
  relatedKits: [
    { title: 'Alpha Bike J', slug: 'alpha_bike_j' }
  ]
}
```

3. Save the file
4. The new page is automatically available at `/pages/new_product`

### Method 2: Edit CSV File

1. Open `/src/data/products.csv` in Excel, Google Sheets, or any spreadsheet software
2. Add a new row with all product information
3. **Important**: After editing CSV, you must manually sync changes to `products.ts`

⚠️ **Note**: The CSV file is for reference and easier editing. Changes must be manually copied to the TypeScript file.

## Editing an Existing Product

1. Open `/src/data/products.ts`
2. Find the product by its `slug`
3. Edit any field(s)
4. Save the file
5. Changes are immediately reflected on the website

## Removing a Product

### Option 1: Mark as Retiring

```typescript
{
  slug: 'old_product',
  status: 'retiring',  // Change from 'active' to 'retiring'
  // ... rest of the data
}
```

### Option 2: Delete Completely

1. Open `/src/data/products.ts`
2. Remove the entire product object from the array
3. Save the file
4. The page will return 404

## Product Fields Reference

| Field | Required | Type | Description | Example |
|-------|----------|------|-------------|---------|
| `slug` | ✅ Yes | string | URL identifier (lowercase, hyphens) | `'alpha_bike_j'` |
| `title` | ✅ Yes | string | Display name | `'Alpha Bike J'` |
| `status` | ⚠️ Optional | 'active' \| 'retiring' | Product status | `'active'` |
| `metaTitle` | ✅ Yes | string | Browser tab title | `'Alpha Bike J - DIY Kit'` |
| `metaDescription` | ✅ Yes | string | SEO description | `'Build your own...'` |
| `metaKeywords` | ✅ Yes | string | SEO keywords (comma-separated) | `'robotics, DIY, kit'` |
| `ogImage` | ✅ Yes | string | Full URL for social media | `'https://...'` |
| `ogUrl` | ✅ Yes | string | Full page URL | `'https://...'` |
| `mainImage` | ✅ Yes | string | Hero image path | `'/images/hero.jpg'` |
| `gallery` | ✅ Yes | string[] | Array of image paths | `['/images/1.jpg']` |
| `description` | ✅ Yes | string[] | Array of paragraphs | `['First...', 'Second...']` |
| `introVideoId` | ✅ Yes | string | YouTube video ID | `'qB5FXVPfYr4'` |
| `assemblyVideoId` | ❌ No | string | Assembly guide video | `'fkp69hrBfW0'` |
| `guideDocUrl` | ❌ No | string | Google Docs guide link | `'https://docs.google.com/...'` |
| `printingDocUrl` | ❌ No | string | 3D printing guide link | `'https://docs.google.com/...'` |
| `troubleshootingVideoId` | ❌ No | string | Troubleshooting video | `'xyz123'` |
| `deepDiveVideoId` | ❌ No | string | Deep dive video | `'abc789'` |
| `softwareUrl` | ❌ No | string | GitLab/GitHub repo | `'https://gitlab.com/...'` |
| `skills` | ✅ Yes | Array | Skills learned | `[{icon: '...', name: '...'}]` |
| `relatedKits` | ❌ No | Array | Related products | `[{title: '...', slug: '...'}]` |

## Helper Functions

The data file includes helper functions:

```typescript
// Get specific product
const product = getProductBySlug('alpha_bike_j')

// Get all slugs (for static generation)
const slugs = getAllProductSlugs()

// Get only active products
const active = getActiveProducts()

// Get retiring products
const retiring = getRetiringProducts()
```

## Benefits of This Approach

### 1. **No Code Duplication**
- Before: 6 separate page files with similar code
- After: 1 template + 1 data file

### 2. **Easy Maintenance**
- Update product info in one place
- Add new products without touching code
- Consistent formatting across all pages

### 3. **Type Safety**
- TypeScript catches errors before runtime
- Auto-completion in VS Code
- Guaranteed data consistency

### 4. **SEO Optimized**
- Metadata generated automatically
- Consistent structure across pages
- Open Graph tags for social media

### 5. **Scalability**
- Add 100 products without 100 files
- Easy to bulk edit
- Simple to integrate with CMS later

## Migration Notes

The old structure:
```
src/app/pages/
├── alpha_bike_j/page.tsx
├── alpha_bike_x/page.tsx
├── alpha_bike_x_plus/page.tsx
├── clockometer/page.tsx
├── turbo-thumb/page.tsx
└── turbo_thumb_plus/page.tsx
```

Has been replaced with:
```
src/
├── data/products.ts         # All product data
└── app/pages/[slug]/page.tsx  # Single template
```

All URLs remain the same:
- `/pages/alpha_bike_j` ✅ Still works
- `/pages/turbo_thumb_plus` ✅ Still works
- `/pages/clockometer` ✅ Still works

## Troubleshooting

### Product page shows 404
- Check that `slug` in data matches URL
- Ensure product exists in `products` array
- Verify the development server is running

### Images not showing
- Check image paths start with `/images/`
- Verify images exist in `/public/images/`
- Check for typos in filenames

### Videos not loading
- Ensure `introVideoId` is just the ID, not full URL
- Example: Use `'qB5FXVPfYr4'` not `'https://youtube.com/watch?v=qB5FXVPfYr4'`

### Changes not appearing
- Save the file
- Restart dev server if needed: `Ctrl+C` then `npm run dev`
- Clear browser cache

## Next Steps

Want to extend this system? You can:

1. **Add more fields**: Edit `ProductData` interface in `products.ts`
2. **Add filtering**: Use helper functions to filter by category, price, etc.
3. **Add search**: Create a search page that queries the products array
4. **Connect to CMS**: Replace static file with database or headless CMS
5. **Add admin panel**: Build a UI to edit products without touching code

## Questions?

- Check the TypeScript file: `/src/data/products.ts` (fully documented)
- Review the template: `/src/app/pages/[slug]/page.tsx`
- Look at the component: `/src/components/ProductPage.tsx`
