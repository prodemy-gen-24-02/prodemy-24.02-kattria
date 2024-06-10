import React from "react";
import { useCart } from "../context/CartContext";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";

const Checkout = () => {
    const { cartItems } = useCart();
    const calculateTotal = () => {
        return cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2);
    };
    const handleCheckout = () => {
        alert("Checkout Successful!");
    };

    return (
        <>
        <Header/>
        <Navbar/>
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            {cartItems.length === 0 ? (
                <div className="text-center text-gray-500">Cart is empty</div>
            ) : (
                <div>
                    {cartItems.map((item) => (
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
                                <p>
                                    ${item.price} x {item.quantity}
                                </p>
                            </div>
                            <div className="text-lg font-semibold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center p-4 mt-4 border-t">
                        <h2 className="text-xl font-bold">Total:</h2>
                        <div className="text-xl font-bold">
                            ${calculateTotal()}
                        </div>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                    >
                        Complete Checkout
                    </button>
                </div>
            )}
        </div>
        </>
    );
    
};

export default Checkout;
