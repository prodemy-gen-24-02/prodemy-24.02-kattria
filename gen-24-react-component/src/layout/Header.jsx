import React from "react";

const Header = () => {
    return (
        <>
        <header className="bg-[beige]">
            <div className="bg-[beige] px-[35px]">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />
                    </div>
                    <nav className="flex space-x-4">
                        <a href="#category" className="text-slate-800 font-semibold hover:text-slate-500 transition-all">Categories</a>
                        <a href="#deals" className="text-slate-800 font-semibold  hover:text-slate-500 transition-all">Deals</a>
                        <a href="#new" className="text-slate-800 font-semibold  hover:text-slate-500 transition-all">What's New</a>
                        <a href="#delivery" className="text-slate-800 font-semibold  hover:text-slate-500 transition-all">Delivery</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <input type="text" placeholder="Search Product" className="px-2 py-1 border rounded-full w-[250px]" />
                        <a href="#account" className="text-slate-800 font-semibold">Account</a>
                        <a href="#delivery" className="text-slate-800 font-semibold">Cart</a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
};

export default Header;
