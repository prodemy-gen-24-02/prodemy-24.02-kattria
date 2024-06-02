import React, { useState } from "react";
import SideBar from "../layout/SideBar";
import Navbar from "../layout/Navbar";
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
