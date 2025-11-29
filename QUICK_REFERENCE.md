# 🎯 Quick Start: Managing Product Pages

## The Basics

All product pages are generated from **ONE FILE ONLY**: `/src/data/products.ts`

**This is the single source of truth - there is no CSV file.**

## 🚀 Quick Tasks

### Add a New Product

1. Open `/src/data/products.ts`
2. Copy an existing product entry
3. Change these fields:
   - `productCode`: `'SAA-XXX-NNN'` (assign next number in category)
   - `slug`: URL identifier (e.g., `'new_product'`)
   - `title`: Display name
   - `metaTitle`, `metaDescription`, `metaKeywords`: SEO fields
   - `mainImage`, `gallery`: Image paths
   - `description`: Array of paragraphs
   - `introVideoId`: YouTube video ID
   - `relatedKits`: Array of product codes
4. Save file
5. Done! Page available at `/pages/your-slug`

### Edit Product Information

1. Open `/src/data/products.ts`
2. Search for product by code or name
3. Edit any field
4. Save
5. Done!

### Change Related Products

1. Find product in `/src/data/products.ts`
2. Update `relatedKits` array:
   ```typescript
   relatedKits: [
     { productCode: 'SAA-TTH-002' },
     { productCode: 'SAA-ABJ-001' }
   ]
   ```
3. Save
4. Done!

### Mark Product as Retiring

1. Find product in `/src/data/products.ts`
2. Change `status: 'active'` to `status: 'retiring'`
3. Save
4. Done!

### Remove Product Completely

1. Find product in `/src/data/products.ts`
2. Delete entire product object
3. Save
4. Done! (Page will show 404)

## 📋 Product Codes

Every product has a unique code: `SAA-XXX-NNN`

### Current Products

| Code | Name | URL |
|------|------|-----|
| SAA-ABX-002 | Alpha Bike X+ | `/pages/alpha_bike_x_plus` |
| SAA-TTH-002 | Turbo Thumb+ | `/pages/turbo_thumb_plus` |
| SAA-ABJ-001 | Alpha Bike J | `/pages/alpha_bike_j` |
| SAA-CLK-001 | Clockometer | `/pages/clockometer` |
| SAA-ABX-001 | Alpha Bike X | `/pages/alpha_bike_x` |
| SAA-TTH-001 | Turbo Thumb | `/pages/turbo-thumb` |

### Next Available Codes
- **Alpha Bike X series**: `SAA-ABX-003`
- **Turbo Thumb series**: `SAA-TTH-003`
- **Alpha Bike Junior**: `SAA-ABJ-002`
- **Clockometer**: `SAA-CLK-002`

## 📁 Files to Know

| File | What It Does |
|------|--------------|
| `/src/data/products.ts` | 🎯 **EDIT THIS** - The ONLY data source |
| `/src/app/pages/[slug]/page.tsx` | Template (don't edit unless changing layout) |
| `/src/components/ProductPage.tsx` | Component (don't edit unless changing design) |

## 📝 Required Fields

When adding a product, these fields are **required**:

```typescript
{
  productCode: 'SAA-XXX-NNN',  // Unique code
  slug: 'url-slug',             // URL path
  title: 'Product Name',        // Display name
  status: 'active',             // or 'retiring'
  metaTitle: '...',             // Browser tab title
  metaDescription: '...',       // For search engines
  metaKeywords: '...',          // SEO keywords
  ogImage: 'https://...',       // Full URL for social media
  ogUrl: 'https://...',         // Full page URL
  mainImage: '/images/...',     // Hero image
  gallery: ['/images/...'],     // Array of images
  description: ['...'],         // Array of paragraphs
  introVideoId: '...',          // YouTube video ID
  skills: [{icon: '...', name: '...'}],  // Skills learned
}
```

## 🎨 Optional Fields

These fields are optional:

```typescript
{
  assemblyVideoId: '...',       // Assembly guide video
  guideDocUrl: '...',           // Google Docs guide
  printingDocUrl: '...',        // 3D printing guide
  softwareUrl: '...',           // Code repository
  troubleshootingVideoId: '...', // Troubleshooting video
  deepDiveVideoId: '...',       // Deep dive video
  relatedKits: [{productCode: '...'}],  // Related products
}
```

## 🔍 Finding Things

### Find Product by Name
1. Open `/src/data/products.ts`
2. Press `Ctrl+F` (or `Cmd+F` on Mac)
3. Search for product name

### Find Product by Code
1. Open `/src/data/products.ts`
2. Press `Ctrl+F`
3. Search for code (e.g., `SAA-ABX-002`)

### Find Product by URL
1. Open `/src/data/products.ts`
2. Press `Ctrl+F`
3. Search for slug (e.g., `alpha_bike_j`)

## ✅ Testing Changes

1. Save `/src/data/products.ts`
2. Open browser to `http://localhost:3000/pages/your-slug`
3. Check if changes appear correctly
4. If not, check browser console for errors

## 🚨 Common Mistakes

### ❌ Duplicate Product Code
```typescript
// BAD: Same code used twice
{ productCode: 'SAA-ABX-001', ... }
{ productCode: 'SAA-ABX-001', ... }  // ERROR!
```

### ✅ Use Next Sequential Number
```typescript
// GOOD: Each product has unique code
{ productCode: 'SAA-ABX-001', ... }
{ productCode: 'SAA-ABX-002', ... }
{ productCode: 'SAA-ABX-003', ... }
```

### ❌ Invalid Product Code Reference
```typescript
// BAD: Referencing non-existent product
relatedKits: [
  { productCode: 'SAA-XYZ-999' }  // Doesn't exist!
]
```

### ✅ Reference Existing Products Only
```typescript
// GOOD: Reference valid product codes
relatedKits: [
  { productCode: 'SAA-TTH-002' },  // Exists!
  { productCode: 'SAA-ABJ-001' }   // Exists!
]
```

### ❌ Missing Required Fields
```typescript
// BAD: Missing required fields
{
  productCode: 'SAA-NEW-001',
  slug: 'new-product'
  // Missing title, description, images, etc.
}
```

### ✅ Include All Required Fields
```typescript
// GOOD: All required fields present
{
  productCode: 'SAA-NEW-001',
  slug: 'new-product',
  title: 'New Product',
  // ... all other required fields
}
```

## 📖 Need More Help?

- **Full Guide**: Read `PRODUCT_DATA_GUIDE.md`
- **Product Codes**: See `PRODUCT_CODE_REFERENCE.md`
- **Overview**: Check `REFACTORING_SUMMARY.md`

## 💡 Pro Tips

1. **Always assign next sequential number** - Don't skip numbers
2. **Never reuse product codes** - Once assigned, they're permanent
3. **Test locally first** - Use `npm run dev` before deploying
4. **Keep descriptions concise** - 2-3 paragraphs per product
5. **Optimize images** - Keep file sizes reasonable
6. **Use meaningful slugs** - Clear, readable URLs
7. **Update CSV file** - Keep it in sync (manual step)

## That's It! 🎉

You now know everything to manage product pages. Just edit `/src/data/products.ts` and you're done!
