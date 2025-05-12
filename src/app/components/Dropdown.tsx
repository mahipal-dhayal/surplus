'use client'
import React, { useState } from "react";
import { FaList,FaWindowClose   } from "react-icons/fa";

const Dropdown  = () => {
    const [isopen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isopen);
    };
    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 p-2 bg-gray-200 rounded-md"
            >

                {isopen ? <FaWindowClose /> : <span><FaList /></span>}
            </button>
            {isopen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <ul className="p-2">
                        <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>Item 1</li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>Item 2</li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>Item 3</li>
                    </ul>
                </div>
            )}
        </div>
    );

}

export default Dropdown;