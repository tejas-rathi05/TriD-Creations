import MainCarousel from '@/components/MainCarousel/MainCarousel'
import { architectureCarouselContent } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <MainCarousel itemArray={architectureCarouselContent} vidURL="/videos/industries/Architecture.mp4"/>
    </div>
  )
}

export default page