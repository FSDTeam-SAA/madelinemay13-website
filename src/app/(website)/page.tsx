import Banner from '@/components/sections/HomePage/Banner'
import HomeAboutUs from '@/components/sections/HomePage/HomeAboutUs'
import OurTreatments from '@/components/sections/HomePage/OurTreatments'
import Review from '@/components/sections/HomePage/Review'
import React from 'react'

export default function page() {
  return (
    <div>
        <Banner />
        <OurTreatments />
        <HomeAboutUs />
        <Review />
    </div>
  )
}
