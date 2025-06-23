import React from 'react'
import { FaUser, FaHeart, FaShoppingCart, FaSearch,FaPhone } from "react-icons/fa";
import { FaChevronDown } from 'react-icons/fa';
 const navItems = [
    "HOME",
    "Shop For",
    "Int’l Shopping",
    "Vendors By County/Region",
    "Malls",
    "China GT",
    "Community Market",
    "Construction Surplus",
    "Manufacturers"
  ];

  const dropdownItems = ["Shop For", "Vendors By County/Region", "Malls", "China GT", "Community Market", "Construction Surplus"];
const Header = () => {
  return (
    <>
    <div className='fixed top w-full bg-white shadow z-1 '>
    <nav>
        <div className="main mt-3 ">
            <div className="top flex items-center  bg-#ffffff space-x-7">
                <p className='text-xs font-bold pl-15 pr-7'>Welcome to Surplus, your one-stop shop for buying your favorite items!</p>
                <select  className="border rounded  px-2 py-0.5">
                    
                    <option value="English"> English</option> 
                    <option value="Hindi">Hindi</option>    
               </select>
               <select className='border rounded px-2 py-0.5'>
                    <option>INR</option>
               </select>
               <button className='font-12px poppins  border rounded px-2 py-1 border-none bg-amber-300 '>Become a Seller</button>
                 <div className="w-px h-6 bg-gray-400"></div>
               <div className='pr-15 text-xs '>
                <span className='flex items-center gap-1'>
                    <FaPhone className='rotate-90'/>
                    Helpline:{""}
                    <a href="tel:+91 9024548476 " className='text-blue-300'>+91 9024548476</a>                    
                    <span className="w-px h-4 bg-gray-700 "></span>
                    <a href='tel:+91 9166214703' className='text-blue-300'> +91 9166214703</a>
                </span>
               </div>
            </div>
            <div className="mid"></div>
            <div className="bottom"></div>
        </div>
    </nav>
     <hr className="border-t border-gray-200 my-2" />             

    {/* mid nav */}

     <header className="flex items-center justify-between pl-15 pr-15 pb-5 pt-3  bg-white">    
      <div className="flex items-center space-x-4">
        <img src="/sur.logo.png" alt="SURPLUS-GY" className="h-10" />
      </div>

     
      <div className="flex items-center border border-orange-200 rounded">
        <button className="px-4 py-2 border-r border-orange-200 text-black font-medium flex items-center gap-1">
          Products <span className="text-xs">▼</span>
        </button>
        <div className="flex items-center px-4 py-2 bg-orange-50">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="One Searchbar"
            className="bg-orange-50 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6 text-sm">
        <div className="flex items-center space-x-1 cursor-pointer text-blue-900">
          <FaUser />
          <span>Login /Register</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer text-blue-900">
          <FaHeart />
          <span>Wishlist</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer text-blue-900">
          <FaShoppingCart />
          <span>Cart (0)</span>
        </div>
      </div>
    </header>

    {/* bottom bar */}
     <nav className="bg-[#003366] text-white">
      <ul className="flex flex-wrap items-center justify-start space-x-6 px-4 py-3 ml-11 text-xs font-medium">
        {navItems.map((item) => (
          <li key={item} className="flex items-center space-x-1 cursor-pointer hover:underline">
            <span>{item}</span>
            {dropdownItems.includes(item) && <FaChevronDown className="text-xs mt-[1px]" />}
          </li>
        ))}
      </ul>
    </nav> 
    </div>  
    </>
  )
}

export default Header