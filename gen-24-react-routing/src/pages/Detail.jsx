import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faStar } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

import products from "../data/product";
import Button from "../components/Button";

import Layout from "../layout/Layout";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Detail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    // const [mainImage, setMainImage] = useState(product.image);

    const [selectedImage, setThumbnail] = useState(product.image[0]);
    const [selectedColor, setColor] = useState(product.color[0]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // const images = {
    //   green: "#065535",
    //   red: redImg,
    //   pink: pinkImg,
    //   black: blackImg,
    //   white: whiteImg,
    // };
    //  const handleThumbnail = (thumb) => {
    //    setThumbnail(thumb);
    //    setMainImage(thumb[0]);
    //  };

    const similarProduct = products.filter(
        (p) => p.category === product.category && p.id !== product.id
    );
    //console.log(similarProduct);

    const Rating = (rating) => {
        return (
            <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={
                            index < rating
                                ? "text-yellow-400 outline-[2px]"
                                : "text-gray-400 outline-[20px]"
                        }
                    />
                ))}
            </div>
        );
    };

    const [quantity, setQuantity] = useState(1);

    return (
        <Layout>
            <div>
                <div className="top">
                    <p className="text-slate-700 my-[6px] mx-[30px]">
                        Electronics / Audio /Headphones / Shop Headphones by
                        type /
                        <span className="text-slate-950 font-bold">
                            {product.name}
                        </span>
                    </p>
                </div>
                <div className="main flex sm:flex-col md:flex-row justify-center items-center m-[30px] gap-6 transition-all ease-in-out duration-75">
                    <div className="left">
                        <div className="main-image rounded-xl py-[10px] overflow-hidden items-center">
                            <img
                                className="h-[400px] pl-[50px] px-[30px] transition-all ease-in-out duration-75 hover:scale-125"
                                src={selectedImage}
                                alt={product.name}
                            />
                        </div>
                        <div className="thumbnail flex space-x-2 mt-2">
                            {product.image.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    onClick={() => setThumbnail(image)}
                                    className={`w-[90px] h-[90px] object-contain rounded-xl cursor-pointer border bg-slate-200 hover:scale-90 ${
                                        selectedImage === image
                                            ? "border-black"
                                            : "border-transparent"
                                    }`}
                                />
                            ))}
                            {/* {Object.keys(images).map((color) => (
                                <img
                                key={color}
                                className={`w-[90px] h-[90px] object-contain border bg-slate-200 rounded-xl hover:scale-90 ${
                                    selectedThumbnail === color
                                    ? "border-4 border-blue-500"
                                    : ""
                                }`}
                                src={images[color]}
                                alt={color}
                                onClick={() => handleThumbnail(color)}
                                />
                            ))} */}
                        </div>
                    </div>

                    <div className="right w-[511px] px-5 md:items-center">
                        <div className="title pb-4 md:p-4 border-b">
                            <h3 className="font-bold text-3xl">
                                {product.name}
                            </h3>
                            <p className="text-[13px] pt-1 pb-2">
                                {product.description}
                            </p>
                            <div className="flex text-xs text-green-900 space-x-1">
                                {Rating(product.rating)}
                                <span className="text-black">
                                    {product.reviews}
                                </span>
                            </div>
                        </div>

                        <div className="price pb-4 md:px-4 border-b">
                            <h3 className="font-semibold text-[20px] pt-2">
                                ${product.price}
                                <span>.00</span>
                            </h3>
                            <p className="text-[13px]">
                                Suggested payments with 6 moths special
                                financing
                            </p>
                        </div>

                        <div className="color pb-4 md:px-4">
                            <h3 className="font-semibold text-[20px] pb-[10px]">
                                Chose a Color
                            </h3>
                            <div className="color-grup flex gap-[12px]">
                                {product.color.map((color) => (
                                    <button
                                        key={color.name}
                                        className={`w-8 h-8 rounded-full border border-gray-300 ${
                                            selectedColor.name === color.name
                                                ? "ring-2 ring-offset-2 ring-black"
                                                : ""
                                        } `}
                                        onClick={() => setColor(color)}
                                        style={{ backgroundColor: color.hex }}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className="quantity flex space-x-5 px-4 py-4 border-b">
                            <div className="rounded-full bg-slate-200 pl-2 pb-2 h-fit">
                                <button
                                    onClick={() =>
                                        setQuantity((quantity) =>
                                            Math.max(1, quantity - 1)
                                        )
                                    }
                                    className="pl-8 rounded-full bg-gray-200 hover:bg-gray-200 hover:text-green-900 text-[24px]"
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    className="appearance-none w-16 text-center border-t border-b bg-gray-200 text-[18px]"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    onClick={() =>
                                        setQuantity((quantity) => quantity + 1)
                                    }
                                    className="bg-gray-200 rounded-full mr-8 hover:bg-gray-200 hover:text-green-900 text-[20px]"
                                >
                                    +
                                </button>
                            </div>
                            <div>
                                <p className="text-red-600 font-semibold">
                                    Only 12 Items Left!
                                </p>
                                <p className="text-gray-600">Don't miss it</p>
                            </div>
                        </div>
                        <div className="btn flex pt-3 pb-5 px-4 justify-between">
                            <Button className="bg-none w-[200px] h-[55px] border-2 border-green-700">
                                Buy Now
                            </Button>
                            <Button className="bg-none w-[200px] border-2 border-green-700">
                                Add to Cart
                            </Button>
                        </div>
                        <div className="delivery px-4 pb-4">
                            <div className="mt-1 relative w-[435px] border-[2px] flex gap-x-6 rounded-lg hover:bg-gray-50">
                                <div className="mt-1 flex w-11 items-center justify-center rounded-lg group-hover:white lg:h-11 h-8">
                                    <FontAwesomeIcon
                                        icon={faTruck}
                                        className="text-amber-400"
                                    />
                                </div>
                                <div>
                                    <a
                                        href=""
                                        className="font-semibold text-gray-900 text-base"
                                    >
                                        Free Delivery
                                    </a>
                                    <p className="text-xs text-gray-600 pt-[3px] pb-[5px]">
                                        Enter your Postal code for Delivery
                                        Availabillity
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1 relative w-[435px] border-[2px] flex gap-x-6 rounded-lg hover:bg-gray-50">
                                <div className="mt-1 flex w-11 items-center justify-center rounded-lg group-hover:white lg:h-11 h-8">
                                    <FontAwesomeIcon
                                        icon={faClipboard}
                                        className="text-amber-400"
                                    />
                                </div>
                                <div>
                                    <a
                                        href=""
                                        className="font-semibold text-gray-900 text-base"
                                    >
                                        Return Delivery
                                    </a>
                                    <p className="text-xs text-gray-600 pt-[3px] pb-[5px]">
                                        Free 30 days Delivery Return Detail
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-[50px] bg-white shadow-lg">
                    <h1 className="text-3xl font-bold mb-6">
                        Similar Items You Might Like
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                        {similarProduct.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* ---akhir */}
            </div>
        </Layout>
    );
};

export default Detail;
