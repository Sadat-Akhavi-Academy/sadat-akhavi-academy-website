import ProductPage from '@/components/ProductPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clockometer - Revolutionary Time Experience | Sadat Akhavi Academy',
  description: 'Build the Clockometer - a revolutionary timepiece that brings time to life! Perfect for young car lovers and electronics enthusiasts.',
  keywords: 'Clockometer, DIY clock, electronics project, ESP32 clock, STEM education, unique timepiece',
}

export default function ClockometerPage() {
  return (
    <ProductPage
      title="Clockometer"
      slug="clockometer"
      mainImage="/images/clockometer_IMG_7795.png"
      description={[
        "Experience time like never before - the ultimate timepiece for young car lovers!",
        "Clockometer doesn't just tell time; it brings time to life in a whole new, exciting way.",
        "Combine electronics, programming, and creativity to build your own unique clock display."
      ]}
      introVideoId="qB5FXVPfYr4"
      gallery={[
        "/images/clockometer_IMG_7795.png"
      ]}
      skills={[
        { icon: "/images/flat-2126877_1280.png", name: "Robotics" },
        { icon: "/images/computer-8671934_1280.png", name: "Electronics" },
        { icon: "/images/3d-printer-3308168_1280.png", name: "3D Design" },
        { icon: "/images/hexagon-2307350_1280.png", name: "Coding" }
      ]}
      relatedKits={[
        { title: "Alpha Bike J", slug: "alpha_bike_j" },
        { title: "Turbo Thumb", slug: "turbo-thumb" }
      ]}
      metadata={{
        ogImage: "https://sadat-akhavi-academy.com/images/clockometer_IMG_7795.png",
        keywords: "Clockometer, DIY clock"
      }}
    />
  )
}
