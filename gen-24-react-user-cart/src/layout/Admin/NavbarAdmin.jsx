import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../../components/Logout";

//const fetcher = (url) => fetch(url).then((res) => res.json());

const Navbar = ({ toggleBurgerMenu }) => {
    const { user } = useSelector((state) => state.auth);

    if (user?.role !== "admin") {
        return <Navigate to="/login" />;
    }
    return (
        <nav className=" bg-white shadow fixed top-0 w-full ">
            <div className="container mx-auto flex justify-between items-center py-4 px-[30px]">
                <div className=" ">
                    <button
                        onClick={toggleBurgerMenu}
                        className="focus:outline-none"
                    >
                        <FontAwesomeIcon icon={faBars} />
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
                    {/* <Link to="/admin"> */}
                    {user ? <Logout /> : <Link to="/login">Login</Link>}
                    {/* </Link> */}
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
