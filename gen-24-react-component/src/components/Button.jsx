import React from "react";

const Button = (props) => {
    const {className='bg-slate-200', children, text}= props;
    return(
        <button {...props} className={`${className} py-2.5 items-center px-5 text-sm font-semibold rounded-3xl text-slate-700 transition-all outline hover:bg-green-900 hover:text-white hover:outline-none`}>
           {text || children}
        </button>
    )
}
export default Button;




