import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { deleteProduct, getProducts, updateProduct } from "./CrudService";
import useSWR from "swr";
import { Link, useNavigate } from "react-router-dom";

const ProductTable = ({ sideBar }) => {
  const fetcher = async () =>{
    const res = await getProducts();
    return res;
  } 
  const { data, isLoading, isError, mutate } = useSWR(
    '/products',
       fetcher
     );
  const navigate = useNavigate();
  
  const handleDelete = async (id) => {
    await deleteProduct(id);
    mutate(); // Refresh data
  };

  const handleEdit = (id) => {
    navigate(`/admin/form-product/edit/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <div className="mt-24">
      {/* <ProductForm onSubmit={handleUpdate||handleCreate} product={editingProduct}/> */}
      <h3
        className={`${sideBar ? "ml-72" : "mx-10"} text-xl font-semibold my-5`}
      >
        Dashboard
      </h3>
      <table
        className={` bg-white border ${
          sideBar ? "w-[990px] ml-72" : "w-[1200px] mx-10"
        }`}
      >
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id} className="">
              <td className="py-2 px-4 border">{product.id}</td>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">{product.description}</td>
              <td className="py-2 px-4 border">{product.price}</td>
              <td className="py-2 px-4 border">
                <img
                  src={import.meta.env.BASE_URL + product.image}
                  alt=""
                  className="w-14"
                />
              </td>
              <td className="py-2 px-4 border-b">

                <button
                  onClick={() => handleEdit(product.id)}
                  className="px-2 py-1 bg-green-900 text-white mr-2"
                >
                  Edit
                </button>
                
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-2 py-1 bg-green-900 text-white mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/form-product/new">
        <button
          className={`${
            sideBar ? "ml-72" : "mx-10"
          } text-base my-5 rounded-xl bg-green-900 px-4 py-1 text-white`}
        >
          + Add Product
        </button>
      </Link>
    </div>
  );
};
export default ProductTable;
