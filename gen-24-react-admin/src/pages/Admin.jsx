import React from "react";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import ProductTable from "../components/ProductTable";
import Footer from "../layout/Footer";
import useSWR from "swr";
import ProductForm from "../components/ProductForm";
import { createProduct } from "../components/CrudService";
import { UseSWR } from "../components/UseSWR";
import Dashboard from "../components/DashboardProduct";
import DashboardProduct from "../components/DashboardProduct";
import DashboardCategory from "../components/DashboardCategory";

const Admin = () => {
   const fetcher = async()=>{
     return await getProducts();
   }
   const{mutate} = useSWR("/products",fetcher)
  //const {mutate} = UseSWR();
   const handleCreate = async (product)=>{
     await createProduct(product);
     mutate();
   }
  return (
    <div>
      {/* <Navbar/>
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <ProductTable /> */}
       <DashboardProduct/> 
   
    </div>
  );
};
export default Admin;
