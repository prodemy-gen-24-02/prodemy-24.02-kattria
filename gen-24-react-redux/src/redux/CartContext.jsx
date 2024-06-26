import React, { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext();

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             const item = action.payload;
//             const exisItem = state.cartItems.find((p) => p.id === item.id);
//             console.log(exisItem);
//             if (exisItem) {
//                 return {
//                     ...state,
//                     cartItems: state.cartItems.map((p) =>
//                         p.id === exisItem.id ? {...item, quantity:exisItem.quantity + item.quantity} : p
//                     ),
//                 };
//             } else {
//                 return {
//                     ...state,
//                     cartItems: [...state.cartItems, {...item, quantity:item.quantity}],
//                 };
//             }
//         case "REMOVE_FROM_CART":
//             return {
//                 ...state,
//                 cartItems: state.cartItems.filter(
//                     (p) => p.id !== action.payload.id
//                 ),
//             }
//         case 'UPDATE_QUANTITY' :
//             return {
//                 ... state,
//                 cartItems: state.cartItems.map(p => p.id === action.payload.id ? {...p, quantity:action.payload.quantity}:p)
//             }
//         default:
//             return state;
//     }
// };

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems ((prevItems) => {
            const exisItem = prevItems.find(
                (p) => p.id === item.id
            )
            console.log(exisItem);
            if (exisItem) {
                return prevItems.map((p)=> p.id === exisItem.id ? {...p, quantity: p.quantity +item.quantity} :p)
            } else {
                return [...prevItems, {...item, quantity:item.quantity}];
            }
        })
    }
    const removeFromCart =(id) => {
        setCartItems((prevItems)=> prevItems.filter((p) => p.id !==id))
    }
    const updateQuantity =(id, quantity) => {
        setCartItems((prevItems)=>prevItems.map((p)=>p.id ===id? {...p, quantity:quantity}:p))
    }


    // const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });
    // const addToCart = (item) => {
    //     dispatch({ type: "ADD_TO_CART", payload: item });
    // };
    // const removeFromCart = (id) => {
    //     dispatch({ type: "REMOVE_FROM_CART", payload:{ id }});
    // };
    // const updateQuantity = (id, quantity) => {
    //     dispatch({type: 'UPDATE_QUANTITY', payload:{id,quantity}})
    // }
    return (
        // <CartContext.Provider
        //     value={{ cartItems: state.cartItems, addToCart, removeFromCart, updateQuantity}}
        // >
        //     {children}
        // </CartContext.Provider>
        <CartContext.Provider
            value={{ cartItems: cartItems, addToCart, removeFromCart, updateQuantity}}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
