import React, { useState } from "react";
import SideBar from "../../layout/Admin/SideBar";
import Navbar from "../../layout/Admin/NavbarAdmin";
import CategoryTable from "./CategoryTable";

const DashboardCategory = () => {
  const [showSidebar, setSidebar] = useState(false);
  return (
    <div>
      <SideBar
        sideBar={showSidebar}
        toggleBurgerMenu={() => setSidebar(!showSidebar)}
      />
      <Navbar toggleBurgerMenu={() => setSidebar(!showSidebar)} />
      <CategoryTable sideBar={showSidebar} />
    </div>
  );
};
export default DashboardCategory;
