import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/cartSlice";
import authReducer from "./reducer/authSlice";
import authTokenReducer from "./authTokenSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        //authT: authTokenReducer,
        cart: CartReducer,
    }
});
export default store
