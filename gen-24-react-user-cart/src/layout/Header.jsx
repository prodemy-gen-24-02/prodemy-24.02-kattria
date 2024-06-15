import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-3 px-[30px]">
      <div className="container mx-auto flex justify-between items-center sm:flex-col md:flex-row lg:flex-row">
        <div className="flex text-[12px] space-x-1">
          <span>
            {" "}
            <FontAwesomeIcon icon={faPhone} />{" "}
          </span>
          <span>+001234567890</span>
        </div>
        <div className="text-[12px]">
          Get 50% Off on Selected Items | Shop Now
        </div>
        <div className="flex items-center space-x-4 text-[12px]">
          <span>Eng</span>
          <span>Location</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
