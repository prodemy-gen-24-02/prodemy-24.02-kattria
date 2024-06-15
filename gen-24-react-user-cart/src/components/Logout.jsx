import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/reducer/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <span className="cursor-pointer font-semibold">
                <FontAwesomeIcon icon={faUser} />
                <button
                onClick={toggleDropdown}
                className="py-2 px-2"
            >
                {user.name}
            </button>
            </span>
            
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    {user.role === "admin" && (
                        <Link
                            to="/admin"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={toggleDropdown}
                        >
                            Admin Dashboard
                        </Link>
                    )}
                    <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Logout;
