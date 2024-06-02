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
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

const Navbar = ({toggleBurgerMenu}) => {
  // const {data, error} = useSWR ('http://localhost:3000/categories', fetcher);

  // const [showDropdown, setShowDropdown] = useState(false);
  // const [showBugerMenu, setShowBurgerMenu] = useState(false);

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };
  // const toggleBurgerMenu = () => {
  //   setShowBurgerMenu(!showBugerMenu);
  // };

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <nav className=" bg-white shadow fixed top-0 w-full ">
      <div className="container mx-auto flex justify-between items-center py-4 px-[30px]">
        <div className=" ">
          <button onClick={toggleBurgerMenu} className="focus:outline-none">
            {/* {showBugerMenu ? (
              <FontAwesomeIcon icon={faX} className="translate-x-48" />
            ) : ( */}
              <FontAwesomeIcon icon={faBars} />
            {/* )} */}
          </button>
        </div>

        <div className="flex items-center">
          <Link to="/home">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="">
          <Link to="/admin">
            <span className="cursor-pointer font-semibold">
              <FontAwesomeIcon icon={faUser} />
              Admin
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
