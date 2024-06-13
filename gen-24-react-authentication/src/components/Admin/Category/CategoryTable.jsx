import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { getCategories} from "../CrudService";

const CategoryTable = ({ sideBar }) => {
  const fetcher =async()=> {
    const res = await getCategories();
    return res;
  }
  const{data, isLoading, isError, mutate} = useSWR('/categories', fetcher)

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteProduct(id);
    mutate(); // Refresh data
  };

  const handleEdit = (id) => {
    navigate(`/admin/form-category/edit/${id}`)
  };


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading Category</div>;

  return (
    <div className="mt-24">
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
            <th className="py-2 px-4 border">Items</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category) => (
            <tr key={category.id} className="">
              <td className="py-2 px-4 border">{category.id}</td>
              <td className="py-2 px-4 border">{category.name}</td>
              <td className="py-2 px-4 border">{category.items}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(category.id)}
                  className="px-2 py-1 bg-green-900 text-white mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="px-2 py-1 bg-green-900 text-white mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/form-category/new">
        <button
          className={`${
            sideBar ? "ml-72" : "mx-10"
          } text-base my-5 rounded-xl bg-green-900 px-4 py-1 text-white`}
        >
          + Add category
        </button>
      </Link>
    </div>
  )
};

export default CategoryTable;
