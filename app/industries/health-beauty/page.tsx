import MainCarousel from '@/components/MainCarousel/MainCarousel'
import { health_beautyCarouselContent } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <MainCarousel itemArray={health_beautyCarouselContent} vidURL="/videos/industries/HealthBeauty.mp4"/>
    </div>
  )
}

export default page