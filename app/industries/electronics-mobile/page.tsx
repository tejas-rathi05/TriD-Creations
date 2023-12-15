import MainCarousel from '@/components/MainCarousel/MainCarousel'
import { electronics_mobileCarouselContent } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <MainCarousel itemArray={electronics_mobileCarouselContent} vidURL="/videos/industries/ElectronicsMobile.mp4"/>
    </div>
  )
}

export default page