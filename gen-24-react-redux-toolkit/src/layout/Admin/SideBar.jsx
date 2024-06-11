import {
  faCircleUser,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";

const SideBar = ({ sideBar, toggleBurgerMenu }) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-900 flex-col ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } transition-all shadow-neutral-600 z-10`}
      >
        <button
          onClick={toggleBurgerMenu}
          className="focus:outline-none absolute left-56 top-[25px] text-white"
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="  flex text-2xl h-20 p-5 justify-center pt-5 text-white font-semibold border-b">
          Admin Page
        </div>
        <div className="profile flex h-24 p-5 space-x-4 border-b">
          <div className="">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-gray-400 text-[50px]"
            />
          </div>
          <div className="text-white">
            <h3 className="font-semibold">Lala Lulu</h3>
            <p>Admin Shopcart</p>
          </div>
        </div>
        <div className="flex justify-center text-white font-semibold border-b">
          Admin Menu
        </div>
        <div className="flex-col p-4 space-y-3 text-white text-base">
          <div className="space-x-4">
            <FontAwesomeIcon icon={faAccusoft} />
            <Link to="/admin/categories">Category</Link>
          </div>
          <div className="space-x-4">
            <FontAwesomeIcon icon={faAccusoft} />
            <Link to="/admin/product">Product</Link>
          </div>
          <div className="space-x-4">
            <FontAwesomeIcon icon={faAccusoft} />
            <Link to="/admin/product">Member</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
