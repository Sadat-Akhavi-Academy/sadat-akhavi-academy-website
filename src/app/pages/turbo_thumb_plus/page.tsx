import ProductPage from '@/components/ProductPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Turbo Thumb+ - Universal RC Controller Kit | Sadat Akhavi Academy',
  description: 'Build your own Turbo Thumb+ - a modular universal controller for all your RC devices. Learn electronics, ESP32 programming, and wireless communication.',
  keywords: 'Turbo Thumb Plus, RC controller, DIY controller, ESP32, wireless control, robotics, electronics kit',
}

export default function TurboThumbPlusPage() {
  return (
    <ProductPage
      title="Turbo Thumb+"
      slug="turbo_thumb_plus"
      mainImage="/images/TTplus.JPG"
      description={[
        "Make one and control All! Turbo Thumb+ is awesome - it's one controller you build yourself that controls all your RC devices you're gonna build.",
        "It's modular and you can add new features to it. The Turbo Thumb+ represents the next generation of our universal controller with enhanced capabilities.",
        "Perfect for controlling your Alpha Bikes and other RC projects!"
      ]}
      introVideoId="qB5FXVPfYr4"
      gallery={[
        "/images/TTplus.JPG",
        "/images/TT_Plus.JPG",
        "/images/ABXX_TT_Plus.JPG"
      ]}
      skills={[
        { icon: "/images/flat-2126877_1280.png", name: "Robotics" },
        { icon: "/images/computer-8671934_1280.png", name: "Electronics" },
        { icon: "/images/3d-printer-3308168_1280.png", name: "3D Design" },
        { icon: "/images/hexagon-2307350_1280.png", name: "Coding" }
      ]}
      relatedKits={[
        { title: "Alpha Bike X+", slug: "alpha_bike_x_plus" },
        { title: "Turbo Thumb", slug: "turbo-thumb" }
      ]}
      metadata={{
        ogImage: "https://sadat-akhavi-academy.com/images/TTplus.JPG",
        keywords: "Turbo Thumb Plus, RC controller"
      }}
    />
  )
}
