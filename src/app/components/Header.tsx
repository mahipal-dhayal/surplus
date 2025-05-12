"use client";
import React, { useState } from "react";
import { FaSearch, FaList, FaUser, FaHeart, FaCartPlus } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { PiPhoneCallFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-center border-b gap-2 p-4">
        <p className="text-center text-sm">
          Welcome to Surplus-GY, your one-stop shop for buying your favorite
          items!
        </p>

        <span title="language slection">
          <Dropdown />
        </span>
        <span title="currency selection">
          <Dropdown />
        </span>
        <button className="bg-yellow-400 rounded-md">Become a seller</button>
        <div className="flex justify-center items-center ">
          <PiPhoneCallFill />
          <span>+91 9166214703</span>
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <img
          src="https://surplusgy.com/assets/photo/1737020966.logo.png"
          alt="LOGO"
        />
        <span title="prdousct seller Brands">
          <Dropdown />
        </span>

        <div className="flex gap-4">
          <button>
            <FaSearch /> <input type="text" placeholder="Search..." />
          </button>
          <button>
            <FaList />
          </button>
          <button>
            <FaUser /> Sign In
          </button>
          <button>
            <FaHeart /> Wishlist
          </button>
          <button>
            <FaCartPlus /> Cart
          </button>
        </div>
      </div>

      <nav>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
