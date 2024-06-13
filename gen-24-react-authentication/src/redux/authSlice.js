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
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return{...initialState}
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
      if(response.data && response.data.accessToken){
        dispatch(loginSuccess(response.data));
      } else{
        dispatch(loginFailure('User not registered.'));
      }
      
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message ||'Login Failed!'));
    }
  };

export default authSlice.reducer;