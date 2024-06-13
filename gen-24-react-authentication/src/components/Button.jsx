import React from "react";

const Button = (props) => {
  const {
    className = "bg-slate-200 text-slate-700 text-sm  ",
    children,
    text,
  } = props;
  return (
    <button
      {...props}
      className={`${className} py-2.5 items-center px-5  font-semibold rounded-3xl  transition-all border  hover:bg-green-900 hover:text-white `}
    >
      {text || children}
    </button>
  );
};
export default Button;
