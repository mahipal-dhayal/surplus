"use client";

import React from "react";

const products = [
  {
    name: "ENVIRON SURFACE DISINFECTAN...",
    price: "₹435.67",
    image: "/Home/HD23.jpg",
  },
  {
    name: "ULINE CABLE SEALS (1/16*12)",
    price: "₹256.78",
    image: "/Home/HD92.jpg",
    quickView: true,
  },
  {
    name: "RIDGID STRAP WRENCH",
    price: "₹2,054.24",
    image: "/Home/HD422.png",
  },
  {
    name: "ANSELL EDGE HIGH QUALITY CE ...",
    price: "₹427.97",
    image: "/Home/HD434.jpg",
  },
];

const BestSellingProducts = () => {
  return (
    <>
    <div className="bg-white px-4 md:px-12 py-8 relative ml-3">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black">BEST SELLING PRODUCTS</h2>
        <button className="bg-orange-500 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded">View All</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded shadow-sm p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 object-contain mb-4"
            />

            {product.quickView && (
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded">
                Quick View
              </span>
            )}

            <p className="text-sm font-semibold text-gray-800">
              {product.name}
            </p>

            <div className="flex justify-center mt-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gray-400 text-xs">★</span>
              ))}
            </div>

            <p className="text-black font-bold text-base">{product.price}</p>

            <span className="absolute top-3 right-3 text-black text-xl">♡</span>
          </div>
        ))}
      </div>
      </div>
            <div className=" flex space-x-4 ml-5 mr-5">
                  <img src="/Home/1739984612_02192025130332_banner.png" alt="" className=" w-150 h-60 ml-8" />
                  <img src="/Home/9024548476.png" alt="" className="w-150  mr-5" />
            </div>

            <div className="flex justify-center mt-2 ml-14 mr-14">
                 <img src="/Home/1740062464_02202025104104_banner.png" alt="" className="w-full h-100 " />
            </div>
    </>
  );
};

export default BestSellingProducts;
