"use client";
import React, { useEffect, useState } from 'react';
import AutoCarousel from './component/home/AutoCarousel';
import PopularCategory from './component/home/PopularCategory';
import BestSellingProducts from './component/home/BestSellingProducts';
import { homeApi, homeGetApi } from './apiMethods/Service';

// import NewArrivals from './component/home/NewArrivals';

const page = () => {
const [homeData, setHomeData] = useState([])

  useEffect(() => {
    console.log("Page loaded successfully");
    Homeapi();
  }, []);


 const Homeapi = async () => {
try {
    const response = await homeGetApi()
    console.log("Home API response:", response);
    setHomeData(response.data);
  } catch (error) {
    console.error("Error fetching home API:", error);
 }} 





  return (
    <>
      <AutoCarousel />
      <PopularCategory />
      <BestSellingProducts />
      {/* <NewArrivals/> */}
    </>
  );
}

export default page