import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <main>{children}</main>
    </NextUIProvider>
  )
}
