import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { deleteProduct, updateProduct } from "./CrudService";
import { UseSWR } from "./UseSWR";
import useSWR from "swr";

const ProductTable = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading, isError, mutate } = useSWR("http://localhost:3000/products", fetcher);
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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <div>
       <ProductForm onSubmit={handleUpdate} product={editingProduct}/>
      <table className="min-w-full bg-white bordder">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Color</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.image}</td>
               {/* <td className="py-2 px-4 border-b">{product.color.join(", ")}</td> */}
               <td className="py-2 px-4 border-b">
                <button onClick={()=> handleEdit(product)}
                className="px-2 py-1 bg-green-900 text-white mr-2">
                    Edit
                </button>
                <button onClick={()=> handleDelete(product.id)}
                className="px-2 py-1 bg-green-900 text-white mr-2">
                    Delete
                </button>
            </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductTable;
