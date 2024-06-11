import React from "react";
import useSWR from "swr";
import { createProduct } from "../components/Admin/CrudService";
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
      {/* <Test/> */}
    </div>
  );
};
export default Admin;
