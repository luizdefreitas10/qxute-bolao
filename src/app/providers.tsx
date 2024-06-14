'use client'

import { EventsProvider } from '@/context/EventsContext'
import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <EventsProvider>
      <NextUIProvider>
        <main>{children}</main>
      </NextUIProvider>
    </EventsProvider>
  )
}
