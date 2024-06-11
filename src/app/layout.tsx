import type { Metadata } from 'next'
import './globals.css'

import Providers from './providers'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'Bolão QXUTE + BETVIP',
  description: 'Bolão QXUTE + BETVIP',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className=" overflow-x-hidden">
        <Providers>{children}</Providers>
        <Suspense fallback={<Loading />} />
      </body>
    </html>
  )
}
