import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
    <nav>
        <div className="main mt-3 ">
            <div className="top flex items-center  bg-#ffffff space-x-7">
                <p className='text-2xs font-bold pl-15 pr-15'>Welcome to Surplus, your one-stop shop for buying your favorite items!</p>
                <select  className="border rounded  px-2 py-1">
                    
                    <option value="English"> English</option> 
                    <option value="Hindi">Hindi</option>    
               </select>
               <select className='border rounded px-3 py-0.5'>
                    <option>INR</option>
               </select>
               <button className='border rounded px-3 py-0.5 border-none bg-amber-300'>Become a Seller</button>
              

               <div className=' pr-15  '>
                <span>
                    Helpline:{""}
                    <a href="tel:+91 9024548476 " className='text-blue-300'>+91 9024548476</a>                    
                    <span className="w-px h-8 bg-gray-700"></span>
                    <a href='tel:+91 9166214703' className='text-blue-300'> +91 9166214703</a>
                </span>
               </div>
            </div>
            
            <hr className='border-t border-gray-300 mt-3 flex inline-i'/>
            <div className="mid mt-4 ml-15">
                 <div>
                  <img src="/1737020966.logo.png" alt="" />
                 </div>
                 <div className="searchBar ">
                    <input type="text" placeholder='Search for products, brands and more' />
                    <button>Search</button>
                 </div> 
            </div>
            <div className="bottom"></div>
        </div>
      </nav>
    </>
  );
};

export default Header;
