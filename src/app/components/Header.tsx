import React from 'react'

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
        </div>
    </nav>
    </>
  )
}

export default Header