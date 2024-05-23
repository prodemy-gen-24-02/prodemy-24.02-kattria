import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Credit = () => {
  return (
    <section className="contact py-6 px-[50px] bg-white shadow">
      <div className="contact-info items-start grid grid-cols-1 md:grid-cols-5">
        <div className="first-info">
          <img
            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
            alt="logo"
          />
          <p className="pt-5 text-sm pr-[10px]">
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit
            mollit.
          </p>
          <p className="pt-5 text-sm">Contact</p>
          <div className="social-icon">
            <a href="">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-gray-600 mr-5 text-xl transition-all hover:scale-125"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faTwitter}
                className=" text-gray-600 mr-5 text-xl transition-all hover:scale-125"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faInstagram}
                className=" text-gray-600 mr-5 text-xl transition-all hover:scale-125"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-gray-600 mr-5 text-xl transition-all hover:scale-125"
              />
            </a>
          </div>
        </div>

        <div className="second-info px-[20px]">
          <h4 className="font-bold text-lg mb-2.5 uppercase">Department</h4>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Fashion
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Education Product
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Frozen Food
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Beverages
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Organic Grocery
          </p>
        </div>

        <div className="thrid-info pl-[20px]">
          <h4 className="font-bold text-lg mb-2.5 uppercase">About us</h4>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            About shopcart
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Careers
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            News & Blog
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Help
          </p>
        </div>

        <div className="fourth-info pl-[20px]">
          <h4 className="font-bold text-lg mb-2.5 uppercase">Services</h4>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Gift Card
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Mobile App
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Shipping & Delivery
          </p>
        </div>

        <div className="five pl-[20px]">
          <h4 className="font-bold text-lg mb-2.5 uppercase">Help</h4>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Shopcart Help
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Returns
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Track orders
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Contact us
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Feedback
          </p>
          <p className="text-base capitalize mb-2.5 hover:text-red-400 transition-all">
            Security & Frau
          </p>
        </div>
      </div>
    </section>
  );
};

export default Credit;
