import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WalletProvider from './(providers)/wallet-provider'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Layer 2 Summer',
  description: 'Layer 2 Summer is place where you can find information about a collection of Layer 2 blockchains.',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          {children}
        </WalletProvider>
        <Toaster />
      </body>
    </html>
  )
}
