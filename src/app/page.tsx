import React from 'react'
import AutoCarousel from './component/home/AutoCarousel';
import PopularCategory from './component/home/PopularCategory';
import BestSellingProducts from './component/home/BestSellingProducts';
// import NewArrivals from './component/home/NewArrivals';

const page = () => {
  return (
    <>
    <AutoCarousel />
    <PopularCategory/>
    <BestSellingProducts/>
    {/* <NewArrivals/> */}
    </>
  )
}

export default page