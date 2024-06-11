import React from "react";
import Button from "./Button";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    // const { cartItems, removeFromCart, updateQuantity } = useCart();

    const cartItems = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const handleQuantityChange = (id, color, quantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {id, color, quantity:Number(quantity)}
        })
    };
    const handleIncrement = (id,color) => {
        const item = cartItems.find(item => item.id === id && item.color === color);
            handleQuantityChange(id, color, item.quantity + 1)
        
    }
    const handleDecrement = (id,color) => {
        const item = cartItems.find(item => item.id === id && item.color === color);
        if(item.quantity > 1){
            handleQuantityChange(id, color, item.quantity - 1)
        }
    }

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
                            key={`${item.id}-${item.color}`}
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
                                <p>Color: <span style={{backgroundColor:item.color} }className=""></span>{item.color} </p>
                                <p>${item.price}</p>
                            </div>
                            <div className="ml-4 flex items-center">
                                <button onClick={()=>handleDecrement(item.id, item.color)} className="bg-gray-300 text-black px-2 py-1 rounded"> - </button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(
                                            item.id, item.color,
                                            e.target.value
                                        )
                                    }
                                    className="appearance-none w-16 p-2 border rounded mx-2 text-center "
                                    min="1"
                                    
                                />
                                <button onClick={()=>handleIncrement(item.id, item.color)} className="bg-gray-300 text-black px-2 py-1 rounded"> + </button>

                            </div>
                            <Button
                                className="text-red-500 hover:text-red-700 ml-4"
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: item,
                                    })
                                }
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
