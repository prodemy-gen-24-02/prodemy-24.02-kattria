import React from "react";

const CategoriesCard = ({categories})=> {
    return(
        <div className="flex justify-center h-56 w-48 md:h-56 md:w-48 sm:h-80 sm:w-64 rounded-xl overflow-hidden bg-slate-200 transition space-x-1 ">
            <h3 className="absolute pt-5 z-10 center text-2xl font-bold object-center text-white">{categories.name}</h3>
            <img src={categories.bg} alt={categories.name} className="h-full w-full  m-0 hover:scale-125 transition-all z-0"/>
        </div>
    )

}
export default CategoriesCard;