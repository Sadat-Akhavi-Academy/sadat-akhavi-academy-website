import ProductPage from '@/components/ProductPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alpha Bike X - RC Bike Robotics Kit | Sadat Akhavi Academy',
  description: 'Build the Alpha Bike X - an engaging remote-controlled bike for learning electronics, robotics, and ESP32 programming.',
  keywords: 'Alpha Bike X, DIY robotics, RC bike, electronics kit, ESP32, STEM learning, robotics education',
}

export default function AlphaBikeXPage() {
  return (
    <ProductPage
      title="Alpha Bike X"
      slug="alpha_bike_x"
      mainImage="/images/alpha_bike_x.png"
      description={[
        "Retiring Soon – Discover the New Alpha Bike X+!",
        "Alpha isn't just a bike; it's a symbol. It's cruising in style. When you build your own Alpha, you're not just following instructions; you're crafting confidence and forging your own path.",
        "The Alpha Bike X offers a comprehensive introduction to robotics and electronics with a fun, engaging build experience."
      ]}
      introVideoId="qB5FXVPfYr4"
      gallery={[
        "/images/alpha_bike_x.png",
        "/images/alpha-dog_turbo_thumb-IMG_7717.png"
      ]}
      skills={[
        { icon: "/images/flat-2126877_1280.png", name: "Robotics" },
        { icon: "/images/computer-8671934_1280.png", name: "Electronics" },
        { icon: "/images/3d-printer-3308168_1280.png", name: "3D Design" },
        { icon: "/images/hexagon-2307350_1280.png", name: "Coding" }
      ]}
      relatedKits={[
        { title: "Alpha Bike X+", slug: "alpha_bike_x_plus" },
        { title: "Alpha Bike J", slug: "alpha_bike_j" }
      ]}
      metadata={{
        ogImage: "https://sadat-akhavi-academy.com/images/alpha_bike_x.png",
        keywords: "Alpha Bike X, robotics kit"
      }}
    />
  )
}
