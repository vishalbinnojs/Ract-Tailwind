import React from "react";

const Button = ({ handleClick, children }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 bg-blue-500 rounded-lg font-medium text-gray-200 cursor-pointer hover:bg-blue-400"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
