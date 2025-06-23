'use client';
import { title } from 'process';
import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/Home/img1.png',
  '/Home/img2.webp',
  '/Home/img3.webp',
];
const icons = [
  {src:'/Home/1.png', title:'Delivery', title1:'Anywhere'},
  {src:'/Home/2.png', title:'Support 24/7', title1: 'Online 24 hours'},
  {src:'/Home/3.png', title:'Free Return', title1: '365 a year'},
  {src:'/Home/4.png', title:'Payment Method', title1: 'Secure payment'},
  {src:'/Home/5.png', title:'Big Saving', title1: 'Weekend Sales'}
];
const AutoCarousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const next = () => {
      setIndex((prev) => (prev + 1) % images.length);
    };

    timeoutRef.current = setInterval(next, 5000); 

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  return (
    <>
    <div className="w-full flex justify-center overflow-hidden pt-43">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${images.length * 100}%`
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: '100%', height: '300px' }}
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="icon flex justify-center items-center mt-4 gap-35 border-gray-300 border-1 w-250 rounded ml-30 pt-4 pb-4">
  {icons.map((src, i) => (
    <div
      key={i}
      className="flex-shrink-0 text-center"
      style={{ width: '70px' }}
    >
      <img
        src={src.src}
        alt={`icon-${i}`}
        className="w-full h-[60px] object-contain mx-auto"
      />
      <p className='text-2xs mt-1 text-black-700 font-bold whitespace-nowrap'>{src.title}</p>
      <p className='text-xs text-gray-500 whitespace-nowrap'>{src.title1}</p>
    </div>
  ))}
</div>

    </>
  );
};

export default AutoCarousel;
