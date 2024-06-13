import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        cart: CartReducer,
    }
});
export default store
