import React from "react";
import Button from "./Button";
//import {IconStarFilled} from '@tabler/icons';

const ProductCard = ({product})=> {
    return (
        <>
        <div className="max-w-sm relative w-64 p-1.5 mb-10 rounded overflow-hidden shadow-lg bg-slate-200 transition-all hover:scale-90">
            <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
            <div className="heart-icon absolute top-4 right-4 px-2.5 py-1.5 bg-slate-300 rounded hover:text-red-500"></div>
            <div className="flex justify-between items-center">
                <div className="title font-bold text-xl py-1.5 px-5">{product.name}</div>
                <div className="price text-xl font-bold p-2.5">
                    <span className="text-xs -top-1 relative">$</span>
                    {product.price}
                    <span className="price-span text-xs -top-1 relative">.00</span>
                </div>
            </div>
            <div className="desc text-xs py-0 px-5 opacity-80">{product.description}</div>
            <div className="ratting px-5 text-amber-400 text-[35px]">
                {/* <div className="text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                 </div> */}
                 {/* <IconStarFilled> */}
            * * * * *
            </div>
            <div className="py-1 px-3">
                <Button>Add to Cart</Button>
            </div>
        </div>
        </>
    );
}
export default ProductCard;