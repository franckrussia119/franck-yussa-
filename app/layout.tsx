import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AccentProvider from '@/components/AccentProvider'

export const metadata: Metadata = {
  title: 'Frank Valere Yussa - Economist & Lawyer',
  description: 'Corporate Lawyer with traceable Banking and Corporate Finance experience. Investment Banker, Lawyer, Aircraft Specialist.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AccentProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AccentProvider>
      </body>
    </html>
  )
}
