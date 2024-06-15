import React from "react";
import DashboardProduct from "../components/Admin/Product/DashboardProduct";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const {user} = useSelector((state)=>state.auth);
  if(user?.role !=='admin'){
    return <Navigate to="/login"/>
  }
  return (
    <div>
      <DashboardProduct />
      {/* <Test/> */}
    </div>
  );
};
export default Admin;
