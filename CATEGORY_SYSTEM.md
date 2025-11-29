# Product Category System

## Overview
Products can now be tagged with multiple categories for flexible homepage grouping and display.

## Available Categories

The homepage will display products in these groups (in order):

1. **New Arrivals** (`new-arrivals`)
   - Latest product releases
   - Featured items

2. **Scholarships** (`scholarships`)
   - Scholarship programs
   - Educational grants

3. **Training Packages** (`training-packages`)
   - Workshop bundles
   - Course packages
   - Learning programs

4. **Complete Kits** (`packaged-kits`)
   - Full ready-to-build kits
   - All components included
   - Complete project packages

5. **Electronics Kits** (`electronics-kits`)
   - PCB boards
   - Electronic components
   - Circuit assemblies

6. **Mechanical & Structural Kits** (`mechanical-structural-kits`)
   - 3D printed parts
   - Mechanical components
   - Structural elements

## Current Product Categories

### Alpha Bike X+ (SAA-ABX-002)
- ✅ New Arrivals
- ✅ Complete Kits
- ✅ Electronics Kits
- ✅ Mechanical & Structural Kits

### Turbo Thumb+ (SAA-TTH-002)
- ✅ New Arrivals
- ✅ Complete Kits
- ✅ Electronics Kits
- ✅ Mechanical & Structural Kits

### Alpha Bike J (SAA-ABJ-001)
- ✅ Complete Kits
- ✅ Electronics Kits
- ✅ Mechanical & Structural Kits

### Clockometer (SAA-CLK-001)
- ✅ Complete Kits
- ✅ Electronics Kits
- ✅ Mechanical & Structural Kits

### Alpha Bike X (SAA-ABX-001) - Retiring
- ✅ Complete Kits
- ✅ Electronics Kits
- ✅ Mechanical & Structural Kits

### Turbo Thumb (SAA-TTH-001) - Retiring
- ✅ Complete Kits
- ✅ Electronics Kits
- ✅ Mechanical & Structural Kits

## How to Use

### Adding Categories to a Product

In `src/data/products.ts`, add the `categories` array to any product:

```typescript
{
  productCode: 'SAA-XXX-001',
  slug: 'product-slug',
  title: 'Product Name',
  categories: ['new-arrivals', 'packaged-kits', 'electronics-kits'],
  // ... rest of product data
}
```

### Getting Products by Category

```typescript
import { getProductsByCategory } from '@/data/products'

// Get all products in a specific category
const newArrivals = getProductsByCategory('new-arrivals')
const completeKits = getProductsByCategory('packaged-kits')
```

### Getting All Products Grouped by Categories

```typescript
import { getProductsGroupedByCategories } from '@/data/products'

const grouped = getProductsGroupedByCategories()
// Returns:
// {
//   'new-arrivals': [product1, product2],
//   'scholarships': [],
//   'training-packages': [],
//   'packaged-kits': [product1, product2, product3],
//   'electronics-kits': [product1, product2, product3],
//   'mechanical-structural-kits': [product1, product2, product3]
// }
```

### Getting Category Display Names

```typescript
import { getCategoryDisplayName } from '@/data/products'

const displayName = getCategoryDisplayName('new-arrivals')
// Returns: "New Arrivals"

const displayName2 = getCategoryDisplayName('mechanical-structural-kits')
// Returns: "Mechanical & Structural Kits"
```

## Example: Homepage Display Loop

```typescript
import { 
  getProductsGroupedByCategories, 
  getCategoryDisplayName,
  type ProductCategory 
} from '@/data/products'

const categoryOrder: ProductCategory[] = [
  'new-arrivals',
  'scholarships',
  'training-packages',
  'packaged-kits',
  'electronics-kits',
  'mechanical-structural-kits'
]

const groupedProducts = getProductsGroupedByCategories()

categoryOrder.forEach(category => {
  const products = groupedProducts[category]
  
  if (products.length > 0) {
    console.log(`\n${getCategoryDisplayName(category)}:`)
    
    products.forEach(product => {
      console.log(`- ${product.title}: ${product.homeSummary}`)
    })
  }
})
```

## Adding New Categories

To add a new category:

1. Update the `ProductData` interface in `src/data/products.ts`:
   ```typescript
   categories: Array<
     'new-arrivals' | 
     'scholarships' | 
     'training-packages' | 
     'packaged-kits' | 
     'electronics-kits' | 
     'mechanical-structural-kits' |
     'your-new-category'  // Add here
   >
   ```

2. Update the `ProductCategory` type:
   ```typescript
   export type ProductCategory = 
     | 'new-arrivals'
     | 'scholarships'
     // ... existing categories
     | 'your-new-category'  // Add here
   ```

3. Add display name in `getCategoryDisplayName()`:
   ```typescript
   const displayNames: Record<ProductCategory, string> = {
     // ... existing categories
     'your-new-category': 'Your New Category'
   }
   ```

4. Tag products with the new category as needed.

## Notes

- Products can belong to **multiple categories**
- Categories are displayed in the order defined in the homepage code
- Empty categories can be hidden or shown as "Coming Soon"
- Use the `homeSummary` field for short descriptions on homepage
- Use `status: 'retiring'` with `getRetiringMessage()` for products being phased out
