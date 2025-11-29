# 📚 Documentation Index

## Product Pages System Documentation

Welcome! This guide will help you understand and manage the product pages system.

---

## 🚀 Start Here

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | Quick how-to guide | ⭐ **START HERE** - Daily tasks |
| **[REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md)** | Overview of changes | Understanding what changed |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Visual system diagrams | Understanding how it works |

---

## 📖 Detailed Guides

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **[PRODUCT_DATA_GUIDE.md](./PRODUCT_DATA_GUIDE.md)** | Complete data management guide | In-depth product management |
| **[PRODUCT_CODE_REFERENCE.md](./PRODUCT_CODE_REFERENCE.md)** | Product code system | Working with product codes |

---

## 💻 Code Files

| File | Purpose | Edit? |
|------|---------|-------|
| **[src/data/products.ts](./src/data/products.ts)** | Product data (TypeScript) | ✅ **YES** - Add/edit products here |
| **[src/data/products.csv](./src/data/products.csv)** | Product data (CSV) | ⚠️ Reference only (manual sync) |
| **[src/app/pages/[slug]/page.tsx](./src/app/pages/[slug]/page.tsx)** | Dynamic route template | ❌ No (unless changing routing) |
| **[src/components/ProductPage.tsx](./src/components/ProductPage.tsx)** | Product page component | ❌ No (unless changing design) |

---

## 🎯 Common Tasks

### I want to...

#### ➕ Add a new product
1. Read: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) → "Add a New Product"
2. Edit: `src/data/products.ts`
3. See: [PRODUCT_CODE_REFERENCE.md](./PRODUCT_CODE_REFERENCE.md) for next code

#### ✏️ Edit product information
1. Read: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) → "Edit Product Information"
2. Edit: `src/data/products.ts`

#### 🔗 Change related products
1. Read: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) → "Change Related Products"
2. Edit: `src/data/products.ts` → `relatedKits` array

#### 📊 Understand product codes
1. Read: [PRODUCT_CODE_REFERENCE.md](./PRODUCT_CODE_REFERENCE.md)
2. See: Product catalog with all codes

#### 🏗️ Understand the architecture
1. Read: [ARCHITECTURE.md](./ARCHITECTURE.md)
2. See: Visual diagrams of system

#### 📖 Learn everything
1. Read: [PRODUCT_DATA_GUIDE.md](./PRODUCT_DATA_GUIDE.md)
2. Learn: Complete system documentation

---

## 📂 File Structure

```
sadat-akhavi-academy-website/
│
├── 📄 Documentation (THIS FOLDER)
│   ├── QUICK_REFERENCE.md           ⭐ Start here
│   ├── REFACTORING_SUMMARY.md       What changed
│   ├── ARCHITECTURE.md              System diagrams
│   ├── PRODUCT_DATA_GUIDE.md        Complete guide
│   ├── PRODUCT_CODE_REFERENCE.md    Product codes
│   └── DOCUMENTATION_INDEX.md       This file
│
├── 📁 src/
│   ├── 📁 data/
│   │   ├── products.ts              ✅ Edit this to manage products
│   │   └── products.csv             Reference only
│   │
│   ├── 📁 app/
│   │   └── pages/
│   │       └── [slug]/
│   │           └── page.tsx         Dynamic route template
│   │
│   └── 📁 components/
│       └── ProductPage.tsx          Product page component
│
└── 📁 public/
    └── images/                      Product images
```

---

## 🎓 Learning Path

### Beginner (Just want to edit products)
1. ✅ Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
2. ✅ Open `src/data/products.ts`
3. ✅ Make changes
4. ✅ Save and test

### Intermediate (Want to understand the system)
1. ✅ Read [REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md)
2. ✅ Read [PRODUCT_CODE_REFERENCE.md](./PRODUCT_CODE_REFERENCE.md)
3. ✅ Review [ARCHITECTURE.md](./ARCHITECTURE.md)

### Advanced (Want to modify the system)
1. ✅ Read [PRODUCT_DATA_GUIDE.md](./PRODUCT_DATA_GUIDE.md)
2. ✅ Study `src/app/pages/[slug]/page.tsx`
3. ✅ Study `src/components/ProductPage.tsx`
4. ✅ Understand data flow in [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 🔍 Find Information Fast

### Need to know...

| Topic | Document | Section |
|-------|----------|---------|
| How to add a product | QUICK_REFERENCE.md | "Add a New Product" |
| How to edit a product | QUICK_REFERENCE.md | "Edit Product Information" |
| What product codes exist | PRODUCT_CODE_REFERENCE.md | "Current Product Catalog" |
| How product codes work | PRODUCT_CODE_REFERENCE.md | "Product Code System" |
| Required fields for products | QUICK_REFERENCE.md | "Required Fields" |
| Optional fields for products | QUICK_REFERENCE.md | "Optional Fields" |
| How routing works | ARCHITECTURE.md | "Data Flow Diagram" |
| How products are generated | ARCHITECTURE.md | "Build Time vs Runtime" |
| What changed in refactoring | REFACTORING_SUMMARY.md | Entire document |
| Benefits of new system | REFACTORING_SUMMARY.md | "Benefits" |
| Helper functions available | PRODUCT_DATA_GUIDE.md | "Helper Functions" |
| Troubleshooting | PRODUCT_DATA_GUIDE.md | "Troubleshooting" |

---

## 🛠️ Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# View product pages locally
http://localhost:3000/pages/alpha_bike_j
```

---

## 📞 Support Workflow

Having issues? Follow this workflow:

1. **Check QUICK_REFERENCE.md** → Common tasks
2. **Check "Common Mistakes"** → In QUICK_REFERENCE.md
3. **Check "Troubleshooting"** → In PRODUCT_DATA_GUIDE.md
4. **Review the code** → `src/data/products.ts`
5. **Check browser console** → For JavaScript errors
6. **Restart dev server** → `npm run dev`

---

## 🎯 Document Purpose Summary

| Document | What | Why |
|----------|------|-----|
| **QUICK_REFERENCE** | Fast answers | Daily use |
| **REFACTORING_SUMMARY** | What changed | Context |
| **ARCHITECTURE** | How it works | Understanding |
| **PRODUCT_DATA_GUIDE** | Everything | Deep dive |
| **PRODUCT_CODE_REFERENCE** | Code system | Reference |
| **DOCUMENTATION_INDEX** | Navigation | Finding docs |

---

## ✅ Cheat Sheet

### Most Common Tasks

```typescript
// 1. Add product
{
  productCode: 'SAA-XXX-NNN',  // Assign next number
  slug: 'product-name',
  title: 'Product Name',
  // ... other required fields
}

// 2. Edit product
// Find by code or slug, edit fields, save

// 3. Link products
relatedKits: [
  { productCode: 'SAA-ABX-002' },
  { productCode: 'SAA-TTH-001' }
]

// 4. Get product by code
const product = getProductByCode('SAA-ABX-002')

// 5. Get product by slug
const product = getProductBySlug('alpha_bike_j')
```

---

## 🚀 Next Steps

1. **Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** if you just want to manage products
2. **Read [REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md)** to understand what changed
3. **Read [ARCHITECTURE.md](./ARCHITECTURE.md)** to see how it all fits together
4. **Read [PRODUCT_DATA_GUIDE.md](./PRODUCT_DATA_GUIDE.md)** for complete documentation

---

## 📝 Notes

- **All product data** lives in ONE file: `src/data/products.ts`
- **All pages** generated from ONE template: `src/app/pages/[slug]/page.tsx`
- **All products** have unique codes: `SAA-XXX-NNN`
- **All URLs** still work: `/pages/alpha_bike_j`, `/pages/clockometer`, etc.
- **All features** preserved: SEO, videos, galleries, links, etc.

---

## 🎉 You're Ready!

Start with [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) and you'll be managing products in minutes!
