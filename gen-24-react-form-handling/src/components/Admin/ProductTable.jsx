import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { deleteProduct, updateProduct } from "./CrudService";
import useSWR from "swr";
import { Link } from "react-router-dom";

const ProductTable = ({ sideBar }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading, isError, mutate } = useSWR(
    "http://localhost:3001/products",
    fetcher
  );
  // const{products, isLoading, isError, mutate} = UseSWR();
  const [editingProduct, setEditing] = useState(null);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    mutate(); // Refresh data
  };

  const handleEdit = (product) => {
    setEditing(product);
  };

  const handleUpdate = async (updatedProduct) => {
    await updateProduct(editingProduct.id, updatedProduct);
    setEditing(null);
    mutate(); // Refresh data
  };
  const handleCreate = async (product) => {
    await createProduct(product);
    mutate();
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
                  onClick={() => handleEdit(product)}
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
      <Link to="/admin/form-product">
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
