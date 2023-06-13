import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Shawn Property',
  description: 'Shawn Property Group',
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
