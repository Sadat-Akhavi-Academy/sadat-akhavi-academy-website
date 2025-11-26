import ProductPage from '@/components/ProductPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Turbo Thumb - Universal RC Controller | Sadat Akhavi Academy',
  description: 'Build your own Turbo Thumb controller - control all your RC devices with one modular controller. Learn electronics and wireless communication.',
  keywords: 'Turbo Thumb, RC controller, DIY electronics, ESP32, wireless control, robotics kit',
}

export default function TurboThumbPage() {
  return (
    <ProductPage
      title="Turbo Thumb"
      slug="turbo-thumb"
      mainImage="/images/turbo-thumb-IMG_7717.png"
      description={[
        "Retiring Soon – Discover the New Turbo Thumb+!",
        "Make one and control All! Turbo Thumb is awesome - it's one controller you build yourself that controls all your RC devices you're gonna build.",
        "It's modular and you can add new features to it. A great introduction to wireless control systems!"
      ]}
      introVideoId="qB5FXVPfYr4"
      gallery={[
        "/images/turbo-thumb-IMG_7717.png",
        "/images/alpha-dog_turbo_thumb-IMG_7717.png"
      ]}
      skills={[
        { icon: "/images/flat-2126877_1280.png", name: "Robotics" },
        { icon: "/images/computer-8671934_1280.png", name: "Electronics" },
        { icon: "/images/3d-printer-3308168_1280.png", name: "3D Design" },
        { icon: "/images/hexagon-2307350_1280.png", name: "Coding" }
      ]}
      relatedKits={[
        { title: "Turbo Thumb+", slug: "turbo_thumb_plus" },
        { title: "Alpha Bike X", slug: "alpha_bike_x" }
      ]}
      metadata={{
        ogImage: "https://sadat-akhavi-academy.com/images/turbo-thumb-IMG_7717.png",
        keywords: "Turbo Thumb, RC controller"
      }}
    />
  )
}
