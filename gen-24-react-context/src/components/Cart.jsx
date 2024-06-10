import React from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import Layout from "../layout/Layout";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const handleQuantityChange = (id, quantity) => {
        updateQuantity(id, parseInt(quantity));
    };

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
                    
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 border-b"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover"
                                />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold">
                                        {item.name}
                                    </h2>
                                    <p>${item.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(
                                                item.id,
                                                e.target.value
                                            )
                                        }
                                        className="border rounded px-2 py-1 mr-2"
                                        min="1"
                                    />
                                </div>
                                <Button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        ))
                    
                )}
                <Link to="/checkout">
                    <button className="flex bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
                        Checkout
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Cart;
