import React from "react";
import { useState } from "react";
import Categories from "../components/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const[showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto flex justify-between items-center py-4 px-[30px]">
                <div className="flex items-center">
                     <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />
                </div>
                <div className="menu">
                <ul className="flex space-x-8">
                    <li className="relative">
                        <button onClick={toggleDropdown} className="font-semibold hover:underline focus:outline-none">
                            Category
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                        {showDropdown && (
                            <div className="absolute left-0 mt-2 w-[800px] bg-white border border-gray-200 shadow-lg rounded-lg">
                                <Categories />
                            </div>
                        )}
                    </li>
                    <a href=""><li className="font-semibold hover:text-gray-500">Deals</li></a>
                    <a href=""><li className="font-semibold hover:text-gray-500">What's New</li></a>
                    <a href=""><li className="font-semibold hover:text-gray-500">Delivery</li></a>
                </ul>
                </div>
                
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search Product" className="border p-2 rounded-full" />
                    <span className="cursor-pointer font-semibold">
                        <FontAwesomeIcon icon={faUser}/>
                        Account
                    </span>
                    <span className="cursor-pointer font-semibold">
                    <FontAwesomeIcon icon={faCartShopping}/>
                    Cart
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;