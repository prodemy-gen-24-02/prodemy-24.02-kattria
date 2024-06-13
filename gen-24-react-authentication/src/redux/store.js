import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import authReducer from "./authSlice";
import authTokenReducer from "./authTokenSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        //authT: authTokenReducer,
        cart: CartReducer,
    }
});
export default store
