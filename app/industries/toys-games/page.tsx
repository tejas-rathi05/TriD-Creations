import MainCarousel from '@/components/MainCarousel/MainCarousel'
import { toys_gamesCarouselContent } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <MainCarousel itemArray={toys_gamesCarouselContent} vidURL="/videos/industries/ToyCar.mp4"/>
    </div>
  )
}

export default page