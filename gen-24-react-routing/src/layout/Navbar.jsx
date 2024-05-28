import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCartShopping,
  faUser,
  faX,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import categories from "../data/categories";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBugerMenu, setShowBurgerMenu] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBugerMenu);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-[30px]">
        <div className="flex items-center">
          <Link to="/">
          <img
            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
            alt="Logo"
          />
          </Link>
        </div>
        <div
          className={`menu absolute left-0 bg-white md:static flex transition-all ease-in-out duration-75 ${
            showBugerMenu
              ? showDropdown
                ? "top-[24%] justify-center  rounded-3xl min-h-[80vh] w-full items-start"
                : "top-[24%] justify-center items-center rounded-3xl min-h-[30vh] w-full"
              : "top-[-100%]"
          } `}
        >
          <ul className="space-x-8 transition ease-in-out duration-75 md:flex">
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className={`font-semibold hover:underline focus:outline-none transition-all ease-in-out space-x-2`}
              >
                <span>Category</span>
                <span>
                  {showDropdown ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </span>
              </button>
              {showDropdown && (
                // ---CategoriesMenu
                <div
                  className={`absolute mt-2 w-[800px] bg-white border border-gray-200 shadow-lg rounded-3xl ${
                    showBugerMenu ? "-translate-x-56" : "transform-none"
                  }`}
                >
                  <div className="p-4 h-1/2">
                    <h2 className="text-xl font-semibold mb-4">
                      Popular Categories
                    </h2>
                    <div className="grid grid-cols-2 gap-x-1 gap-y-3">
                      {categories.map((category) => (
                        <div
                          key={category.name}
                          className={`${
                            showBugerMenu ? "w-[250px]" : "w-[350px]"
                          } flex w-[350px] items-start space-x-4 px-4 pt-3 border rounded-lg bg-gray-100 cursor-pointer`}
                        >
                          <img
                            src={category.imgSrc}
                            alt={category.name}
                            className="h-16 object-cover"
                          />
                          <div className="h-[20px]">
                            <h3 className="text-base font-bold hover:text-sky-700 transition-all">
                              {category.name}
                            </h3>
                            <p className="text-sm">
                              {category.items} Item Available
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
            <a href="">
              <li
                className={`font-semibold hover:text-gray-500 ${
                  showBugerMenu
                    ? showDropdown
                      ? "translate-y-[50vh]"
                      : ""
                    : ""
                }`}
              >
                Deals
              </li>
            </a>
            <a href="">
              <li
                className={`font-semibold hover:text-gray-500 ${
                  showBugerMenu
                    ? showDropdown
                      ? "translate-y-[50vh]"
                      : ""
                    : ""
                }`}
              >
                What's New
              </li>
            </a>
            <a href="">
              <li
                className={`font-semibold hover:text-gray-500 ${
                  showBugerMenu
                    ? showDropdown
                      ? "translate-y-[50vh]"
                      : ""
                    : ""
                }`}
              >
                Delivery
              </li>
            </a>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Product"
            className="vorder p-2 rounded-full"
          />
          <span className="cursor-pointer font-semibold">
            <FontAwesomeIcon icon={faUser} />
            Account
          </span>
          <span className="cursor-pointer font-semibold">
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </span>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleBurgerMenu} className="focus:outline-none">
            {showBugerMenu ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
