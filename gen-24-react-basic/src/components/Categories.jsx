import React from "react";
import categories from "../data/categories";

const Categories = () => {
    return (
        <div className="p-4 w-[600px] h-1/2 ">
            <h2 className="text-xl font-semibold mb-4">Papular Categories</h2>
            <div className="grid grid-cols-2 gap-x-60 gap-y-3">
                {categories.map ((category)=>(
                    <div key={category.name} className="flex w-[350px] items-start space-x-4 px-4 pt-3 border rounded-lg bg-gray-100">
                        <img src={category.imgSrc} alt={category.name} className="h-16 object-cover" />
                        <div className="h-[20px]">
                            <h3 className="text-base font-bold">{category.name}</h3>
                            <p className="text-sm">{category.items} Items Available </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;