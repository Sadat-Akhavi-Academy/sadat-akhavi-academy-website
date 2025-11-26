import { Metadata } from 'next'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'Sadat Akhavi Academy | STEM Education, Robotics, Electronics, 3D Printing & IoT Workshops',
  description: 'Learn STEM subjects through hands-on workshops and classes. Master electronics, robotics, mechatronics, IoT, 3D printing, laser cutting, CNC machining, and programming. Build amazing projects like Alpha Bike, Turbo Thumb, and Clockometer.',
  keywords: 'STEM education, robotics courses, electronics learning, mechatronics training, IoT workshops, 3D printing classes, laser cutting courses, CNC machining, programming classes, Arduino, ESP32, educational kits, hands-on learning, STEM workshops, DIY electronics, maker education, electromechanics, robotics kits, coding classes, engineering education',
  openGraph: {
    type: 'website',
    url: 'https://sadat-akhavi-academy.com/',
    title: 'Sadat Akhavi Academy | STEM Education, Robotics & Electronics Workshops',
    description: 'Make STEM learning fun and engaging! Join our hands-on workshops to master robotics, electronics, mechatronics, IoT, 3D printing, and programming. Build real projects while learning.',
    images: 'https://sadat-akhavi-academy.com/images/saa_logo_12.png',
    siteName: 'Sadat Akhavi Academy',
  },
}

export default function Home() {
  return <HomeContent />
}
