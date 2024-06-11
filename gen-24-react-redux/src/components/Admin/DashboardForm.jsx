import React, { useState } from "react";
import SideBar from "../../layout/Admin/SideBar";
import Navbar from "../../layout/Admin/NavbarAdmin";
import ProductForm from "./Product/ProductForm";

const DashboardForm = () => {
    // const [currentProduct, setCurrentProduct] = useState(null);
    // const handleSubmit = () => {
    //   console.log('Form submitted');
    //   // Tambahkan logika tambahan di sini jika diperlukan
    // };
    // const clearCurrentProduct = () => {
    //   setCurrentProduct(null);
    // };
    const [showSidebar, setSidebar] = useState(false);
    return (
        <div>
            <SideBar
                sideBar={showSidebar}
                toggleBurgerMenu={() => setSidebar(!showSidebar)}
            />
            <Navbar toggleBurgerMenu={() => setSidebar(!showSidebar)} />
            <ProductForm sideBar={showSidebar} />
        </div>
    );
};
export default DashboardForm;
