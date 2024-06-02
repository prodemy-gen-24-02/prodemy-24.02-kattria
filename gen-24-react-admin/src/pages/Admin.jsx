import React from "react";
import useSWR from "swr";
import ProductForm from "../components/Admin/ProductForm";
import { createProduct } from "../components/Admin/CrudService";
import { UseSWR } from "../components/UseSWR";
import DashboardProduct from "../components/Admin/DashboardProduct";

const Admin = () => {
  const fetcher = async () => {
    return await getProducts();
  };
  const { mutate } = useSWR("/products", fetcher);
  //const {mutate} = UseSWR();
  const handleCreate = async (product) => {
    await createProduct(product);
    mutate();
  };
  return (
    <div>
      <DashboardProduct />
    </div>
  );
};
export default Admin;
