import ProductPage from '@/components/ProductPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alpha Bike J - DIY RC Bike Robotics Kit | Sadat Akhavi Academy',
  description: 'Build your own Alpha Bike J - a beginner-friendly remote-controlled bike perfect for learning electronics, robotics, 3D printing, and ESP32 programming. Features partially pre-soldered PCB for easy assembly.',
  keywords: 'Alpha Bike J, DIY robotics kit, RC bike, electronics kit for beginners, ESP32 robotics project, STEM learning kit, 3D printing project, Arduino bike, robotics education, soldering practice, mechatronics kit',
  openGraph: {
    type: 'website',
    url: 'https://sadat-akhavi-academy.com/pages/alpha_bike_j',
    title: 'Alpha Bike J - DIY RC Bike Robotics Kit',
    description: 'Build your own RC bike! Alpha Bike J is perfect for beginners - learn electronics, robotics, 3D printing, and programming with this engaging educational kit.',
    images: 'https://sadat-akhavi-academy.com/images/alpha_bike_j_mod4.jpg',
  },
}

export default function AlphaBikeJPage() {
  return (
    <ProductPage
      title="Alpha Bike J"
      slug="alpha_bike_j"
      mainImage="/images/alpha_bike_j_mod4.jpg"
      description={[
        "Alpha Bike J is highly engaging and beginner-friendly. Like its older brother, Alpha Bike X, it's great fun! It is even more nimble, sharper, and loves to showcase its speed with dynamic moves!",
        "Its partially pre-soldered PCB board removes complex component soldering, making it great for beginners while still engaging and teaching soldering with simple components like resistors, wires, and power switch connectors.",
        "If you're looking to dive into 3D printing, electronics, and more, Alpha Bike Junior is your perfect ride!"
      ]}
      introVideoId="qDEQXZS1ljg"
      assemblyVideoId="fkp69hrBfW0"
      guideDocUrl="https://docs.google.com/document/d/18UMJpRn66otXkDhnvMU0jeuiV8Wx0RvetPbYFIAwI3Y/edit"
      printingDocUrl="https://docs.google.com/document/d/1SXziDB2uRv0wXhz8YDTpPZ3y6kvRAO_qyDteDUzxlhc/edit"
      softwareUrl="https://gitlab.com/sadat-akhavi-academy/saa_alphabike_j_esp32_rx"
      gallery={[
        "/images/alphaBikeJ_gallery/alpha_bike_j_mod4_gitlab2.jpg",
        "/images/alphaBikeJ_gallery/IMG_8263.JPG",
        "/images/alphaBikeJ_gallery/IMG_8262.JPG",
        "/images/alphaBikeJ_gallery/IMG_8273.JPG",
        "/images/alphaBikeJ_gallery/IMG_8277.JPG",
        "/images/alphaBikeJ_gallery/Screenshot01.png",
        "/images/alphaBikeJ_gallery/Screenshot02.png",
        "/images/alphaBikeJ_gallery/Screenshot03.png",
        "/images/alphaBikeJ_gallery/IMG_8350.JPG",
        "/images/alphaBikeJ_gallery/IMG_8222.JPG",
        "/images/alphaBikeJ_gallery/IMG_8224.JPG",
        "/images/alphaBikeJ_gallery/IMG_8255.JPG"
      ]}
      skills={[
        { icon: "/images/flat-2126877_1280.png", name: "Robotics" },
        { icon: "/images/computer-8671934_1280.png", name: "Electronics" },
        { icon: "/images/3d-printer-3308168_1280.png", name: "3D Design" },
        { icon: "/images/hexagon-2307350_1280.png", name: "Coding" }
      ]}
      relatedKits={[
        { title: "Turbo Thumb", slug: "turbo-thumb" },
        { title: "Alpha Bike X", slug: "alpha_bike_x" }
      ]}
      metadata={{
        ogImage: "https://sadat-akhavi-academy.com/images/alpha_bike_j_mod4.jpg",
        keywords: "Alpha Bike J, DIY robotics kit, RC bike"
      }}
    />
  )
}
