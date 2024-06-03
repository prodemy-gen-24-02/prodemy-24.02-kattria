import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema";

const ProductForm = ({ onSubmit, product, sideBar }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      description: "",
      price: " ",
      image: " ",
      color: [" "],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "color",
  });

  useEffect(() => {
    if (product) {
      reset({
        ...product,
      });
    } else {
      reset({
        name: "",
        description: "",
        price: " ",
        image: " ",
        color: [" "],
      });
    }
  }, [product, reset]);
  // const handleAddColor = () => {
  //   setColor({
  //     ...color,
  //     [colorName]: colorUrl,
  //   });
  //   setColorName("");
  //   setColorUrl("");
  // };

  // const handleRemoveColor = (colorKey) => {
  //   const newColors = { ...color };
  //   delete newColors[colorKey];
  //   setColor(newColors);
  // };

  // const handleFormSubmit = (data) => {
  //   const formattedData = {
  //     ...data,
  //     color: data.color.reduce((acc, { colorName, colorUrl }) => {
  //       acc[colorName] = colorUrl;
  //       return acc;
  //     }, {}),
  //   };
  //   onSubmit(formattedData);
  //       name,
  //       description,
  //       price: priceValue,
  //       image,
  //       color,
  //     });
  //   setName("");
  //   setDesc("");
  //   setPrice("");
  //   setImage("");
  //   setColor({});
  //};
  // const handlePriceChange = (e) => {
  //   const value = e.target.value;
  //   setPrice(value === "" ? "" : parseFloat(value));
  // };

  return (
    <form
      // onSubmit={handleSubmit(handleFormSubmit)}
       className={`${sideBar ? "ml-72" : "mx-10"} mx-5 my-24 space-y-4 px-4`}
    >
      <div>
        <label className="block">Name</label>
        <input
          {...register("name")}
          className="w-full p-2 border"
          placeholder="Product Name"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div>
        <label className="block">Descriptrion</label>
        <textarea
          {...register("description")}
          className="w-full p-2 border"
          placeholder="Product Description"
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </div>
      <div>
        <label className="block">Price</label>
        <input
          type="number"
          {...register("price")}
          className="w-full p-2 border"
          placeholder="Product Price"
        />
        {errors.price && (
          <span className="text-red-500">{errors.price.message}</span>
        )}
      </div>
      <div>
        <label className="block">Image</label>
        <input
          {...register("image")}
          className="w-full p-2 border"
          placeholder="Product Image URL"
        />
        {errors.image && (
          <span className="text-red-500">{errors.image.message}</span>
        )}
      </div>
      <div>
        <label className="block">Color</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center">
            <input
              {...register(`colors.${index}`)}
              className="w-1/3 p-2 border mr-2"
              placeholder="name:#hex"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
            {errors.color?.[index] && (
              <span className="text-red-500">
                {errors.color[index]?.message}
              </span>
            )}
          </div>
        ))}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => append(" ")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Add Color
          </button>
        </div>
      </div>
      <button type="submit" className="px-4 py-2 bg-green-900 text-white">
        {product ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;
