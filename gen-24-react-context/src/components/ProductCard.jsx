import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    // const { addToCart } = useCart();
    // const handleAddToCart = () => {
    //     addToCart({
    //         id: product.id,
    //         name: product.name,
    //         price: product.price,
    //         image: product.image,
    //         color: product.color[0],
    //         quantity: parseInt(1),
    //     });
    //     window.alert("Produk berhasil di tambahkan!");
    //     // setAlert(true);
    //     // setTimeout(()=> setAlert(false),3000)
    // };

    const rating = (rating) => {
        return (
            <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                        icon={faStar}
                        key={index}
                        className={
                            index < rating
                                ? "text-yellow-400 outline-[2px]"
                                : "text-gray-600 outline-[20px]"
                        }
                    />
                ))}
            </div>
        );
    };
    return (
        <Link to={`/detail/${product.id}`}>
            <div className="max-w-sm relative  w-64 p-1.5 mb-10 rounded overflow-hidden transition-all hover:scale-90 ">
                <div className="bg-slate-100 h-600 object-contain">
                    <img
                        src={import.meta.env.BASE_URL + product.image}
                        alt={product.name}
                    />
                </div>

                <div className="absolute top-4 right-4 px-2.5 bg-slate-100 rounded-full hover:text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="flex justify-between items-center">
                    <div className="font-bold text-xl py-1.5 px-5">
                        {product.name}
                    </div>
                    <div className="text-xs font-bold p-2.5">
                        <span className="text-xs -top-1 relative">$</span>
                        {product.price}
                        <span className="text-xs -top-1 relative">.00</span>
                    </div>
                </div>
                <div className="text-xs py-0 px-5 opacity-80 h-10">
                    {product.description}
                </div>
                <div className="flex py-3 px-5">
                    {rating(product.rating)}
                    <span className="ml-2 text-gray-500">
                        ({product.reviews})
                    </span>
                </div>
                <div className="py-1 px-3">
                    <Button >Add to Cart</Button>
                    {/* <Button onClick={() => navigate("/detail")}>View Detail</Button> */}
                    {/* <Link to={`/detail/${product.id}`}>
        <Button onClick={() => navigate("/detail")}>View Detail</Button>
        </Link> */}
                </div>
            </div>
        </Link>
    );
};
export default ProductCard;
