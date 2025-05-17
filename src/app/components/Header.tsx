import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <nav>
        {/* <div className="main mt-3 ">
            <div className="top flex items-center  bg-white space-x-7">
4                <p className='text-xs font-bold pl-15 pr-15'>Welcome to Surplus, your one-stop shop for buying your favorite items!</p>
                <select  className="border rounded  px-2 py-1">
                    
                    <option value="English"> English</option> 
                    <option value="Hindi">Hindi</option>    
               </select>
               <select className='border rounded px-2 py-1'>
                    <option>INR</option>
               </select>
               <button className='border rounded px-2 py-1 border-none bg-amber-300'>Become a Seller</button>
              

               <div className=' pr-15 '>
                <span>
                    Helpline:{""}
                    <a href="tel:+91 9024548476 ">+91 9024548476</a>                    
                    <span className="w-px h-8 bg-gray-700"></span>
                    <a href='tel:+91 9166214703'> +91 9166214703</a>
                </span>
               </div>
            </div>
            <div className="mid"></div>
            <div className="bottom"></div>
        </div> */}
        <div>
          <div className="flex items-center justify-between">
            <div className="">
              <img
                src="https://surplusgy.com/assets/photo/1737020966.logo.png"
                alt="Error"
                className="w-30"
              />
            </div>
            <div className="flex items-center space-x-4t">
              {" "}
              <select className="border rounded  px-2 py-1 m-2">
                <option value="English"> English</option>
                <option value="Hindi">Hindi</option>
              </select>
              <select className="border rounded px-2 py-1">
                <option>INR</option>
              </select>
              <IoSearchCircleSharp size={48} color="blue" />
              <IoMenu size={48} />
            </div>
          </div>
          <div>Middel part</div>
          <div>End part or nav menu</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
