import React from "react";

const Button = (props) => {
  const { className = "bg-slate-200 text-slate-700  hover:bg-green-900 hover:text-white hover:outline-none", children, text } = props;
  return (
    <button
      {...props}
      className={`${className} py-2.5 items-center px-5 text-sm font-semibold rounded-3xl  transition-all outline  `}
    >
      {text || children}
    </button>
  );
};
export default Button;
