import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleQuestion,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Credit from "../components/Credit";

const Footer = () => {
  return (   
    
    <footer className="py-[20px] px-[50px] shadow">
      <div className="container flex justify-between items-center">
        <div className="flex space-x-4 font-semibold">
          <a href="" className="space-x-2 hover:text-red-600">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-[24px] text-red-400"
            />
            <span>Become Seller</span>
          </a>
          <a href="" className="space-x-2 hover:text-red-600">
            <FontAwesomeIcon
              icon={faGift}
              className="text-[24px] text-red-400"
            />
            <span>Gift Cards</span>
          </a>
          <a href="" className="space-x-2 hover:text-red-600">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="text-[24px] text-red-400"
            />
            <span>Help Center</span>
          </a>
        </div>
        <div className="center list-none flex space-x-10 font-semibold">
          <li className="hover:text-red-600">Term of Service</li>
          <li className="hover:text-red-600">Privacy & Policy</li>
        </div>
        <div className="right">
          All Right reserved by Musemind ui/ux design agency | 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
