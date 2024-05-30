import React from "react";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import ProductTable from "../components/ProductTable";
import Footer from "../layout/Footer";
import useSWR from "swr";
import ProductForm from "../components/ProductForm";
import { createProduct } from "../components/CrudService";
import { UseSWR } from "../components/UseSWR";

const Admin = () => {
   const fetcher = async()=>{
     return await getProducts();
   }
   const{mutate} = useSWR("/products",fetcher)
  //const {mutate} = UseSWR();
  // const handleCreate = async (product)=>{
  //   await createProduct(product);
  //   mutate();
  // }
  return (
    <div>
      <Header />
      <Navbar />
      <h1 className="text-2xl mb-4">Admin Page</h1>
      {/* <ProductForm onSubmit={handleCreate}/> */}
      <ProductTable />
      <Footer />
    </div>
  );
};
export default Admin;
