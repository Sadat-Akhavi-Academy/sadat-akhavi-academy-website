import ProductPage from '@/components/ProductPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alpha Bike X+ - Advanced RC Bike Kit | Sadat Akhavi Academy',
  description: 'Build the advanced Alpha Bike X+ - a feature-rich remote-controlled bike for learning electronics, robotics, ESP32 programming, and advanced mechatronics.',
  keywords: 'Alpha Bike X Plus, advanced robotics kit, RC bike, electronics project, ESP32, STEM education, 3D printing, mechatronics',
}

export default function AlphaBikeXPlusPage() {
  return (
    <ProductPage
      title="Alpha Bike X+"
      slug="alpha_bike_x_plus"
      mainImage="/images/ABXplus.JPG"
      description={[
        "Alpha isn't just a bike; it's a symbol. It's cruising in style. When you build your own Alpha, you're not just following instructions; you're crafting confidence and forging your own path.",
        "The Alpha Bike X+ is the enhanced version with additional features and capabilities. Perfect for those who want to take their robotics skills to the next level.",
        "Build, customize, and master advanced electronics while creating your own high-performance remote-controlled bike."
      ]}
      introVideoId="qB5FXVPfYr4"
      gallery={[
        "/images/ABXplus.JPG",
        "/images/ABXX_TT_Plus.JPG",
        "/images/alpha_bike_x.png"
      ]}
      skills={[
        { icon: "/images/flat-2126877_1280.png", name: "Robotics" },
        { icon: "/images/computer-8671934_1280.png", name: "Electronics" },
        { icon: "/images/3d-printer-3308168_1280.png", name: "3D Design" },
        { icon: "/images/hexagon-2307350_1280.png", name: "Coding" }
      ]}
      relatedKits={[
        { title: "Turbo Thumb+", slug: "turbo_thumb_plus" },
        { title: "Alpha Bike J", slug: "alpha_bike_j" }
      ]}
      metadata={{
        ogImage: "https://sadat-akhavi-academy.com/images/ABXplus.JPG",
        keywords: "Alpha Bike X Plus, robotics"
      }}
    />
  )
}
