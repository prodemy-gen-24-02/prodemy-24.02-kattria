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
import CategoriesMenu from "../components/CategoriesMenu";

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
          <img
            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
            alt="Logo"
          />
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
                <div
                  className={`absolute mt-2 w-[800px] bg-white border border-gray-200 shadow-lg rounded-3xl ${
                    showBugerMenu ? "-translate-x-56" : "transform-none"
                  }`}
                >
                  <CategoriesMenu
                    className={`${showBugerMenu ? "w-[250px]" : "w-[350px]"}`}
                  />
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
