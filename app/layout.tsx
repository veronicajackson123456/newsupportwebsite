import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'MCOL LTD | Enterprise PMS Software Solutions',
  description: 'MCOL LTD provides enterprise-grade Property Management System solutions, integration services, 24/7 technical support, and training for hotels, property managers, and hospitality businesses.',
  keywords: 'PMS software, property management system, hotel software, hospitality technology, PMS support, PMS integration, property management solutions, MCOL LTD',
  openGraph: {
    title: 'MCOL LTD | Enterprise PMS Software Solutions',
    description: 'Enterprise-grade property management systems, integration, and 24/7 support for the hospitality industry.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0f1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
