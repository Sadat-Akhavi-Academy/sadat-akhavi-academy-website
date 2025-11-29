# Product Page System Architecture

## Visual Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     DATA LAYER                              │
│  📄 /src/data/products.ts (Single Source of Truth)         │
│                                                             │
│  ┌───────────────────────────────────────────────────┐    │
│  │ Product 1                                          │    │
│  │ ├─ productCode: 'SAA-ABX-002'                     │    │
│  │ ├─ slug: 'alpha_bike_x_plus'                      │    │
│  │ ├─ title: 'Alpha Bike X+'                         │    │
│  │ ├─ description: [...]                              │    │
│  │ ├─ images, videos, links                          │    │
│  │ └─ relatedKits: [                                 │    │
│  │     { productCode: 'SAA-TTH-002' } ───────┐       │    │
│  │   ]                                        │       │    │
│  └────────────────────────────────────────────│───────┘    │
│                                               │            │
│  ┌────────────────────────────────────────────▼───────┐    │
│  │ Product 2                                          │    │
│  │ ├─ productCode: 'SAA-TTH-002' ◄────────────────┐  │    │
│  │ ├─ slug: 'turbo_thumb_plus'                    │  │    │
│  │ ├─ title: 'Turbo Thumb+'                       │  │    │
│  │ └─ relatedKits: [                              │  │    │
│  │     { productCode: 'SAA-ABX-002' } ────────────┘  │    │
│  │   ]                                                │    │
│  └────────────────────────────────────────────────────┘    │
│                                                             │
│  Helper Functions:                                         │
│  • getProductByCode('SAA-ABX-002')                        │
│  • getProductBySlug('alpha_bike_j')                       │
│  • getAllProductSlugs()                                   │
│  • getActiveProducts()                                    │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ reads data
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   ROUTING LAYER                             │
│  📄 /src/app/pages/[slug]/page.tsx                         │
│                                                             │
│  Dynamic Route: /pages/{anything}                          │
│                                                             │
│  1️⃣ Receives slug from URL                                 │
│  2️⃣ Calls getProductBySlug(slug)                           │
│  3️⃣ Generates metadata for SEO                             │
│  4️⃣ Resolves related product codes                         │
│  5️⃣ Passes everything to ProductPage component             │
│                                                             │
│  Static Generation:                                        │
│  • At build time, generates HTML for ALL products         │
│  • Each product gets its own static HTML file             │
│  • Super fast page loads (pre-rendered)                   │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ renders
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  COMPONENT LAYER                            │
│  📄 /src/components/ProductPage.tsx                        │
│                                                             │
│  Client Component ('use client')                           │
│                                                             │
│  Receives props:                                           │
│  • title, slug, productCode                               │
│  • images, videos, descriptions                           │
│  • relatedProductCodes                                    │
│                                                             │
│  Renders:                                                  │
│  ├─ Navigation Bar                                        │
│  ├─ Hero Section (main image)                            │
│  ├─ Description Paragraphs                               │
│  ├─ Video Embeds (intro, assembly, etc.)                 │
│  ├─ Photo Gallery with Lightbox                          │
│  ├─ Skills Badges                                        │
│  ├─ Resource Links (docs, software)                      │
│  ├─ Related Products (resolved from codes)               │
│  └─ Footer                                               │
│                                                             │
│  Uses getProductByCode() to resolve related products      │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ displays
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     USER'S BROWSER                          │
│                                                             │
│  URL: /pages/alpha_bike_j                                  │
│                                                             │
│  ┌───────────────────────────────────────────────────┐    │
│  │  [Navigation Bar]                                  │    │
│  ├───────────────────────────────────────────────────┤    │
│  │  [Hero Image: Alpha Bike J]                       │    │
│  ├───────────────────────────────────────────────────┤    │
│  │  "Alpha Bike J is highly engaging..."             │    │
│  ├───────────────────────────────────────────────────┤    │
│  │  [YouTube Video Embed]                             │    │
│  ├───────────────────────────────────────────────────┤    │
│  │  [Photo Gallery]                                   │    │
│  ├───────────────────────────────────────────────────┤    │
│  │  Skills: Robotics | Electronics | 3D Design       │    │
│  ├───────────────────────────────────────────────────┤    │
│  │  Related Products:                                 │    │
│  │  • Turbo Thumb  ◄─── Resolved from SAA-TTH-001    │    │
│  │  • Alpha Bike X ◄─── Resolved from SAA-ABX-001    │    │
│  └───────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
User visits URL                    Database
    │                                 │
    │ /pages/alpha_bike_j            │
    └──────────┬────────────────────►│
               │                      │
               │  1. Route receives   │ products.ts
               │     slug             │ [Product Data]
               │                      │
               │  2. Lookup product   │
               │     by slug          │
               │                      │
               │◄─────────────────────┤
               │  Product data        │
               │                      │
               │  3. Generate         │
               │     metadata         │
               │     (SEO)            │
               │                      │
               │  4. Resolve related  │
               │     product codes    │
               │     to full data     │
               │                      │
               │◄─────────────────────┤
               │  Related products    │
               │                      │
               │  5. Render page      │
               │     component        │
               │                      │
               └──────────┐           │
                          │           │
               ┌──────────▼────────┐  │
               │                   │  │
               │  ProductPage.tsx  │  │
               │  [Rendered HTML]  │  │
               │                   │  │
               └──────────┬────────┘  │
                          │           │
                          │           │
                User sees page        │
```

## Product Code Resolution Flow

```
Component needs related products
           │
           │ relatedProductCodes: ['SAA-TTH-002', 'SAA-ABJ-001']
           │
           ▼
    ┌─────────────┐
    │   Loop      │
    │   through   │──► For each code
    │   codes     │
    └─────────────┘
           │
           ▼
    ┌──────────────────────┐
    │ getProductByCode()   │
    │ 'SAA-TTH-002'        │
    └──────────────────────┘
           │
           ▼
    ┌──────────────────────┐
    │ Returns full data:   │
    │ {                    │
    │   productCode: ...   │
    │   title: "Turbo..."  │
    │   slug: "turbo..."   │
    │   ...                │
    │ }                    │
    └──────────────────────┘
           │
           ▼
    ┌──────────────────────┐
    │ Render link:         │
    │ <Link href="/pages/  │
    │   turbo_thumb_plus"> │
    │   Turbo Thumb+       │
    │ </Link>              │
    └──────────────────────┘
```

## File Dependencies

```
src/data/products.ts
    │
    ├─► src/app/pages/[slug]/page.tsx
    │       │
    │       └─► src/components/ProductPage.tsx
    │               │
    │               └─► src/data/products.ts (circular for resolution)
    │
    └─► src/data/products.csv (manual export, reference only)
```

## Build Time vs Runtime

### Build Time (npm run build)
```
1. Next.js reads products.ts
2. Calls getAllProductSlugs()
   Returns: ['alpha_bike_j', 'turbo_thumb_plus', ...]
3. For each slug:
   - Generates static HTML page
   - Includes resolved related products
   - Embeds metadata
4. Output: dist/pages/alpha_bike_j/index.html (static files)
```

### Runtime (User Visit)
```
1. User requests /pages/alpha_bike_j
2. Server serves pre-built HTML (instant!)
3. Browser loads page
4. React hydrates (makes interactive)
5. Client-side features work (lightbox, navigation, etc.)
```

## Scalability

```
Number of Products    Code Complexity    Maintenance
─────────────────────────────────────────────────────
    1 product           Simple             Easy
   10 products          Simple             Easy
  100 products          Simple             Easy
 1000 products          Simple             Easy

Because: 1 template + 1 data file = ANY number of products!
```

## Benefits Visualization

### Old System (6 files, duplicate code)
```
Page 1 ──┐
Page 2 ──┤
Page 3 ──┼──► All contain similar code
Page 4 ──┤    Change design = edit 6 files
Page 5 ──┤    Add field = edit 6 files
Page 6 ──┘    Bug fix = fix 6 files
```

### New System (1 template, 1 data file)
```
Data ──┐
       ├──► Template ──► Generated Pages
       │                 • Page 1
Code ──┘                 • Page 2
                         • Page 3
                         • Page 4
                         • Page 5
                         • Page 6

Change design = edit 1 template
Add field = edit 1 data structure
Bug fix = fix 1 component
Add product = add 1 data entry
```

## Summary

**The system is:**
1. **Data-driven**: One file controls all pages
2. **Template-based**: One component renders all pages
3. **Code-referenced**: Products link via unique codes
4. **Type-safe**: TypeScript prevents errors
5. **Static**: Pre-rendered for speed
6. **Maintainable**: Easy to update
7. **Scalable**: Works for any number of products
