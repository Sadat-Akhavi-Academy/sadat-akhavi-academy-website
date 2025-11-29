import { ProductData } from '@/data/products'

interface BadgeConfig {
  text: string
  icon: string
  bgColor: string
  textColor: string
}

const badgeConfigs: Record<string, BadgeConfig> = {
  isNewArrival: {
    text: 'NEW',
    icon: 'fa-star',
    bgColor: '#4CAF50', // Green
    textColor: '#ffffff'
  },
  isRetired: {
    text: 'RETIRED',
    icon: 'fa-archive',
    bgColor: '#9E9E9E', // Gray
    textColor: '#ffffff'
  },
  isHot: {
    text: 'HOT',
    icon: 'fa-fire',
    bgColor: '#FF5722', // Deep Orange
    textColor: '#ffffff'
  },
  isSoldOut: {
    text: 'SOLD OUT',
    icon: 'fa-times-circle',
    bgColor: '#F44336', // Red
    textColor: '#ffffff'
  },
  isLowStock: {
    text: 'LOW STOCK',
    icon: 'fa-exclamation-triangle',
    bgColor: '#FF9800', // Orange
    textColor: '#ffffff'
  },
  isOnSale: {
    text: 'ON SALE',
    icon: 'fa-tag',
    bgColor: '#E91E63', // Pink
    textColor: '#ffffff'
  },
  isSpecial: {
    text: 'SPECIAL',
    icon: 'fa-trophy',
    bgColor: '#9C27B0', // Purple
    textColor: '#ffffff'
  }
}

interface ProductBadgeProps {
  product: ProductData
}

export default function ProductBadge({ product }: ProductBadgeProps) {
  const badges: BadgeConfig[] = []

  // Check each flag and add corresponding badge
  Object.entries(badgeConfigs).forEach(([key, config]) => {
    if (product[key as keyof ProductData] === true) {
      badges.push(config)
    }
  })

  if (badges.length === 0) {
    return null
  }

  return (
    <div className="product-badges">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="product-badge"
          style={{
            backgroundColor: badge.bgColor,
            color: badge.textColor
          }}
        >
          <i className={`fa ${badge.icon}`} aria-hidden="true"></i>
          <span className="badge-text">{badge.text}</span>
        </div>
      ))}
    </div>
  )
}
