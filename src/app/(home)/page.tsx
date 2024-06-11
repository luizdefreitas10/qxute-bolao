'use client'

import useWindowWidth from '@/utils/window-width-hook'
import Swiper from '../components/Swiper/Swiper'
import CarrosselBetVip from '../components/CarrosselBetVip/CarrosselBetVip'
import HowItWorks from '../components/HowItWorks/HowItWorks'

export default function Home() {
  const windowWidth = useWindowWidth()

  const isMobile = !!(windowWidth && windowWidth < 768)

  return (
    <main
      className={`bg-blue-400 w-full h-screen ${isMobile ? '-my-[106.5px]' : '-my-[102.5px]'}`}
    >
      <Swiper />
      <CarrosselBetVip />
      <HowItWorks />
    </main>
  )
}
