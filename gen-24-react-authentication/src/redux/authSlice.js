import{ createSlice } from"@reduxjs/toolkit";
import axios from 'axios'

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user? user : "",
    token: token? token:"",
    error: "",
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) =>{
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
            state.error="";
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('user', JSON.stringify(action.payload.user))
        },
        loginFailure: (state,action) =>{
            state.error=action.payload;
        },
        logout:(state) =>{
            state.user = "",
            state.token="",
            state.error="",
            localStorage.removeItem('token');
            localStorage.removeItem('user')
        }
    }
})

export const {loginSuccess, loginFailure, logout} = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

export default authSlice.reducer;