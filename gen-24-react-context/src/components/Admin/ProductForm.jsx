import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema";
import { createProduct, getProductById, updateProduct } from "./CrudService";

const ProductForm = ({sideBar}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name:"",
            description:"",
            price:"",
            image:"",
            color: [{ colorName:"", colorHex:"" }],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "color",
    });

    useEffect(() => {
        if (id) {
          //console.log(getProductById(id))
            getProductById(id).then((product) => {
                reset({
                    ...product,
                    color: product.color.map((color) => {
                        const [colorName, colorHex] = color.split(":");
                        return { colorName, colorHex };
                    }),
                });
            });
        } else {
            reset({
                name:"",
                description:"",
                price:"",
                image:"",
                color: [{ colorName:"", colorHex:"" }],
            });
        }
    }, [id]);
    

    // const onSubmit = data => {
    //  console.log(data);
    //  if(product){
    //    clearProduct();
    //  }else{
    //    reset();
    //  }
    //  onFormSubmit();
    // }

    const handleFormSubmit = (data) => {
        //console.log(data);
        const formattedData = {
            ...data,
            color: data.color.map(
                ({ colorName, colorHex }) => `${colorName}:${colorHex}`
            ),
            //        return acc;
            //      }, {}),
        };
        // onSubmit(formattedData);
        //     name,
        //     description,
        //     price: priceValue,
        //  image,
        //  color,
        //     });
        //   setName("");
        //   setDesc("");
        //   setPrice("");
        //   setImage("");
        //   setColor({});
        if (id) {
            updateProduct(id, formattedData).then(() => {
                navigate("/admin/product");
            });
        } else {
            createProduct(formattedData).then(() => {
                navigate("/admin/product");
            });
        }
    };

    // const handleUpdate = async (updatedProduct) => {
    //     await updateProduct(editingProduct.id, updatedProduct);
    //     setEditing(null);
    //     mutate(); // Refresh data
    // };
    // const handleCreate = async (product) => {
    //     await createProduct(product);
    //     mutate();
    // };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className={`${
                sideBar ? "ml-72" : "mx-10"
            } mx-5 my-24 space-y-4 px-4`}
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
                    <span className="text-red-500">
                        {errors.description.message}
                    </span>
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
                            {...register(`color.${index}.colorName`)}
                            className="w-1/3 p-2 border mr-2"
                            placeholder="Color Name"
                        />
                        {errors.color && errors.color[index]?.colorName && (
                            <span className="text-red-500">
                                {errors.color[index].colorName.message}
                            </span>
                        )}
                        <input
                            {...register(`color.${index}.colorHex`)}
                            className="w-1/3 p-2 border mr-2"
                            placeholder="Color Hex"
                        />
                        {errors.color && errors.color[index]?.colorHex && (
                            <span className="text-red-500">
                                {errors.color[index].colorHex.message}
                            </span>
                        )}
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Remove
                        </button>
                        {/* {errors.color?.[index] && (
                            <span className="text-red-500">
                                {errors.color[index]?.message}
                            </span>
                        )} */}
                    </div>
                ))}
                <div className="mt-2 ">
                    <button
                        type="button"
                        onClick={() => append({ colorName: "", colorHex: "" })}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                        Add Color
                    </button>
                </div>
            </div>
            <button type="submit" className="px-4 py-2 bg-green-900 text-white">
                {id ? "Update" : "Create"}
            </button>
        </form>
    );
};

export default ProductForm;
