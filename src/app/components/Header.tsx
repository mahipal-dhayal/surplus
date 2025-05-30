import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="bg-white w-full shadow">
        <div className="main p-3">

         
          <div className="block md:hidden mb-3"> 
            <div className="searchBar flex items-center gap-2">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="border rounded px-4 py-2 w-full"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Search
              </button>
            </div>
          </div>
          
          <div className="top flex flex-wrap items-center justify-between gap-3 text-sm">
            <p className="text-xs font-bold w-full md:w-auto hidden md:block pl-7"> 
              Welcome to Surplus, your one-stop shop for buying your favorite items!
            </p>

            <div className="flex flex-wrap gap-2 items-center">
              <select className="border rounded px-3 py-1">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>

              <select className="border rounded px-3 py-1">
                <option>INR</option>
              </select>

              <button className="border rounded px-3 py-1 bg-amber-300">
                Become a Seller
              </button>
            </div>

            <div className="text-xs text-right w-full md:w-auto hidden md:block pr-7"> 
              <span>
                Helpline:{" "}
                <a href="tel:+919024548476" className="text-blue-500">+91 9024548476</a> |{" "}
                <a href="tel:+919166214703" className="text-blue-500">+91 9166214703</a>
              </span>
            </div>
          </div>

          <hr className="border-t border-gray-300 my-3" />
         
          <div className="mid flex-col md:flex-row flex items-center justify-between gap-4 pl-7">
            <div>
              <img src="/1737020966.logo.png" alt="Logo" className="h-12 w-auto " />
            </div>           
            <div className="searchBar hidden md:flex">   
              <select className='border rounded px-3 py-2'> 
                <option value="All Categories">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
              </select>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="border rounded px-3 py-2 w-full md:w-96 "
              /> 
              <div>
                      <button>Login/Register</button>
                </div>             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
