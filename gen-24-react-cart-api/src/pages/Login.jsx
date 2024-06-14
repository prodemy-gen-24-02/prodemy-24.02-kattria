import React from "react"; 
import {yupResolver} from '@hookform/resolvers/yup'
import *as yup from 'yup'
import { useForm } from "react-hook-form";
import{ useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../store/reducer/authSlice";

const schema = yup.object().shape({
    email:yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min (5, 'Password must be at least 6 charackter').required('password is required'),
})

const Login = ()=>{
    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error, isLoggedIn} = useSelector((state)=>state.auth);

    const onSubmit = async (data) => {
      await dispatch(login(data.email, data.password));
      if(isLoggedIn){
        navigate('/')
      }
    };
    // const onSubmit = (data) =>{
    //     axios.post("http://localhost:3000/login", data)
    //     .then((res)=>{
    //         const{accessToken, user} = res.data;
    //         dispatch(setToken(accessToken));
    //         dispatch(setUser(user));
    //         navigate("/")
    //     })
    //     .catch((error)=>console.log(error))
    // }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" {...register('email')} className={`w-full p-2 border rounded ${errors.email ? 'border-red-500':'border-gray-300'}`} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input 
                        type="password" 
                        id="password" {...register('password')} 
                        className={`w-full p-2 border rounded ${errors.password ? 'border-red-500':'border-gray-300'}`} />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;