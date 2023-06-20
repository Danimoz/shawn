import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Shawn Property',
  description: 'Official Website of Shawn Property Group',
  verification: {
    google: '03WkixCFpHVyggE-nOI4QpUa1lD4x8E04cwgKTskv0k'
  }
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
