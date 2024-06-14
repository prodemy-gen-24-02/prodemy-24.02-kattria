import React, { useEffect } from "react";
import Button from "../components/Button";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementQuantity,
    incrementQuantity,
    removeItem,
    setCartItems,
    toggleSelect,
    updateQuantity,
} from "../store/reducer/cartSlice";
import axios from "axios";

const Cart = () => {
    // const { cartItems, removeFromCart, updateQuantity } = useCart();

    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
   // const selectedItems = useSelector((state) => state.cart.selectedItems);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleCheckout =()=> {
    //     navigate('/checkout')
    // }

    // const handleQuantityChange = (id, color, e) => {
    //     const newQuantity =Number(e.target.value);
    //         dispatch(updateQuantity({ id, color, quantity:newQuantity }));
        
    // };
    // const getCartItems = async ()=>{
    //     await axios.get('http:localhost:3000/cart').then((res)=>{dispatch(setCartItems(res.data))})
    // }
    // console.log(getCartItems());
    // useEffect(()=>{
    //     getCartItems()
    // },[])

    const handleIncrement = async (productId, color) => {
        const foundItem = cartItems.find((item)=> item.productId === productId && item.color === color);
        //console.log(foundItem);
        const payload ={
            ...foundItem, 
            quantity : foundItem.quantity + 1
        }
        console.log(payload);
         await axios.put(`http://localhost:3000/cart/${foundItem.id}`,payload)
         .then((res)=>{dispatch(incrementQuantity(res.data));

         })
        
    };
    const handleDecrement = async(productId, color) => {
        const foundItem = cartItems.find((item)=> item.productId === productId && item.color === color);
        console.log(foundItem);
        const payload ={
            ...foundItem,
            quantity : foundItem.quantity-1
        }
        await axios.put(`http://localhost:3000/cart/${foundItem.id}`,payload)
        .then((res)=>{dispatch(decrementQuantity(res.data));
        })
    };
    const handleRemove = async (productId, color) => {
        const foundItem = cartItems.find((item)=> item.productId === productId && item.color === color);
        console.log(foundItem);
        await axios.delete(`http://localhost:3000/cart/${foundItem.id}`)
        .then((res)=>{dispatch(removeItem(res.data.productId));
        })
    };
    // const handleToggleSelect=(item)=>{
    //     dispatch(toggleSelect(item))
    // }

    // const isSelected = (item) =>{
    //     return selectedItems.some(selectedItem => selectedItem.id === item.id &&selectedItem.color===item.color)
    // } 
    // const subtotal = cartItems.reduce((total,item)=>{
    //     if(isSelected(item)){
    //         return total+item.price*item.qty;
    //     }
    //     return total;
    // },0)

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
                            {/* <input type="checkbox" checked={item.selected || false} onChange={()=>handleToggleSelect(item)} className="mr-2"/> */}
                            <img
                                src={import.meta.env.BASE_URL+item.img}
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
                                        handleDecrement(item.productId, item.color)
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
                                        handleIncrement(item.productId, item.color)
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
                                    handleRemove(item.productId, item.color)
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
                    {/* <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>
                            $
                            {subtotal.toFixed(2)}
                        </span>
                    </div> */}
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
