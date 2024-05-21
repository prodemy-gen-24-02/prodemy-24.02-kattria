import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Rating from "./Rating";

const ProductCard = ({product})=> {
    return (
        <>
        <div className="max-w-sm relative w-64 p-1.5 mb-10 rounded overflow-hidden shadow-lg bg-slate-200 transition-all hover:scale-90">
            <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
            <div className="heart-icon absolute top-4 right-4 px-2.5 py-1.5 bg-slate-100 rounded-full hover:text-red-500">
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="flex justify-between items-center">
                <div className="title font-bold text-xl py-1.5 px-5">{product.name}</div>
                <div className="price text-xl font-bold p-2.5">
                    <span className="text-xs -top-1 relative">$</span>
                    {product.price}
                    <span className="price-span text-xs -top-1 relative">.00</span>
                </div>
            </div>
            <div className="desc text-xs py-0 px-5 opacity-80">{product.description}</div>
            <div className="flex py-3 px-5">
                {Rating(product.rating)}
                <span className="ml-2 text-gray-600">({product.reviews})</span>
            </div>
            <div className="py-1 px-3">
                <Button>Add to Cart</Button>
            </div>
        </div>
        </>
    );
}
export default ProductCard;