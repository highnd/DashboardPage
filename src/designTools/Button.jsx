import React from "react";

const Button = ({ color, bgColor, text, borderRadius }) => {
  return (
    <button
      className={` p-2 ${bgColor} text-${color} ${borderRadius}  border-none hover:bg-stone-800/10 bg-opacity-90 shadow-2xl`}
    >
      {text}
    </button>
  );
};

export default Button;
