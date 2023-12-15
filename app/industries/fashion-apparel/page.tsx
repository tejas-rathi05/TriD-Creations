import MainCarousel from '@/components/MainCarousel/MainCarousel'
import { fashion_apparelCarouselContent } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <MainCarousel itemArray={fashion_apparelCarouselContent} vidURL="/videos/industries/FashionApparel.mp4"/>
    </div>
  )
}

export default page