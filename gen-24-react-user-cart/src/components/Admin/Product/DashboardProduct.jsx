import React, { useState } from "react";
import SideBar from "../../../layout/Admin/SideBar";
import Navbar from "../../../layout/Admin/NavbarAdmin";
import ProductTable from "./ProductTable";

const DashboardProduct = () => {
    const [showSidebar, setSidebar] = useState(false);

    return (
        <div className="">
            <SideBar
                sideBar={showSidebar}
                toggleBurgerMenu={() => setSidebar(!showSidebar)}
            />

            <Navbar toggleBurgerMenu={() => setSidebar(!showSidebar)} />

            <ProductTable sideBar={showSidebar} />
        </div>
    );
};

export default DashboardProduct;
