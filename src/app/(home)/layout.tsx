import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bolão QXUTE + BETVIP - Home',
  description: 'Bolão QXUTE + BETVIP',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${inter.className} flex flex-col items-center`}>
      <Header />
      <div className="h-full w-full bg-white flex justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  )
}
// -mb-[210px]
