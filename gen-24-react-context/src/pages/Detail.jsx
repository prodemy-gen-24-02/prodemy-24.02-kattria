import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faStar } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

import Button from "../components/Button";
import Layout from "../layout/Layout";
import { useCart } from "../context/CartContext";

const Detail = () => {
    const { id } = useParams();
    const fetcher = (url) => fetch(url).then((res) => res.json());
    //const product = products.find((p) => p.id === parseInt(id));
    const { data: product, error } = useSWR(
        `http://localhost:3000/products/${id}`,
        fetcher
    );
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const [selectedColor, setColor] = useState(null);

    const {addToCart} =useCart();

    const handleThumbnail = (src) => {
        setMainImage(src);
    };
    const handleColorSelect = (color) => {
        setMainImage(color.src);
        setColor(color.hex);
    };

    // const handleAddToCart = () => {
    //     addToCart({
    //         id:product.id,
    //         name: product.name,
    //         price: product.price,
    //         image:mainImage,
    //         color: selectedColor,
    //         quantity: parseInt(quantity),
    //     })
    //     window.alert("Produk berhasil di tambahkan!")
    //     // setAlert(true);
    //     // setTimeout(()=> setAlert(false),3000)
    // }
    const handleAddToCart = () => {
        addToCart({ ...product,
            image:selectedColor.src,
            quantity: setQuantity,
        })
        window.alert("Produk berhasil di tambahkan!")
        // setAlert(true);
        // setTimeout(()=> setAlert(false),3000)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (product) {
            setMainImage(
                product.image ||
                    (product.color.length > 0 && data.color[0].src) ||
                    ""
            );
            setColor(product.color.length > 0 ? product.color[0].hex : "");
        }
    }, [product]);

    if (error) return alert(JSON.stringify(error));
    // (<div>Failed to load</div>);
    if (!product) return <div>Loading...</div>;

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
                                : "text-gray-600 outline-[20px]"
                        }
                    />
                ))}
            </div>
        );
    };
    // console.log(Rating({rating:product.rating}))

    return (
        <>
            <Layout>
                <div>
                    {/* <div className="container mx-auto p-4">
                        {showAlert && (
                            <div className="mb-4 p-2 bg-green-500 text-white rounded">
                            Produk berhasil ditambahkan ke keranjang!
                          </div>
                        )}
                    </div> */}
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
                                    src={import.meta.env.BASE_URL + mainImage}
                                    alt={product.name}
                                />
                            </div>
                            <div className="thumbnail flex space-x-2 mt-2">
                                {product.color.map((c) => (
                                    <img
                                        key={c.hex}
                                        src={import.meta.env.BASE_URL + c.src}
                                        alt={c.name}
                                        className={`w-[90px] h-[90px] object-contain border bg-slate-200 rounded-xl hover:scale-90 ${
                                            mainImage === c.src
                                                ? "border-4 border-blue-500"
                                                : ""
                                        }`}
                                        onClick={() => handleThumbnail(c.src)}
                                    />
                                ))}

                                {/* {product.color &&
                  Object.keys(product.color).map((color) => (
                    <img
                      key={color}
                      className={`w-[90px] h-[90px] object-contain border bg-slate-200 rounded-xl hover:scale-90 ${
                        selectedThumbnail === color
                          ? "border-4 border-blue-500"
                          : ""
                      }`}
                      src={import.meta.env.BASE_URL + product.color[color]}
                      alt={`${product.name}-${color}`}
                      onClick={() => handleThumbnail(color)}
                    />
                  ))} */}
                            </div>
                        </div>

                        <div className="right w-[511px] px-5 md:items-center">
                            <div className="title pb-4 md:p-4">
                                <h3 className="font-bold text-3xl">
                                    {product.name}
                                </h3>
                                <p className="text-[13px] pt-1 pb-2">
                                    {product.description}
                                </p>
                                <div className="rating text-xs text-green-900">
                                    {Rating(product.rating)}
                                    <span className="text-black">
                                        {product.reviews}
                                    </span>
                                </div>
                            </div>

                            <div className="price pb-4 md:px-4">
                                <h3 className="font-semibold text-[20px] pt-2">
                                    ${product.price} <span>.00</span>
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
                                    {product.color.map((c) => (
                                        <button
                                            key={c.name}
                                            className={`w-8 h-8 rounded-full border border-gray-300 ${
                                                selectedColor === c.hex
                                                    ? "border-black"
                                                    : "border-gray-400"
                                            }`}
                                            style={{ backgroundColor: c.hex }}
                                            onClick={() => handleColorSelect(c)}
                                        />
                                    ))}
                                    {/* {Object.keys(product.color).map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border border-gray-300 ${
                        color === "green"
                          ? "bg-green-300"
                          : color === "red"
                          ? "bg-red-600"
                          : color === "pink"
                          ? "bg-red-300"
                          : color === "black"
                          ? "bg-black"
                          : "bg-slate-100"
                      } ${
                        selectedThumbnail === color
                          ? "border-4 border-blue-500"
                          : ""
                      }`}
                      onClick={() => handleThumbnail(color)}
                    ></button>
                  ))} */}
                                </div>
                            </div>
                            <div className="quantity flex space-x-5 px-4 py-4 ">
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
                                            setQuantity(
                                                (quantity) => quantity + 1
                                            )
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
                                    <p className="text-gray-600">
                                        Don't miss it
                                    </p>
                                </div>
                            </div>
                            <div className="btn flex pt-3 pb-5 px-4 justify-between">
                                <Button className="bg-none w-[200px] h-[55px] border-2 border-green-700">
                                    Buy Now
                                </Button>
                                <Button 
                                onClick={handleAddToCart}
                                className="bg-none w-[200px] border-2 border-green-700" >
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

                    {/* ---akhir */}
                </div>
            </Layout>
        </>
    );
};

export default Detail;
