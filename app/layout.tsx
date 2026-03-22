import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'SOLARA | Electronic Music Producer & DJ — Dubai',
  description: 'SOLARA — Dubai-based electronic music producer, DJ, and performer. Deep house, melodic techno, and Afro-house fusion. Bookings, releases, and tour dates.',
  keywords: 'DJ Dubai, electronic music producer Dubai, deep house DJ, melodic techno Dubai, SOLARA DJ, Dubai nightlife, music producer UAE, Afro house DJ',
  authors: [{ name: 'SOLARA' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://solara-music.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://solara-music.vercel.app',
    title: 'SOLARA | Electronic Music Producer & DJ — Dubai',
    description: 'Deep house. Melodic techno. Afro-house fusion. Dubai-based producer and DJ available for bookings worldwide.',
    siteName: 'SOLARA',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'SOLARA DJ performing live in Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLARA | Electronic Music Producer & DJ — Dubai',
    description: 'Deep house. Melodic techno. Afro-house fusion. Bookings open.',
    images: ['https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-PLACEHOLDER');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${space.variable} font-sans antialiased grain`}>
        {children}
      </body>
    </html>
  )
}
