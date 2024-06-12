'use client'

import Swiper from '../components/Swiper/Swiper'
import CarrosselBetVip from '../components/CarrosselBetVip/CarrosselBetVip'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import BetVipBanner from '../components/BetVipBanner/BetVipBanner'

export default function Home() {
  return (
    <main className={`bg-blue-400 w-full h-full pb-32`}>
      <Swiper />
      <CarrosselBetVip />
      <HowItWorks />
      <BetVipBanner />
    </main>
  )
}
