# Product Code Reference

## Product Code System

All products in the Sadat Akhavi Academy catalog use a standardized product code system for unique identification and cross-referencing.

### Format: `SAA-XXX-NNN`

- **SAA** = Sadat Akhavi Academy (company identifier)
- **XXX** = Product category code (3 letters)
- **NNN** = Sequential number (3 digits, zero-padded)

## Product Categories

| Category Code | Description | Products |
|---------------|-------------|----------|
| `ABX` | Alpha Bike X Series | Advanced RC bikes |
| `ABJ` | Alpha Bike Junior | Beginner-friendly bikes |
| `TTH` | Turbo Thumb | RC controllers |
| `CLK` | Clockometer | Time display devices |

## Current Product Catalog

### Active Products

| Product Code | Product Name | Status | URL Slug |
|--------------|--------------|--------|----------|
| `SAA-ABX-002` | Alpha Bike X+ | Active | `alpha_bike_x_plus` |
| `SAA-TTH-002` | Turbo Thumb+ | Active | `turbo_thumb_plus` |
| `SAA-ABJ-001` | Alpha Bike J | Active | `alpha_bike_j` |
| `SAA-CLK-001` | Clockometer | Active | `clockometer` |

### Retiring Products

| Product Code | Product Name | Status | URL Slug | Replacement |
|--------------|--------------|--------|----------|-------------|
| `SAA-ABX-001` | Alpha Bike X | Retiring | `alpha_bike_x` | SAA-ABX-002 |
| `SAA-TTH-001` | Turbo Thumb | Retiring | `turbo-thumb` | SAA-TTH-002 |

## Product Relationships

Product codes are used to define relationships between products (e.g., "customers who bought this also bought...").

### SAA-ABX-002 (Alpha Bike X+)
Related Products:
- `SAA-TTH-002` (Turbo Thumb+) - Compatible controller
- `SAA-ABJ-001` (Alpha Bike J) - Beginner alternative

### SAA-TTH-002 (Turbo Thumb+)
Related Products:
- `SAA-ABX-002` (Alpha Bike X+) - Compatible bike
- `SAA-TTH-001` (Turbo Thumb) - Previous version

### SAA-ABJ-001 (Alpha Bike J)
Related Products:
- `SAA-TTH-001` (Turbo Thumb) - Compatible controller
- `SAA-ABX-001` (Alpha Bike X) - Advanced version

### SAA-ABX-001 (Alpha Bike X)
Related Products:
- `SAA-ABX-002` (Alpha Bike X+) - Upgraded version
- `SAA-TTH-001` (Turbo Thumb) - Compatible controller

### SAA-TTH-001 (Turbo Thumb)
Related Products:
- `SAA-TTH-002` (Turbo Thumb+) - Upgraded version
- `SAA-ABJ-001` (Alpha Bike J) - Compatible bike

### SAA-CLK-001 (Clockometer)
Related Products:
- `SAA-ABJ-001` (Alpha Bike J) - Similar skill level
- `SAA-TTH-001` (Turbo Thumb) - Similar skill level

## Usage in Code

### Get Product by Code
```typescript
import { getProductByCode } from '@/data/products'

const product = getProductByCode('SAA-ABX-002')
console.log(product.title) // "Alpha Bike X+"
```

### Resolve Related Products
```typescript
import { getProductByCode } from '@/data/products'

const product = getProductByCode('SAA-ABX-002')
const relatedProducts = product.relatedKits?.map(kit => 
  getProductByCode(kit.productCode)
)
// Returns: [Turbo Thumb+, Alpha Bike J]
```

## Adding New Products

When adding a new product, assign the next sequential number in the appropriate category:

1. **Determine Category**:
   - New Alpha Bike X variant → `ABX`
   - New Alpha Bike Junior variant → `ABJ`
   - New Turbo Thumb variant → `TTH`
   - New Clockometer variant → `CLK`
   - New category → Create new 3-letter code

2. **Assign Number**:
   - Check existing products in category
   - Use next sequential number (001, 002, 003, etc.)

3. **Example**:
   - Next Alpha Bike X product: `SAA-ABX-003`
   - Next Turbo Thumb product: `SAA-TTH-003`
   - First new category product: `SAA-NEW-001`

## Benefits

### 1. **Unique Identification**
- Every product has a permanent, unique identifier
- Product codes never change (even if name or URL changes)

### 2. **Cross-Referencing**
- Products reference each other by code, not name
- Changing product name doesn't break relationships

### 3. **Inventory Management**
- Can be used for SKU in e-commerce
- Compatible with inventory systems

### 4. **Version Tracking**
- Sequential numbers show product evolution
- Easy to identify latest version (higher number)

### 5. **Data Integrity**
- Type-safe references in TypeScript
- Compile-time checking of product relationships

## Future Extensions

The product code system can be extended to support:

- **Pricing**: Link product codes to pricing database
- **Inventory**: Track stock levels by product code
- **Analytics**: Track sales/views by product code
- **Bundles**: Create product bundles using codes (e.g., `SAA-BUN-001` contains `SAA-ABX-002` + `SAA-TTH-002`)
- **Versions**: Add version suffix (e.g., `SAA-ABX-002-v2`)
- **Variants**: Add variant code (e.g., `SAA-ABX-002-BLK` for black color)

## Best Practices

1. **Never Reuse Codes**: Once assigned, a product code is permanent
2. **Sequential Numbering**: Always use next sequential number in category
3. **Document Changes**: Update this reference when adding products
4. **Validate References**: Ensure all `relatedKits` use valid product codes
5. **Use Helper Functions**: Always use `getProductByCode()` to resolve codes

## Questions?

- See `/src/data/products.ts` for product data structure
- See `PRODUCT_DATA_GUIDE.md` for full product system documentation
- Check CSV file: `/src/data/products.csv` for spreadsheet format
