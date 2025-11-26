import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Sadat Akhavi Academy | STEM Education, Robotics, Electronics, 3D Printing & IoT Workshops',
  description: 'Learn STEM subjects through hands-on workshops and classes. Master electronics, robotics, mechatronics, IoT, 3D printing, laser cutting, CNC machining, and programming.',
  keywords: 'STEM education, robotics courses, electronics learning, mechatronics training, IoT workshops, 3D printing classes, laser cutting courses, CNC machining, programming classes, Arduino, ESP32',
  authors: [{ name: 'Sadat Akhavi Academy' }],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/saa_logo_09.png" />
        <link rel="apple-touch-icon" href="/images/saa_logo_12.png" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y85LB15940"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y85LB15940');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
