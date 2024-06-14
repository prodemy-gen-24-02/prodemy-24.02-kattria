import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: "",
    token: "",
    error: "",
    isLoggedIn: token !== "",
};

function getTokenData (){
    const getToken = localStorage.getItem('token');
    const getUser = localStorage.getItem('user');
    if (getToken){
        return  {
            token:getToken,
            user:JSON.parse(getUser)
        }
    }
    return{...initialState}
}



export const authSlice = createSlice({
    name: "auth",
    initialState: getTokenData(),
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
            state.error = "";
            state.isLoggedIn=true;
            localStorage.setItem("token", action.payload.accessToken);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.isLoggedIn=false;
        },
        logout: (state) => {
            state.user = '';
            state.token = '';
            state.error = '';
            state.isLoggedIn=false;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            //return { ...initialState };
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3000/login", {
            email,
            password,
        });
        if (response.data && response.data.accessToken) {
            dispatch(loginSuccess(response.data));
        }
    } catch (error) {
        dispatch(
            loginFailure(error.response?.data?.message || "Login Failed!")
        );
    }
};

export default authSlice.reducer;
