/**
 * Product Data Configuration
 * 
 * This file contains all product information used to generate product pages.
 * Each product entry includes metadata, content, media, and relationships.
 * 
 * To add a new product:
 * 1. Add a new entry to the products array
 * 2. Run `npm run dev` to see the new page at /pages/{slug}
 * 3. The page will be automatically generated with the template
 */

export interface ProductData {
  // Basic Info
  productCode: string             // Unique product identifier (e.g., "SAA-ABJ-001")
  slug: string                    // URL slug (e.g., "alpha_bike_j")
  title: string                   // Display title
  status?: 'active' | 'retiring'  // Product status
  
  // Product Flags/Badges
  isNewArrival?: boolean          // Badge: New Arrival
  isRetired?: boolean             // Badge: Retired/Discontinued
  isHot?: boolean                 // Badge: Hot/Trending item
  isSoldOut?: boolean             // Badge: Currently sold out
  isLowStock?: boolean            // Badge: Low stock warning
  isOnSale?: boolean              // Badge: On sale/discounted
  isSpecial?: boolean             // Badge: Special edition/featured
  
  // Homepage Display Categories
  categories: Array<
    'new-arrivals' | 
    'scholarships' | 
    'training-packages' | 
    'packaged-kits' | 
    'electronics-kits' | 
    'mechanical-structural-kits'
  >  // Array of categories for homepage grouping
  
  // SEO & Metadata
  metaTitle: string              // Browser tab title
  metaDescription: string        // Search engine description
  metaKeywords: string          // SEO keywords
  ogImage: string               // Open Graph image URL
  ogUrl: string                 // Canonical URL
  
  // Visual Content
  mainImage: string             // Hero/featured image path
  gallery: string[]             // Array of gallery image paths
  
  // Text Content
  description: string[]         // Array of description paragraphs
  homeSummary: string           // Short summary for homepage display
  
  // Video Content
  introVideoId: string                 // YouTube video ID for intro
  assemblyVideoId?: string            // Optional assembly guide video
  troubleshootingVideoId?: string     // Optional troubleshooting video
  deepDiveVideoId?: string            // Optional deep dive video
  
  // Resources
  guideDocUrl?: string          // Google Docs guide URL
  printingDocUrl?: string       // 3D printing guide URL
  softwareUrl?: string          // GitLab/GitHub repository URL
  
  // Skills & Learning
  skills: Array<{
    icon: string                // Path to skill icon image
    name: string                // Skill name (e.g., "Robotics")
  }>
  
  // Relationships
  relatedKits?: Array<{
    productCode: string         // Related product code (e.g., "SAA-TT-001")
  }>
}

// Product code format: SAA-XXX-NNN
// SAA = Sadat Akhavi Academy
// XXX = Product category code
//   ABX = Alpha Bike X series
//   ABJ = Alpha Bike Junior
//   TTH = Turbo Thumb
//   CLK = Clockometer
// NNN = Sequential number (001, 002, etc.)

export const products: ProductData[] = [
  {
    // Alpha Bike X+ - Advanced RC Bike
    productCode: 'SAA-ABX-002',
    slug: 'alpha_bike_x_plus',
    title: 'Alpha Bike X+',
    status: 'active',
    
    // Product Flags/Badges
    isSpecial: true,
    
    categories: ['new-arrivals', 'packaged-kits', 'electronics-kits', 'mechanical-structural-kits'],
    metaTitle: 'Alpha Bike X+ - Advanced RC Bike Kit | Sadat Akhavi Academy',
    metaDescription: 'Build the advanced Alpha Bike X+ - a feature-rich remote-controlled bike for learning electronics, robotics, ESP32 programming, and advanced mechatronics.',
    metaKeywords: 'Alpha Bike X Plus, advanced robotics kit, RC bike, electronics project, ESP32, STEM education, 3D printing, mechatronics',
    ogImage: 'https://sadat-akhavi-academy.com/images/ABXplus.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/alpha_bike_x_plus',
    mainImage: '/images/ABXplus.JPG',
    gallery: [
      '/images/ABXplus.JPG',
      '/images/ABXX_TT_Plus.JPG',
      '/images/alpha_bike_x.png'
    ],
    description: [
      "Alpha isn't just a bike; it's a symbol. It's cruising in style. When you build your own Alpha, you're not just following instructions; you're crafting confidence and forging your own path.",
      "The Alpha Bike X+ is the enhanced version with additional features and capabilities. Perfect for those who want to take their robotics skills to the next level.",
      "Build, customize, and master advanced electronics while creating your own high-performance remote-controlled bike."
    ],
    homeSummary: "Alpha isn't just a bike; it's a symbol. It's cruising in style. When you build your own Alpha, you're not just following instructions; you're crafting confidence and forging your own path.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: [
      { productCode: 'SAA-TTH-002' },
      { productCode: 'SAA-ABJ-001' }
    ]
  },
  {
    // Turbo Thumb+ - Universal RC Controller
    productCode: 'SAA-TTH-002',
    slug: 'turbo_thumb_plus',
    title: 'Turbo Thumb+',
    status: 'active',
    categories: ['new-arrivals', 'packaged-kits', 'electronics-kits', 'mechanical-structural-kits'],
    metaTitle: 'Turbo Thumb+ - Universal RC Controller Kit | Sadat Akhavi Academy',
    metaDescription: 'Build your own Turbo Thumb+ - a modular universal controller for all your RC devices. Learn electronics, ESP32 programming, and wireless communication.',
    metaKeywords: 'Turbo Thumb Plus, RC controller, DIY controller, ESP32, wireless control, robotics, electronics kit',
    ogImage: 'https://sadat-akhavi-academy.com/images/TTplus.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/turbo_thumb_plus',
    mainImage: '/images/TTplus.JPG',
    gallery: [
      '/images/TTplus.JPG',
      '/images/TT_Plus.JPG',
      '/images/ABXX_TT_Plus.JPG'
    ],
    description: [
      "Make one and control All! Turbo Thumb+ is awesome - it's one controller you build yourself that controls all your RC devices you're gonna build.",
      "It's modular and you can add new features to it. The Turbo Thumb+ represents the next generation of our universal controller with enhanced capabilities.",
      "Perfect for controlling your Alpha Bikes and other RC projects!"
    ],
    homeSummary: "Make one and control All ! Turbo thumb+ is awesome, it is one controller you bulid yourself and controls all your RC devices you gonna build. It is modular and you can add new features to it.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: [
      { productCode: 'SAA-ABX-002' },
      { productCode: 'SAA-TTH-001' }
    ]
  },
  {
    // Alpha Bike J - Beginner-Friendly RC Bike
    productCode: 'SAA-ABJ-001',
    slug: 'alpha_bike_j',
    title: 'Alpha Bike J',
    status: 'active',
    categories: ['packaged-kits', 'electronics-kits', 'mechanical-structural-kits'],
    metaTitle: 'Alpha Bike J - DIY RC Bike Robotics Kit | Sadat Akhavi Academy',
    metaDescription: 'Build your own Alpha Bike J - a beginner-friendly remote-controlled bike perfect for learning electronics, robotics, 3D printing, and ESP32 programming. Features partially pre-soldered PCB for easy assembly.',
    metaKeywords: 'Alpha Bike J, DIY robotics kit, RC bike, electronics kit for beginners, ESP32 robotics project, STEM learning kit, 3D printing project, Arduino bike, robotics education, soldering practice, mechatronics kit',
    ogImage: 'https://sadat-akhavi-academy.com/images/alpha_bike_j_mod4.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/alpha_bike_j',
    mainImage: '/images/alpha_bike_j_mod4.jpg',
    gallery: [
      '/images/alphaBikeJ_gallery/alpha_bike_j_mod4_gitlab2.jpg',
      '/images/alphaBikeJ_gallery/IMG_8263.JPG',
      '/images/alphaBikeJ_gallery/IMG_8262.JPG',
      '/images/alphaBikeJ_gallery/IMG_8273.JPG',
      '/images/alphaBikeJ_gallery/IMG_8277.JPG',
      '/images/alphaBikeJ_gallery/Screenshot01.png',
      '/images/alphaBikeJ_gallery/Screenshot02.png',
      '/images/alphaBikeJ_gallery/Screenshot03.png',
      '/images/alphaBikeJ_gallery/IMG_8350.JPG',
      '/images/alphaBikeJ_gallery/IMG_8222.JPG',
      '/images/alphaBikeJ_gallery/IMG_8224.JPG',
      '/images/alphaBikeJ_gallery/IMG_8255.JPG'
    ],
    description: [
      "Alpha Bike J is highly engaging and beginner-friendly. Like its older brother, Alpha Bike X, it's great fun! It is even more nimble, sharper, and loves to showcase its speed with dynamic moves!",
      "Its partially pre-soldered PCB board removes complex component soldering, making it great for beginners while still engaging and teaching soldering with simple components like resistors, wires, and power switch connectors.",
      "If you're looking to dive into 3D printing, electronics, and more, Alpha Bike Junior is your perfect ride!"
    ],
    homeSummary: "Alpha Bike Junior is beginner-friendly. It is nimble, sharp, and loves to show off its speed with dynamic moves! J features a half-soldered PCB, making it perfect for youngsters eager to learn.",
    introVideoId: 'qDEQXZS1ljg',
    assemblyVideoId: 'fkp69hrBfW0',
    guideDocUrl: 'https://docs.google.com/document/d/18UMJpRn66otXkDhnvMU0jeuiV8Wx0RvetPbYFIAwI3Y/edit',
    printingDocUrl: 'https://docs.google.com/document/d/1SXziDB2uRv0wXhz8YDTpPZ3y6kvRAO_qyDteDUzxlhc/edit',
    softwareUrl: 'https://gitlab.com/sadat-akhavi-academy/saa_alphabike_j_esp32_rx',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: [
      { productCode: 'SAA-TTH-001' },
      { productCode: 'SAA-ABX-001' }
    ]
  },
  {
    // Alpha Bike X - Standard RC Bike (Retiring)
    productCode: 'SAA-ABX-001',
    slug: 'alpha_bike_x',
    title: 'Alpha Bike X',
    status: 'retiring',
    
    // Product Flags/Badges
    isRetired: true,
    
    categories: ['packaged-kits', 'electronics-kits', 'mechanical-structural-kits'],
    metaTitle: 'Alpha Bike X - RC Bike Kit | Sadat Akhavi Academy',
    metaDescription: 'Build your own Alpha Bike X - a remote-controlled bike for learning electronics, robotics, and ESP32 programming. Now retiring - check out the new Alpha Bike X+!',
    metaKeywords: 'Alpha Bike X, robotics kit, RC bike, electronics project, ESP32, STEM education',
    ogImage: 'https://sadat-akhavi-academy.com/images/alpha_bike_x.png',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/alpha_bike_x',
    mainImage: '/images/alpha_bike_x.png',
    gallery: [
      '/images/alpha_bike_x.png',
      '/images/alpha-dog_turbo_thumb-IMG_7717.png'
    ],
    description: [
      "Retiring Soon – Discover the New Alpha Bike X+ !",
      "Alpha isn't just a bike; it's a symbol. It's cruising in style. When you build your own Alpha, you're not just following instructions; you're crafting confidence and forging your own path.",
      "While this version is being retired, the new Alpha Bike X+ offers even more features and capabilities!"
    ],
    homeSummary: "Alpha isn't just a bike; it's a symbol. It's cruising in style. When you build your own Alpha, you're not just following instructions; you're crafting confidence and forging your own path.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: [
      { productCode: 'SAA-ABX-002' },
      { productCode: 'SAA-TTH-001' }
    ]
  },
  {
    // Turbo Thumb - Standard Controller (Retiring)
    productCode: 'SAA-TTH-001',
    slug: 'turbo-thumb',
    title: 'Turbo Thumb',
    status: 'retiring',
    
    // Product Flags/Badges
    isRetired: true,
    
    categories: ['packaged-kits', 'electronics-kits', 'mechanical-structural-kits'],
    metaTitle: 'Turbo Thumb - RC Controller Kit | Sadat Akhavi Academy',
    metaDescription: 'Build the Turbo Thumb - a modular universal controller for RC devices. Now retiring - check out the new Turbo Thumb+!',
    metaKeywords: 'Turbo Thumb, RC controller, DIY controller, ESP32, wireless control, robotics',
    ogImage: 'https://sadat-akhavi-academy.com/images/turbo-thumb-IMG_7717.png',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/turbo-thumb',
    mainImage: '/images/turbo-thumb-IMG_7717.png',
    gallery: [
      '/images/turbo-thumb-IMG_7717.png',
      '/images/alpha-dog_turbo_thumb-IMG_7717.png'
    ],
    description: [
      "Retiring Soon – Discover the New Turbo Thumb+ !",
      "Make one and control All! Turbo thumb is awesome, it is one controller you build yourself and controls all your RC devices you gonna build. It is modular and you can add new features to it.",
      "While this version is being retired, the new Turbo Thumb+ offers enhanced features and capabilities!"
    ],
    homeSummary: "Make one and control All ! Turbo thumb is awesome, it is one controller you build yourself and controls all your RC devices you gonna build. It is modular and you can add new features to it.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: [
      { productCode: 'SAA-TTH-002' },
      { productCode: 'SAA-ABJ-001' }
    ]
  },
  {
    // Clockometer - Revolutionary Time Display
    productCode: 'SAA-CLK-001',
    slug: 'clockometer',
    title: 'Clockometer',
    status: 'active',
    categories: ['packaged-kits', 'electronics-kits', 'mechanical-structural-kits'],
    metaTitle: 'Clockometer - Revolutionary Time Experience | Sadat Akhavi Academy',
    metaDescription: 'Build the Clockometer - a revolutionary timepiece that brings time to life! Perfect for young car lovers and electronics enthusiasts.',
    metaKeywords: 'Clockometer, DIY clock, electronics project, ESP32 clock, STEM education, unique timepiece',
    ogImage: 'https://sadat-akhavi-academy.com/images/clockometer_IMG_7795.png',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/clockometer',
    mainImage: '/images/clockometer_IMG_7795.png',
    gallery: [
      '/images/clockometer_IMG_7795.png'
    ],
    description: [
      "Experience time like never before - the ultimate timepiece for young car lovers!",
      "Clockometer doesn't just tell time; it brings time to life in a whole new, exciting way.",
      "Combine electronics, programming, and creativity to build your own unique clock display."
    ],
    homeSummary: "Experience time like never before - the ultimate timepiece for young car lovers! Clockometer doesn't just tell time; it brings time to life in a whole new, exciting way.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: [
      { productCode: 'SAA-ABJ-001' },
      { productCode: 'SAA-TTH-001' }
    ]
  },
  {
    // Mechanical Kit 1
    productCode: 'SAA-MCH-001',
    slug: 'mechanical_kit_1',
    title: 'Mechanical Kit 1',
    status: 'active',
    
    // Product Flags/Badges
    isNewArrival: true,
    isHot: true,
    
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 1 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 1 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5499.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_1',
    mainImage: '/images/newArrival/IMG_5499.jpg',
    gallery: ['/images/newArrival/IMG_5499.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 2
    productCode: 'SAA-MCH-002',
    slug: 'mechanical_kit_2',
    title: 'Mechanical Kit 2',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 2 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 2 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5506_mod01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_2',
    mainImage: '/images/newArrival/IMG_5506_mod01.jpg',
    gallery: ['/images/newArrival/IMG_5506_mod01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 3
    productCode: 'SAA-MCH-003',
    slug: 'mechanical_kit_3',
    title: 'Mechanical Kit 3',
    status: 'active',
    
    // Product Flags/Badges
    isOnSale: true,
    isLowStock: true,
    
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 3 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 3 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5513_mod_01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_3',
    mainImage: '/images/newArrival/IMG_5513_mod_01.jpg',
    gallery: ['/images/newArrival/IMG_5513_mod_01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 4
    productCode: 'SAA-MCH-004',
    slug: 'mechanical_kit_4',
    title: 'Mechanical Kit 4',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 4 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 4 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5523_mod_01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_4',
    mainImage: '/images/newArrival/IMG_5523_mod_01.jpg',
    gallery: ['/images/newArrival/IMG_5523_mod_01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 5
    productCode: 'SAA-MCH-005',
    slug: 'mechanical_kit_5',
    title: 'Mechanical Kit 5',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 5 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 5 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5525_mod01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_5',
    mainImage: '/images/newArrival/IMG_5525_mod01.jpg',
    gallery: ['/images/newArrival/IMG_5525_mod01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 6
    productCode: 'SAA-MCH-006',
    slug: 'mechanical_kit_6',
    title: 'Mechanical Kit 6',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 6 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 6 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5542_mod01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_6',
    mainImage: '/images/newArrival/IMG_5542_mod01.jpg',
    gallery: ['/images/newArrival/IMG_5542_mod01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 7
    productCode: 'SAA-MCH-007',
    slug: 'mechanical_kit_7',
    title: 'Mechanical Kit 7',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 7 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 7 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5553_mod01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_7',
    mainImage: '/images/newArrival/IMG_5553_mod01.jpg',
    gallery: ['/images/newArrival/IMG_5553_mod01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 8
    productCode: 'SAA-MCH-008',
    slug: 'mechanical_kit_8',
    title: 'Mechanical Kit 8',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 8 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 8 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5559_mod01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_8',
    mainImage: '/images/newArrival/IMG_5559_mod01.jpg',
    gallery: ['/images/newArrival/IMG_5559_mod01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 9
    productCode: 'SAA-MCH-009',
    slug: 'mechanical_kit_9',
    title: 'Mechanical Kit 9',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 9 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 9 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5563_mod01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_9',
    mainImage: '/images/newArrival/IMG_5563_mod01.jpg',
    gallery: ['/images/newArrival/IMG_5563_mod01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 10
    productCode: 'SAA-MCH-010',
    slug: 'mechanical_kit_10',
    title: 'Mechanical Kit 10',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 10 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 10 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5565_mod01.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_10',
    mainImage: '/images/newArrival/IMG_5565_mod01.jpg',
    gallery: ['/images/newArrival/IMG_5565_mod01.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 11
    productCode: 'SAA-MCH-011',
    slug: 'mechanical_kit_11',
    title: 'Mechanical Kit 11',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 11 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 11 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5573_mod4.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_11',
    mainImage: '/images/newArrival/IMG_5573_mod4.jpg',
    gallery: ['/images/newArrival/IMG_5573_mod4.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Mechanical Kit 12
    productCode: 'SAA-MCH-012',
    slug: 'mechanical_kit_12',
    title: 'Mechanical Kit 12',
    status: 'active',
    categories: ['new-arrivals', 'mechanical-structural-kits'],
    metaTitle: 'Mechanical Kit 12 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 12 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/IMG_5577_mode3.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/pages/mechanical_kit_12',
    mainImage: '/images/newArrival/IMG_5577_mode3.jpg',
    gallery: ['/images/newArrival/IMG_5577_mode3.jpg'],
    description: [
      "High-quality 3D printed mechanical components for your next project.",
      "Learn mechanical design, assembly, and structural engineering principles.",
      "Perfect for building custom mechanisms and structural prototypes."
    ],
    homeSummary: "High-quality 3D printed mechanical components for your next project. Perfect for learning mechanical design and structural engineering.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  }
]

// Helper function to get product by slug
export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find(product => product.slug === slug)
}

// Helper function to get product by product code
export function getProductByCode(productCode: string): ProductData | undefined {
  return products.find(product => product.productCode === productCode)
}

// Helper function to get all product slugs (useful for static generation)
export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug)
}

// Helper function to get active products only
export function getActiveProducts(): ProductData[] {
  return products.filter(product => product.status !== 'retiring')
}

// Helper function to get retiring products
export function getRetiringProducts(): ProductData[] {
  return products.filter(product => product.status === 'retiring')
}

// Helper function to get products for homepage display in specific order
// Order: Alpha Bike X+, Turbo Thumb+, Clockometer, Turbo Thumb, Alpha Bike X, Alpha Bike J
export function getProductsForHomepage(): ProductData[] {
  const order = [
    'SAA-ABX-002', // Alpha Bike X+
    'SAA-TTH-002', // Turbo Thumb+
    'SAA-CLK-001', // Clockometer
    'SAA-TTH-001', // Turbo Thumb
    'SAA-ABX-001', // Alpha Bike X
    'SAA-ABJ-001'  // Alpha Bike J
  ]
  
  return order
    .map(code => getProductByCode(code))
    .filter((product): product is ProductData => product !== undefined)
}

// Helper function to get retiring status message
export function getRetiringMessage(productCode: string): string | null {
  const product = getProductByCode(productCode)
  if (!product || product.status !== 'retiring') return null
  
  // Map retiring products to their replacement
  const replacements: Record<string, string> = {
    'SAA-ABX-001': 'Alpha Bike X+',
    'SAA-TTH-001': 'Turbo Thumb+'
  }
  
  const replacement = replacements[productCode]
  return replacement ? `Retiring Soon – Discover the New ${replacement} !` : null
}

// Category type for type-safe category filtering
export type ProductCategory = 
  | 'new-arrivals' 
  | 'scholarships' 
  | 'training-packages' 
  | 'packaged-kits' 
  | 'electronics-kits' 
  | 'mechanical-structural-kits'

// Helper function to get products by category
export function getProductsByCategory(category: ProductCategory): ProductData[] {
  return products.filter(product => product.categories.includes(category))
}

// Helper function to get all products grouped by categories for homepage
export function getProductsGroupedByCategories(): Record<ProductCategory, ProductData[]> {
  return {
    'new-arrivals': getProductsByCategory('new-arrivals'),
    'scholarships': getProductsByCategory('scholarships'),
    'training-packages': getProductsByCategory('training-packages'),
    'packaged-kits': getProductsByCategory('packaged-kits'),
    'electronics-kits': getProductsByCategory('electronics-kits'),
    'mechanical-structural-kits': getProductsByCategory('mechanical-structural-kits')
  }
}

// Helper function to get category display names
export function getCategoryDisplayName(category: ProductCategory): string {
  const displayNames: Record<ProductCategory, string> = {
    'new-arrivals': 'New Arrivals',
    'scholarships': 'Scholarships',
    'training-packages': 'Training Packages',
    'packaged-kits': 'Complete Kits',
    'electronics-kits': 'Electronics Kits',
    'mechanical-structural-kits': 'Mechanical & Structural Kits'
  }
  return displayNames[category]
}

