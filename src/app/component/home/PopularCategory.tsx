'use client';
import React from 'react';

const categories = [
  { name: 'Automotive', image: '/Home/1737536060_01222025045420_category_.png' },
  { name: 'Hardware', image: '/Home/1737536294_01222025045814_category_.png' },
  { name: 'Safety', image: '/Home/1737541704_01222025062824_category_.png' },
  { name: 'Foot Protection', image: '/Home/1737988599_01272025103639_category_.jpg' },
  { name: 'Hand Tools', image: '/Home/1738058592_01282025060312_category_.jpg' },
];

const PopularCategory = () => {
  return (
    <>
    <div className="bg-white px-4 md:px-12 py-8 ml-3">
      <h2 className="text-xl font-bold text-black mb-6">POPULAR <br className="md:hidden" /> CATEGORIES</h2>

      <div className="flex flex-wrap justify-center gap-18 ml-40">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center text-center w-24 md:w-28">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border shadow"
            />
            <p className="mt-2 text-sm font-semibold">{cat.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PopularCategory;
