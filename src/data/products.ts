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
  isAvailableSoon?: boolean       // Badge: Available Soon / Coming Soon
  isClass?: boolean               // Badge: Workshop/Class offering
  isScholarship?: boolean         // Badge: Scholarship available
  useDualImageCard?: boolean      // Display: Use dual split images on homepage card
  
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
  secondaryImage?: string       // Optional secondary image for dual-image cards (packaged-kits)
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
    // isSpecial: true,
    isSoldOut: true,
    useDualImageCard: true,
    
    categories: ['packaged-kits'],
    metaTitle: 'Alpha Bike X+ - Advanced RC Bike Kit | Sadat Akhavi Academy',
    metaDescription: 'Build the advanced Alpha Bike X+ - a feature-rich remote-controlled bike for learning electronics, robotics, ESP32 programming, and advanced mechatronics.',
    metaKeywords: 'Alpha Bike X Plus, advanced robotics kit, RC bike, electronics project, ESP32, STEM education, 3D printing, mechatronics',
    ogImage: 'https://sadat-akhavi-academy.com/images/ABXplus.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/alpha_bike_x_plus',
    mainImage: '/images/ABXplus.JPG',
    secondaryImage: '/images/ABXX_TT_Plus.JPG',
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
    assemblyVideoId: '0j1l4ejqRxE',
    guideDocUrl: 'https://docs.google.com/document/d/1JyV_0Fxh9MR4hAZF93VPe1uvYpEkMN9ui7yRbf1vIJ8/edit?tab=t.0',
    softwareUrl: 'https://gitlab.com/sadat-akhavi-academy/saa_alphabike_x_plus_esp32_rx',
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
    isSoldOut: true,
    categories: ['packaged-kits'],
    metaTitle: 'Turbo Thumb+ - Universal RC Controller Kit | Sadat Akhavi Academy',
    metaDescription: 'Build your own Turbo Thumb+ - a modular universal controller for all your RC devices. Learn electronics, ESP32 programming, and wireless communication.',
    metaKeywords: 'Turbo Thumb Plus, RC controller, DIY controller, ESP32, wireless control, robotics, electronics kit',
    ogImage: 'https://sadat-akhavi-academy.com/images/TTplus.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/turbo_thumb_plus',
    mainImage: '/images/TTplus.JPG',
    secondaryImage: '/images/TT_Plus.JPG',
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
    assemblyVideoId: 'lwVkDp6MTIU',
    guideDocUrl: 'https://docs.google.com/document/d/1btw5Shx4ZK5CjapvPtSIvtsKdIy03YK8-V-bBjGZ0p4/edit?tab=t.0',
    softwareUrl: 'https://gitlab.com/sadat-akhavi-academy/turbothumb_remotecontrol_atmega2560',
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
    isRetired: true,
    categories: ['packaged-kits'],
    metaTitle: 'Alpha Bike J - DIY RC Bike Robotics Kit | Sadat Akhavi Academy',
    metaDescription: 'Build your own Alpha Bike J - a beginner-friendly remote-controlled bike perfect for learning electronics, robotics, 3D printing, and ESP32 programming. Features partially pre-soldered PCB for easy assembly.',
    metaKeywords: 'Alpha Bike J, DIY robotics kit, RC bike, electronics kit for beginners, ESP32 robotics project, STEM learning kit, 3D printing project, Arduino bike, robotics education, soldering practice, mechatronics kit',
    ogImage: 'https://sadat-akhavi-academy.com/images/alpha_bike_j_mod4.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/alpha_bike_j',
    mainImage: '/images/alpha_bike_j_mod4.jpg',
    secondaryImage: '/images/alphaBikeJ_gallery/alpha_bike_j_mod4_gitlab2.jpg',
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
    
    categories: ['packaged-kits'],
    metaTitle: 'Alpha Bike X - RC Bike Kit | Sadat Akhavi Academy',
    metaDescription: 'Build your own Alpha Bike X - a remote-controlled bike for learning electronics, robotics, and ESP32 programming. Now retiring - check out the new Alpha Bike X+!',
    metaKeywords: 'Alpha Bike X, robotics kit, RC bike, electronics project, ESP32, STEM education',
    ogImage: 'https://sadat-akhavi-academy.com/images/alpha_bike_x.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/alpha_bike_x',
    mainImage: '/images/alpha_bike_x.png',
    secondaryImage: '/images/alpha-dog_turbo_thumb-IMG_7717.png',
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
    assemblyVideoId: 'J_5BaJhAbqY',
    guideDocUrl: 'https://docs.google.com/document/d/16NZ2EEXBjOW6E4FJXoIUf6XLvX7GuBBrJmhEr-uUT7A/edit',
    printingDocUrl: 'https://docs.google.com/document/d/1QJ9vB07swtCGXkvnUCHN9jXOgNbnc9WKBiyjXymlr_Y/edit',
    softwareUrl: 'https://gitlab.com/sadat-akhavi-academy/saa_alphabike_x_esp32_rx',
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
    
    categories: ['packaged-kits'],
    metaTitle: 'Turbo Thumb - RC Controller Kit | Sadat Akhavi Academy',
    metaDescription: 'Build the Turbo Thumb - a modular universal controller for RC devices. Now retiring - check out the new Turbo Thumb+!',
    metaKeywords: 'Turbo Thumb, RC controller, DIY controller, ESP32, wireless control, robotics',
    ogImage: 'https://sadat-akhavi-academy.com/images/turbo-thumb-IMG_7717.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/turbo-thumb',
    mainImage: '/images/turbo-thumb-IMG_7717.png',
    secondaryImage: '/images/alpha-dog_turbo_thumb-IMG_7717.png',
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
    assemblyVideoId: 'JZ72lr-Kz2I',
    guideDocUrl: 'https://docs.google.com/document/d/1TKPMaYuBZZ5mrQcOkuHnDzfKZAyyxKbs7ovjMWcPu5s',
    printingDocUrl: 'https://docs.google.com/document/d/1fTVMXSsgGRv2gYBbKu6A8VOsChd__GV3ZnZccXh9DWU/edit',
    softwareUrl: 'https://gitlab.com/sadat-akhavi-academy/turbothumb_remotecontrol_atmega2560',
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
    isRetired: true,
    categories: ['packaged-kits'],
    metaTitle: 'Clockometer - Revolutionary Time Experience | Sadat Akhavi Academy',
    metaDescription: 'Build the Clockometer - a revolutionary timepiece that brings time to life! Perfect for young car lovers and electronics enthusiasts.',
    metaKeywords: 'Clockometer, DIY clock, electronics project, ESP32 clock, STEM education, unique timepiece',
    ogImage: 'https://sadat-akhavi-academy.com/images/clockometer_IMG_7795.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/clockometer',
    mainImage: '/images/clockometer_IMG_7795.png',
    secondaryImage: '/images/clockometerG3_gallery/IMG_7807.JPG',
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
    assemblyVideoId: 'JuYHC7jJr6A',
    guideDocUrl: 'https://docs.google.com/document/d/1uLfdIZfrJFPH76SfLtabEoz2iReD_ZSMJrcc8BYSafU/edit?usp=sharing',
    printingDocUrl: 'https://docs.google.com/document/d/1s4qnf9yh2BnVM8dpJryEnnckrdpt9-R3QN1f_SkMAb8/edit?usp=drive_link',
    softwareUrl: 'https://gitlab.com/sadat-akhavi-academy/clockometer_g3_esp32',
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
    title: 'Deep Space Command Center',
    status: 'active',
    
    // Product Flags/Badges
    isNewArrival: true,
    isHot: true,
    // isAvailableSoon: true,
    useDualImageCard: true,
    
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 1 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 1 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5499_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_1',
    mainImage: '/images/newArrival/02/IMG_5499_mod11.jpg',
    secondaryImage: '/images/newArrival/02/IMG_5506_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5499_mod11.jpg'],
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
    title: 'Star Ocean Lighthouse',
    status: 'active',
    
    // Product Flags/Badges
    isAvailableSoon: true,
    useDualImageCard: true,
    
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 2 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 2 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5506_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_2',
    mainImage: '/images/newArrival/02/IMG_5506_mod11.jpg',
    secondaryImage: '/images/newArrival/02/IMG_5513_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5506_mod11.jpg'],
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
    title: 'Farm Force 2000',
    status: 'active',
        useDualImageCard: true,

    // Product Flags/Badges
    // isOnSale: true,
    // isLowStock: true,
    // isAvailableSoon: true,

    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 3 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 3 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5513_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_3',
    mainImage: '/images/newArrival/02/IMG_5513_mod11.jpg',
      secondaryImage: '/images/newArrival/02/IMG_5513_mod11.jpg',

    gallery: ['/images/newArrival/02/IMG_5513_mod11.jpg'],
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
    title: 'Dream Beam',
    status: 'active',
    isAvailableSoon: true,
    useDualImageCard: true,
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 4 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 4 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5523_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_4',
    mainImage: '/images/newArrival/02/IMG_5523_mod11.jpg',
    secondaryImage: '/images/newArrival/02/IMG_5525_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5523_mod11.jpg'],
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
    title: 'Torch X',
    status: 'active',
    
    // Product Flags/Badges
    // isAvailableSoon: true,
    
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 5 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 5 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5525_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_5',
    mainImage: '/images/newArrival/02/IMG_5525_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5525_mod11.jpg'],
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
    title: 'FarmForce 3000',
    status: 'active',
    isAvailableSoon: true,
    useDualImageCard: true,
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 6 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 6 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5542_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_6',
    mainImage: '/images/newArrival/02/IMG_5542_mod11.jpg',
    secondaryImage: '/images/newArrival/02/IMG_5553_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5542_mod11.jpg'],
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
    title: 'Ding Works (Fortress Sentinel Security)',
    status: 'active',
    isAvailableSoon: true,
    useDualImageCard: true,
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 7 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 7 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5553_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_7',
    mainImage: '/images/newArrival/02/IMG_5553_mod11.jpg',
    secondaryImage: '/images/newArrival/02/IMG_5559_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5553_mod11.jpg'],
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
    title: 'Ding Works Pro (Fortress Sentinel Security)',
    status: 'active',
    isAvailableSoon: true,
    useDualImageCard: true,
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 8 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 8 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5559_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_8',
    mainImage: '/images/newArrival/02/IMG_5559_mod11.jpg',
    secondaryImage: '/images/newArrival/02/IMG_5563_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5559_mod11.jpg'],
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
    title: 'Home Security System - Fortress Sentinel Security',
    status: 'active',
    isAvailableSoon: true,
    useDualImageCard: true,
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 9 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 9 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5563_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_9',
    mainImage: '/images/newArrival/02/IMG_5563_mod11.jpg',
    secondaryImage: '/images/newArrival/02/IMG_5565_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5563_mod11.jpg'],
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
    title: 'ForkForce 2000',
    status: 'active',
    isAvailableSoon: true,
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 10 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 10 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5565_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_10',
    mainImage: '/images/newArrival/02/IMG_5565_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5565_mod11.jpg'],
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
    title: 'IronGrip Arm',
    status: 'active',
    
    // Product Flags/Badges
    isAvailableSoon: true,
    
    categories: [ 'mechanical-structural-kits',  'electronics-kits'],
    metaTitle: 'Mechanical Kit 11 - 3D Printed Structural Kit | Sadat Akhavi Academy',
    metaDescription: 'Build with our Mechanical Kit 11 - precision 3D printed parts for structural and mechanical projects.',
    metaKeywords: 'mechanical kit, 3D printed parts, structural kit, STEM education, mechanical components',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/02/IMG_5573_mod11.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/mechanical_kit_11',
    mainImage: '/images/newArrival/02/IMG_5573_mod11.jpg',
    gallery: ['/images/newArrival/02/IMG_5573_mod11.jpg'],
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
    // Aero Dreamer - Advanced Flight Mechanics Kit
    productCode: 'SAA-MCH-013',
    slug: 'aero_dreamer',
    title: 'Aero Dreamer',
    status: 'active',
    
    // Product Flags/Badges
    // isNewArrival: true,
    // isHot: true,
    // isAvailableSoon: true,
    
    categories: ['mechanical-structural-kits'],
    metaTitle: 'Aero Dreamer - Advanced Flight Mechanics Kit | Sadat Akhavi Academy',
    metaDescription: 'Build the Aero Dreamer - an advanced aerodynamics and flight mechanics kit. Learn about lift, thrust, and aerospace engineering.',
    metaKeywords: 'Aero Dreamer, flight mechanics, aerodynamics kit, aerospace engineering, STEM education, mechanical kit',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/03/IMG_5593.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/aero_dreamer',
    mainImage: '/images/newArrival/03/IMG_5593.jpg',
    gallery: ['/images/newArrival/03/IMG_5593.jpg'],
    description: [
      "Soar into the world of aerodynamics with Aero Dreamer!",
      "This advanced mechanical kit teaches the principles of flight, lift, thrust, and aerospace engineering.",
      "Perfect for aspiring engineers and aviation enthusiasts ready to explore the science of flight."
    ],
    homeSummary: "Soar into aerodynamics! Learn flight principles, lift, and thrust with this advanced aerospace engineering kit.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  // {
  //   // Training Package 1 - Robotics Fundamentals
  //   productCode: 'SAA-TRN-001',
  //   slug: 'robotics_fundamentals_package',
  //   title: 'Robotics Fundamentals Training Package',
  //   status: 'active',
  //   categories: ['training-packages'],
  //   metaTitle: 'Robotics Fundamentals Training Package | Sadat Akhavi Academy',
  //   metaDescription: 'Comprehensive training package covering robotics fundamentals, electronics, and programming. Includes hands-on projects and expert guidance.',
  //   metaKeywords: 'robotics training, STEM education, electronics course, programming course, hands-on learning',
  //   ogImage: 'https://sadat-akhavi-academy.com/images/slides/IMG_5239.JPG',
  //   ogUrl: 'https://sadat-akhavi-academy.com/products/robotics_fundamentals_package',
  //   mainImage: '/images/slides/IMG_5239.JPG',
  //   gallery: ['/images/slides/IMG_5239.JPG', '/images/slides/IMG_5255.JPG'],
  //   description: [
  //     "Master the fundamentals of robotics with our comprehensive training package.",
  //     "This package includes structured lessons, hands-on projects, and expert mentorship to guide you through electronics, programming, and mechanical design.",
  //     "Perfect for beginners and intermediate learners looking to build a strong foundation in STEM."
  //   ],
  //   homeSummary: "Master robotics fundamentals with structured lessons, hands-on projects, and expert mentorship. Perfect for beginners building a strong STEM foundation.",
  //   introVideoId: 'qB5FXVPfYr4',
  //   skills: [
  //     { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
  //     { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
  //     { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
  //   ],
  //   relatedKits: [
  //     { productCode: 'SAA-ABJ-001' },
  //     { productCode: 'SAA-TTH-002' }
  //   ]
  // },
  // {
  //   // Training Package 2 - Advanced Mechatronics
  //   productCode: 'SAA-TRN-002',
  //   slug: 'advanced_mechatronics_package',
  //   title: 'Advanced Mechatronics Training Package',
  //   status: 'active',
  //   categories: ['training-packages'],
  //   metaTitle: 'Advanced Mechatronics Training Package | Sadat Akhavi Academy',
  //   metaDescription: 'Take your skills to the next level with advanced mechatronics training. Includes complex projects and professional-grade challenges.',
  //   metaKeywords: 'mechatronics training, advanced robotics, engineering course, professional training, STEM',
  //   ogImage: 'https://sadat-akhavi-academy.com/images/slides/IMG_5255.JPG',
  //   ogUrl: 'https://sadat-akhavi-academy.com/products/advanced_mechatronics_package',
  //   mainImage: '/images/slides/IMG_5255.JPG',
  //   gallery: ['/images/slides/IMG_5255.JPG', '/images/slides/IMG_5239.JPG'],
  //   description: [
  //     "Elevate your engineering skills with our advanced mechatronics training package.",
  //     "Tackle complex projects combining mechanical design, electronics, and advanced programming.",
  //     "Ideal for students ready to take on professional-grade challenges and real-world applications."
  //   ],
  //   homeSummary: "Elevate your skills with advanced mechatronics training. Tackle complex projects combining mechanical design, electronics, and advanced programming.",
  //   introVideoId: 'qB5FXVPfYr4',
  //   skills: [
  //     { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
  //     { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
  //     { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
  //     { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
  //   ],
  //   relatedKits: [
  //     { productCode: 'SAA-ABX-002' },
  //     { productCode: 'SAA-TTH-002' }
  //   ]
  // },
  {
    // Class 1 - School Break Robotics Workshop
    productCode: 'SAA-CLS-001',
    slug: 'school_break_robotics_workshop',
    title: 'School Break Robotics Workshop',
    status: 'active',
    
    // Product Flags/Badges
    isClass: true,
    isAvailableSoon: true,
    
    categories: ['scholarships'],
    metaTitle: 'School Break Robotics Workshop | Sadat Akhavi Academy',
    metaDescription: 'Join our schoolbreak robotics workshop for hands-on learning. Build, code, and explore robotics in a collaborative environment.',
    metaKeywords: 'robotics workshop, schoolbreak class, hands-on learning, STEM workshop, beginner robotics',
    ogImage: 'https://sadat-akhavi-academy.com/images/scholarshipsNclasses/robot-7720802_640.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/school_break_robotics_workshop',
    mainImage: '/images/scholarshipsNclasses/robot-7720802_640.jpg',
    gallery: ['/images/scholarshipsNclasses/robot-7720802_640.jpg', '/images/scholarshipsNclasses/tool-2766836_640.jpg'],
    description: [
      "Join us for an exciting schoolbreak of robotics exploration!",
      "Our hands-on workshop guides you through building and programming your own robotic projects.",
      "Perfect for beginners and enthusiasts. All materials included. Register on Eventbrite!"
    ],
    homeSummary: "Join our schoolbreak robotics workshop for hands-on learning. Build, code, and explore robotics in a collaborative environment with expert instructors.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: [
      { productCode: 'SAA-ABJ-001' }
    ]
  },
  {
    // Class 2 - Electronics for Beginners
    productCode: 'SAA-CLS-002',
    slug: 'electronics_beginners_class',
    title: 'Electronics for Beginners Class',
    status: 'active',
    
    // Product Flags/Badges
    isClass: true,
    isAvailableSoon: true,
    
    categories: ['scholarships'],
    metaTitle: 'Electronics for Beginners Class | Sadat Akhavi Academy',
    metaDescription: 'Learn electronics from scratch in our beginner-friendly class. Understand circuits, components, and basic soldering.',
    metaKeywords: 'electronics class, beginner electronics, circuit design, soldering class, STEM education',
    ogImage: 'https://sadat-akhavi-academy.com/images/scholarshipsNclasses/soldering-1038517_640.jpg',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_beginners_class',
    mainImage: '/images/scholarshipsNclasses/soldering-1038517_640.jpg',
    gallery: ['/images/scholarshipsNclasses/soldering-1038517_640.jpg', '/images/scholarshipsNclasses/tool-2766836_640.jpg'],
    description: [
      "Start your electronics journey with our beginner-friendly class!",
      "Learn about circuits, components, and get hands-on experience with soldering and building simple projects.",
      "No prior experience needed. Perfect for curious minds ready to explore the world of electronics."
    ],
    homeSummary: "Start your electronics journey! Learn circuits, components, and soldering in a beginner-friendly class. No experience needed.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: [
      { productCode: 'SAA-ABJ-001' },
      { productCode: 'SAA-TTH-001' }
    ]
  },
  {
    // Scholarship 1 - STEM Excellence Scholarship
    productCode: 'SAA-SCH-001',
    slug: 'stem_excellence_scholarship',
    title: 'STEM Excellence Scholarship',
    status: 'active',
    
    // Product Flags/Badges
    isScholarship: true,
    isAvailableSoon: true,
    
    categories: ['scholarships'],
    metaTitle: 'STEM Excellence Scholarship | Sadat Akhavi Academy',
    metaDescription: 'Apply for our STEM Excellence Scholarship. Get access to courses, kits, and mentorship at reduced or no cost.',
    metaKeywords: 'STEM scholarship, robotics scholarship, free STEM education, student support, learning opportunity',
    ogImage: 'https://sadat-akhavi-academy.com/images/scholarshipsNclasses/diploma-9595340_640.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/stem_excellence_scholarship',
    mainImage: '/images/scholarshipsNclasses/diploma-9595340_640.png',
    gallery: ['/images/scholarshipsNclasses/diploma-9595340_640.png'],
    description: [
      "We believe every passionate learner deserves access to quality STEM education.",
      "Our STEM Excellence Scholarship provides full or partial funding for courses, kits, and mentorship programs.",
      "Apply today and take your first step toward an exciting future in science, technology, engineering, and mathematics!"
    ],
    homeSummary: "Get full or partial funding for courses, kits, and mentorship. We support passionate learners pursuing STEM excellence.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Scholarship 2 - Youth Innovation Grant
    productCode: 'SAA-SCH-002',
    slug: 'youth_innovation_grant',
    title: 'Youth Innovation Grant',
    status: 'active',
    
    // Product Flags/Badges
    isScholarship: true,
    isAvailableSoon: true,
    
    categories: ['scholarships'],
    metaTitle: 'Youth Innovation Grant | Sadat Akhavi Academy',
    metaDescription: 'Youth Innovation Grant for creative young minds. Funding for innovative STEM projects and ideas.',
    metaKeywords: 'youth grant, innovation scholarship, STEM funding, student grant, project funding',
    ogImage: 'https://sadat-akhavi-academy.com/images/scholarshipsNclasses/learning-9536177_640.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/youth_innovation_grant',
    mainImage: '/images/scholarshipsNclasses/learning-9536177_640.png',
    gallery: ['/images/scholarshipsNclasses/learning-9536177_640.png'],
    description: [
      "Got a brilliant idea? We want to help you bring it to life!",
      "Our Youth Innovation Grant supports creative young minds with funding for innovative STEM projects.",
      "Submit your project proposal and receive financial support, materials, and expert guidance to make your vision a reality."
    ],
    homeSummary: "Support for creative young minds! Get funding, materials, and expert guidance to bring your innovative STEM project to life.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' },
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/3d-printer-3308168_1280.png', name: '3D Design' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 1 - ESP32 Development Board
    productCode: 'SAA-ELC-001',
    slug: 'esp32_dev_board',
    title: 'ESP32 Development Board Kit',
    status: 'active',
    isSoldOut: true, 
    categories: ['electronics-kits'],
    metaTitle: 'ESP32 Development Board Kit | Sadat Akhavi Academy',
    metaDescription: 'Complete ESP32 development board kit with sensors, components, and breadboard. Perfect for learning IoT and wireless programming.',
    metaKeywords: 'ESP32 kit, development board, electronics kit, IoT learning, wireless programming, microcontroller',
    ogImage: 'https://sadat-akhavi-academy.com/images/computer-8671934_1280.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/esp32_dev_board',
    mainImage: '/images/computer-8671934_1280.png',
    gallery: ['/images/computer-8671934_1280.png'],
    description: [
      "Everything you need to start programming with ESP32!",
      "This electronics-only kit includes an ESP32 development board, breadboard, jumper wires, sensors, and essential electronic components.",
      "Perfect for learning wireless communication, IoT projects, and microcontroller programming without mechanical assembly."
    ],
    homeSummary: "Complete ESP32 development kit with sensors and components. Perfect for learning IoT and wireless programming.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 2 - Arduino Starter Kit
    productCode: 'SAA-ELC-002',
    slug: 'arduino_starter_kit',
    title: 'Arduino Starter Kit',
    status: 'active',
    isSoldOut: true, 
    categories: ['electronics-kits'],
    metaTitle: 'Arduino Starter Kit | Sadat Akhavi Academy',
    metaDescription: 'Comprehensive Arduino starter kit with sensors, LEDs, motors, and components. Learn electronics and programming from scratch.',
    metaKeywords: 'Arduino kit, starter kit, electronics learning, programming kit, STEM education',
    ogImage: 'https://sadat-akhavi-academy.com/images/computer-8671934_1280.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/arduino_starter_kit',
    mainImage: '/images/computer-8671934_1280.png',
    gallery: ['/images/computer-8671934_1280.png'],
    description: [
      "Start your electronics journey with Arduino!",
      "This comprehensive electronics kit includes Arduino board, breadboard, sensors, LEDs, resistors, and all components needed for learning.",
      "Focus purely on electronics and coding - no mechanical assembly required!"
    ],
    homeSummary: "Comprehensive Arduino kit with sensors, LEDs, and components. Perfect for learning electronics and programming.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 3 - Soldering Practice Kit
    productCode: 'SAA-ELC-003',
    slug: 'soldering_practice_kit',
    title: 'Soldering Practice Kit',
    status: 'active',
    isSoldOut: true, 
    categories: ['electronics-kits'],
    metaTitle: 'Soldering Practice Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn soldering with our practice kit. Includes PCBs, components, and guide for mastering this essential electronics skill.',
    metaKeywords: 'soldering kit, electronics practice, PCB assembly, soldering tutorial, hands-on learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/computer-8671934_1280.png',
    ogUrl: 'https://sadat-akhavi-academy.com/products/soldering_practice_kit',
    mainImage: '/images/computer-8671934_1280.png',
    gallery: ['/images/computer-8671934_1280.png'],
    description: [
      "Master the art of soldering!",
      "This electronics kit focuses on developing your soldering skills with practice PCBs and components.",
      "Electronics-only kit with no mechanical parts - perfect for building circuit board assembly confidence."
    ],
    homeSummary: "Learn soldering with practice PCBs and components. Master essential electronics assembly skills.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 4
    productCode: 'SAA-ELC-004',
    slug: 'electronics_kit_4',
    title: 'Electronics Learning Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Electronics Learning Kit | Sadat Akhavi Academy',
    metaDescription: 'Complete electronics learning kit with components and circuits. Perfect for hands-on electronics education.',
    metaKeywords: 'electronics kit, learning kit, circuit components, STEM education, electronics practice',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5594.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_4',
    mainImage: '/images/newArrival/04_elec/IMG_5594.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5594.JPG'],
    description: [
      "Dive into electronics with this comprehensive learning kit.",
      "Packed with essential components and circuits for hands-on learning.",
      "Perfect for students and hobbyists eager to master electronics fundamentals."
    ],
    homeSummary: "Complete electronics learning kit with components and circuits. Perfect for hands-on electronics education.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 5
    productCode: 'SAA-ELC-005',
    slug: 'electronics_kit_5',
    title: 'Advanced Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Advanced Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Advanced electronics kit with complex circuits and components. Take your electronics skills to the next level.',
    metaKeywords: 'advanced electronics, circuit design, electronics kit, STEM learning, technical skills',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5595.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_5',
    mainImage: '/images/newArrival/04_elec/IMG_5595.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5595.JPG'],
    description: [
      "Take your electronics skills to the next level with this advanced kit.",
      "Features complex circuits and advanced components for serious learners.",
      "Ideal for those ready to tackle more challenging electronics projects."
    ],
    homeSummary: "Advanced electronics kit with complex circuits. Take your electronics skills to the next level.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 6
    productCode: 'SAA-ELC-006',
    slug: 'electronics_kit_6',
    title: 'Sensor Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Sensor Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Electronics kit focused on sensors and measurement. Learn to work with various sensor types.',
    metaKeywords: 'sensor kit, electronics sensors, measurement kit, STEM learning, sensor projects',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5596.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_6',
    mainImage: '/images/newArrival/04_elec/IMG_5596.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5596.JPG'],
    description: [
      "Explore the world of sensors with this specialized electronics kit.",
      "Learn to work with temperature, light, motion, and other sensor types.",
      "Perfect for IoT projects and data collection applications."
    ],
    homeSummary: "Electronics kit focused on sensors and measurement. Learn to work with various sensor types.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 7
    productCode: 'SAA-ELC-007',
    slug: 'electronics_kit_7',
    title: 'Power Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Power Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn power electronics with this specialized kit. Master voltage regulation and power management.',
    metaKeywords: 'power electronics, voltage regulation, power management, electronics kit, STEM education',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5597.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_7',
    mainImage: '/images/newArrival/04_elec/IMG_5597.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5597.JPG'],
    description: [
      "Master power electronics with this specialized learning kit.",
      "Learn about voltage regulation, power conversion, and energy management.",
      "Essential skills for building battery-powered and efficient electronic devices."
    ],
    homeSummary: "Learn power electronics with voltage regulation and power management circuits.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 8
    productCode: 'SAA-ELC-008',
    slug: 'electronics_kit_8',
    title: 'LED & Display Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'LED & Display Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Electronics kit featuring LEDs and displays. Create visual projects and learn display technologies.',
    metaKeywords: 'LED kit, display electronics, visual projects, electronics learning, STEM kit',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5598.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_8',
    mainImage: '/images/newArrival/04_elec/IMG_5598.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5598.JPG'],
    description: [
      "Illuminate your electronics learning with LEDs and displays!",
      "Create colorful visual projects and learn display technologies.",
      "Perfect for making interactive visual feedback systems."
    ],
    homeSummary: "Electronics kit featuring LEDs and displays. Create visual projects and learn display technologies.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 9
    productCode: 'SAA-ELC-009',
    slug: 'electronics_kit_9',
    title: 'Motor Control Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Motor Control Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn motor control circuits and electronics. Perfect for robotics and automation projects.',
    metaKeywords: 'motor control, electronics kit, robotics electronics, automation, STEM learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5599.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_9',
    mainImage: '/images/newArrival/04_elec/IMG_5599.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5599.JPG'],
    description: [
      "Master motor control electronics for robotics and automation.",
      "Learn to control DC motors, servos, and stepper motors.",
      "Essential for any robotics or automation project."
    ],
    homeSummary: "Learn motor control circuits and electronics. Perfect for robotics and automation projects.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 10
    productCode: 'SAA-ELC-010',
    slug: 'electronics_kit_10',
    title: 'Communication Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Communication Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn wireless and wired communication electronics. Build communication systems and networks.',
    metaKeywords: 'communication electronics, wireless kit, networking, electronics learning, STEM',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5600.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_10',
    mainImage: '/images/newArrival/04_elec/IMG_5600.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5600.JPG'],
    description: [
      "Explore wireless and wired communication electronics.",
      "Learn RF, Bluetooth, WiFi, and other communication protocols.",
      "Build your own communication systems and networks."
    ],
    homeSummary: "Learn wireless and wired communication electronics. Build communication systems and networks.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 11
    productCode: 'SAA-ELC-011',
    slug: 'electronics_kit_11',
    title: 'Audio Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Audio Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn audio electronics and sound circuits. Build amplifiers, speakers, and audio systems.',
    metaKeywords: 'audio electronics, sound circuits, amplifier kit, audio learning, STEM electronics',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5601.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_11',
    mainImage: '/images/newArrival/04_elec/IMG_5601.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5601.JPG'],
    description: [
      "Discover the world of audio electronics and sound circuits.",
      "Learn to build amplifiers, filters, and audio systems.",
      "Perfect for music and audio enthusiasts interested in electronics."
    ],
    homeSummary: "Learn audio electronics and sound circuits. Build amplifiers, speakers, and audio systems.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 12
    productCode: 'SAA-ELC-012',
    slug: 'electronics_kit_12',
    title: 'Digital Logic Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Digital Logic Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn digital logic circuits and gates. Foundation for computer architecture and digital systems.',
    metaKeywords: 'digital logic, logic gates, digital circuits, computer architecture, STEM learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5602.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_12',
    mainImage: '/images/newArrival/04_elec/IMG_5602.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5602.JPG'],
    description: [
      "Master digital logic circuits and Boolean algebra.",
      "Learn logic gates, flip-flops, and digital circuit design.",
      "Foundation for understanding computer architecture."
    ],
    homeSummary: "Learn digital logic circuits and gates. Foundation for computer architecture and digital systems.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 13
    productCode: 'SAA-ELC-013',
    slug: 'electronics_kit_13',
    title: 'Analog Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Analog Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn analog circuits and signal processing. Master transistors, op-amps, and analog design.',
    metaKeywords: 'analog electronics, signal processing, transistor circuits, op-amp, STEM learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5603.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_13',
    mainImage: '/images/newArrival/04_elec/IMG_5603.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5603.JPG'],
    description: [
      "Dive into analog electronics and signal processing.",
      "Master transistors, operational amplifiers, and analog design.",
      "Essential for understanding real-world signal manipulation."
    ],
    homeSummary: "Learn analog circuits and signal processing. Master transistors, op-amps, and analog design.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 14
    productCode: 'SAA-ELC-014',
    slug: 'electronics_kit_14',
    title: 'Microcontroller Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Microcontroller Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Complete microcontroller kit for embedded systems. Learn programming and interfacing.',
    metaKeywords: 'microcontroller kit, embedded systems, programming, interfacing, STEM electronics',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5604.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_14',
    mainImage: '/images/newArrival/04_elec/IMG_5604.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5604.JPG'],
    description: [
      "Complete microcontroller kit for embedded systems learning.",
      "Learn programming, interfacing, and system design.",
      "Build smart devices and automated systems."
    ],
    homeSummary: "Complete microcontroller kit for embedded systems. Learn programming and interfacing.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 15
    productCode: 'SAA-ELC-015',
    slug: 'electronics_kit_15',
    title: 'IoT Electronics Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'IoT Electronics Kit | Sadat Akhavi Academy',
    metaDescription: 'Internet of Things electronics kit. Build connected devices and smart systems.',
    metaKeywords: 'IoT kit, internet of things, connected devices, smart systems, STEM learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5605.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_15',
    mainImage: '/images/newArrival/04_elec/IMG_5605.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5605.JPG'],
    description: [
      "Enter the world of Internet of Things with this comprehensive kit.",
      "Build connected devices that communicate over the internet.",
      "Create smart home systems and cloud-connected projects."
    ],
    homeSummary: "Internet of Things electronics kit. Build connected devices and smart systems.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 16
    productCode: 'SAA-ELC-016',
    slug: 'electronics_kit_16',
    title: 'Robotics Electronics Foundation Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Robotics Electronics Foundation Kit | Sadat Akhavi Academy',
    metaDescription: 'Electronics foundation for robotics. Learn circuits and components for robot building.',
    metaKeywords: 'robotics electronics, robot circuits, electronics foundation, STEM robotics, learning kit',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5606.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_16',
    mainImage: '/images/newArrival/04_elec/IMG_5606.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5606.JPG'],
    description: [
      "Build your electronics foundation for robotics projects.",
      "Learn the circuits and components essential for robot building.",
      "Perfect preparation for advanced robotics kits."
    ],
    homeSummary: "Electronics foundation for robotics. Learn circuits and components for robot building.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/flat-2126877_1280.png', name: 'Robotics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 17
    productCode: 'SAA-ELC-017',
    slug: 'electronics_kit_17',
    title: 'Circuit Design Starter Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Circuit Design Starter Kit | Sadat Akhavi Academy',
    metaDescription: 'Start designing your own circuits. Learn circuit theory and practical design.',
    metaKeywords: 'circuit design, electronics design, circuit theory, starter kit, STEM learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5607.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_17',
    mainImage: '/images/newArrival/04_elec/IMG_5607.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5607.JPG'],
    description: [
      "Start designing your own circuits from scratch.",
      "Learn circuit theory, schematic reading, and practical design.",
      "Move from following instructions to creating your own projects."
    ],
    homeSummary: "Start designing your own circuits. Learn circuit theory and practical design.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 18
    productCode: 'SAA-ELC-018',
    slug: 'electronics_kit_18',
    title: 'Battery & Energy Storage Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Battery & Energy Storage Kit | Sadat Akhavi Academy',
    metaDescription: 'Learn about batteries and energy storage. Build power systems for portable projects.',
    metaKeywords: 'battery kit, energy storage, power systems, portable electronics, STEM learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5608.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_18',
    mainImage: '/images/newArrival/04_elec/IMG_5608.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5608.JPG'],
    description: [
      "Master battery technology and energy storage systems.",
      "Learn about different battery types and charging circuits.",
      "Essential for building portable and autonomous devices."
    ],
    homeSummary: "Learn about batteries and energy storage. Build power systems for portable projects.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 19
    productCode: 'SAA-ELC-019',
    slug: 'electronics_kit_19',
    title: 'Electronics Prototyping Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Electronics Prototyping Kit | Sadat Akhavi Academy',
    metaDescription: 'Complete prototyping kit for rapid electronics development. Build and test ideas quickly.',
    metaKeywords: 'prototyping kit, electronics prototyping, rapid development, breadboard, STEM learning',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5609.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_19',
    mainImage: '/images/newArrival/04_elec/IMG_5609.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5609.JPG'],
    description: [
      "Complete prototyping kit for rapid electronics development.",
      "Build and test your ideas quickly without soldering.",
      "Perfect for experimentation and iterative design."
    ],
    homeSummary: "Complete prototyping kit for rapid electronics development. Build and test ideas quickly.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' }
    ],
    relatedKits: []
  },
  {
    // Electronics Kit 20
    productCode: 'SAA-ELC-020',
    slug: 'electronics_kit_20',
    title: 'Smart Sensors & Automation Kit',
    status: 'active',
    isAvailableSoon: true,
    categories: ['electronics-kits'],
    metaTitle: 'Smart Sensors & Automation Kit | Sadat Akhavi Academy',
    metaDescription: 'Build smart automation systems with sensors. Learn home automation and intelligent control.',
    metaKeywords: 'smart sensors, automation kit, home automation, intelligent control, STEM electronics',
    ogImage: 'https://sadat-akhavi-academy.com/images/newArrival/04_elec/IMG_5621.JPG',
    ogUrl: 'https://sadat-akhavi-academy.com/products/electronics_kit_20',
    mainImage: '/images/newArrival/04_elec/IMG_5621.JPG',
    gallery: ['/images/newArrival/04_elec/IMG_5621.JPG'],
    description: [
      "Build smart automation systems with intelligent sensors.",
      "Learn home automation and intelligent environmental control.",
      "Create responsive systems that react to their surroundings."
    ],
    homeSummary: "Build smart automation systems with sensors. Learn home automation and intelligent control.",
    introVideoId: 'qB5FXVPfYr4',
    skills: [
      { icon: '/images/computer-8671934_1280.png', name: 'Electronics' },
      { icon: '/images/hexagon-2307350_1280.png', name: 'Coding' }
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

// Helper function to get products marked as Available Soon
export function getAvailableSoonProducts(): ProductData[] {
  return products.filter(product => product.isAvailableSoon === true)
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
    'scholarships': 'Scholarships & Classes',
    'training-packages': 'Self-Paced Training Packages',
    'packaged-kits': 'Start-to-Finish Kits (Electronics + Mechanical)',
    'electronics-kits': 'Electronics Kits',
    'mechanical-structural-kits': 'Mechanical & Structural Kits'
  }
  return displayNames[category]
}

