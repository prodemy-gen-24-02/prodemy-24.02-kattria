import React from "react";
import Button from "./Button";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementQuantity,
    incrementQuantity,
    removeItem,
    toggleSelect,
    updateQuantity,
} from "../redux/cartSlice";

const Cart = () => {
    // const { cartItems, removeFromCart, updateQuantity } = useCart();

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleCheckout =()=> {
    //     navigate('/checkout')
    // }

    // const handleQuantityChange = (id, color, e) => {
    //     const newQuantity =Number(e.target.value);
    //         dispatch(updateQuantity({ id, color, quantity:newQuantity }));
        
    // };
    const handleIncrement = (id, color) => {
        dispatch(incrementQuantity({ id, color }));
    };
    const handleDecrement = (id, color) => {
        dispatch(decrementQuantity({ id, color }));
    };
    const handleRemove = (id, color) => {
        dispatch(removeItem({ id, color }));
    };
    const handleToggleSelect=(id,color)=>{
        dispatch(toggleSelect({id,color}))
    }

    const selectedItems = cartItems.filter(item =>item.selected);
    const subtotal = selectedItems.reduce((total,item) => total + item.price * item.quantity,0)

    return (
        <>
            <Header />
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text=2xl font-bold mb-4">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500">
                        Cart is Empty
                    </div>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                        <div
                            key={`${item.id}-${item.color}`}
                            className="flex items-center justify-between p-4 border-b"
                        >
                            <div className="flex items-center mb-2">
                            <input type="checkbox" checked={item.selected || false} onChange={()=>handleToggleSelect(item.id,item.color)} className="mr-2"/>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover"
                            />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">
                                    {item.name}
                                </h2>
                                <p>
                                    Color:{" "}
                                    <span
                                        style={{ backgroundColor: item.color }}
                                        className=""
                                    ></span>
                                    {item.color}{" "}
                                </p>
                                <p>${item.price}</p>
                            </div>
                            <div className="ml-4 flex items-center">
                                <button
                                    onClick={() =>
                                        handleDecrement(item.id, item.color)
                                    }
                                    className="bg-gray-300 text-black px-2 py-1 rounded"
                                >
                                    {" "}
                                    -{" "}
                                </button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    // onChange={(e) =>
                                    //     handleQuantityChange(
                                    //         item.id,
                                    //         item.color,
                                    //         e
                                    //     )
                                    // }
                                    className="appearance-none w-16 p-2 border rounded mx-2 text-center "
                                    min="1"
                                    readOnly
                                />
                                <button
                                    onClick={() =>
                                        handleIncrement(item.id, item.color)
                                    }
                                    className="bg-gray-300 text-black px-2 py-1 rounded"
                                >
                                    {" "}
                                    +{" "}
                                </button>
                            </div>
                            <Button
                                className="text-red-500 hover:text-red-700 ml-4"
                                onClick={() =>
                                    handleRemove(item.id, item.color)
                                }
                            >
                                Remove
                            </Button>
                            </div>
                        </div>
                    ))}
                    </div>
                )}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Order Summary
                    </h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>
                            $
                            {subtotal.toFixed(2)}
                        </span>
                    </div>
                    <Link to="/checkout">
                        <button className="flex bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cart;
