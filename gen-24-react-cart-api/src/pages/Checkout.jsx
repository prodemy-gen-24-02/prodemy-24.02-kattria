import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const items = useSelector((state) => state.cart.items.filter(item=>item.selected));
    const selectedItems = items.filter(item=>item.selected);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handlePlaceOrder = (event) => {
    //     event.preventDefault();
    //     alert("Order successfully");
    //     dispatch(clearCart());
    //     navigate("/");
    // };

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0
    );
    const tax = subtotal * 0.1;
    const couponDiscount = 0;
    const shippingCost = 0;
    const total = subtotal + tax - couponDiscount + shippingCost;

    return (
        <>
            <Header />
            <Navbar />
            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div className="bg-white p-4 rounded-lg shadow-md border-2">
                        <h2 className="text-2xl font-bold mb-4">
                            Review Item And Shipping
                        </h2>
                        <ul>
                            {selectedItems.map((item) => (
                                <li
                                    key={`${item.id}-${item.color}`}
                                    className="flex mb-2 items-center "
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-md bg-slate-300"
                                    />
                                    <div className="ml-4 mr-4 w-full flex justify-between items-center ">
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {item.name}
                                            </h3>
                                            <p>Color: {item.color}</p>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-right">
                                                ${item.price}
                                            </p>
                                            <p className="font-semibold">
                                                Quantity: {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="text-lg font-semibold">
                                    ${total.toFixed(2)}
                                </div> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md mt-4 border-2">
                        <h2 className="text-xl font-semibold mb-4">
                            Delivery Information
                        </h2>
                        <form >
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            {/* <div className="mb-4">
                                <label
                                    className="block mb-2"
                                    htmlFor="postalCode"
                                >
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div> */}
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Order Summary
                    </h2>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="coupon">
                            Enter Coupon Code
                        </label>
                        <input
                            type="text"
                            id="coupon"
                            className="w-full p-2 border rounded"
                        />
                        <button className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded">
                            Apply coupon
                        </button>
                    </div>
                    <h3 className="text-lg font-semibold">Payment Details</h3>
                    <div className="mb-4">
                        <div>
                            <input
                                type="radio"
                                id="cod"
                                name="payment"
                                value="COD"
                                className="mr-2"
                            />
                            <label htmlFor="cod">Cash on Delivery</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="shopcartCard"
                                name="payment"
                                value="ShopcartCard"
                                className="mr-2"
                            />
                            <label htmlFor="shopcartCard">Shopcart Card</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="paypal"
                                name="payment"
                                value="Paypal"
                                className="mr-2"
                            />
                            <label htmlFor="paypal">Paypal</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="creditCard"
                                name="payment"
                                value="CreditCard"
                                className="mr-2"
                            />
                            <label htmlFor="creditCard">
                                Credit or Debit card
                            </label>
                        </div>
                    </div>
                    {/* <div className="flex justify-between mb-4">
                        <img
                            src=""
                            alt="Amazon"
                            className="w-12 h-12"
                        />
                        <img
                            src=""
                            alt="Mastercard"
                            className="w-12 h-12"
                        />
                        <img
                            src=""
                            alt="Visa"
                            className="w-12 h-12"
                        />
                    </div> */}
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="cardHolderName">
                            Card Holder Name
                        </label>
                        <input
                            type="text"
                            id="cardHolderName"
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <label className="block mb-2" htmlFor="expiryDate">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiryDate"
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block mb-2" htmlFor="cvv">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                    <div className="text-lg font-semibold mb-4">
                        <div className="flex justify-between">
                            <span>Sub Total:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax (10%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Coupon Discount:</span>
                            <span>-${couponDiscount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Cost:</span>
                            <span>${shippingCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
                        Pay ${total.toFixed(2)}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;
