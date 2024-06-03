import React, { useState } from "react";
import SideBar from "../../layout/Admin/SideBar";
import Navbar from "../../layout/Admin/NavbarAdmin";
import ProductForm from "./ProductForm";

const DashboardForm = () => {
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