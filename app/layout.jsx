import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { OrganizationSchema, WebsiteSchema, MedicalBusinessSchema } from '@/components/common/JsonLd'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://varsalhealthcare.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Varsal Healthcare - Innovative Healthcare for a Better Tomorrow',
    template: '%s | Varsal Healthcare',
  },
  description: 'Varsal Healthcare is a leading pharmaceutical company dedicated to enhancing quality of life through breakthrough medical solutions, innovative gynecology, orthopedic, and surgical products.',
  keywords: ['healthcare', 'pharmaceutical', 'medical solutions', 'gynecology', 'orthopedic', 'surgical products', 'patient care', 'healthcare innovation', 'Varsal Healthcare', 'medicine'],
  authors: [{ name: 'Varsal Healthcare Pvt Ltd' }],
  creator: 'Varsal Healthcare Pvt Ltd',
  publisher: 'Varsal Healthcare Pvt Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Varsal Healthcare',
    title: 'Varsal Healthcare - Innovative Healthcare for a Better Tomorrow',
    description: 'Varsal Healthcare is a leading pharmaceutical company dedicated to enhancing quality of life through breakthrough medical solutions and patient-centered care.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Varsal Healthcare - Healthcare Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varsal Healthcare - Innovative Healthcare for a Better Tomorrow',
    description: 'Leading pharmaceutical company providing breakthrough medical solutions in gynecology, orthopedic, and surgical products.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a5f' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a5f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <OrganizationSchema />
        <WebsiteSchema />
        <MedicalBusinessSchema />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

