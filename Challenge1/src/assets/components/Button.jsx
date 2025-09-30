import React from "react";

const Button = ({text}) => {
  return <button className="cursor-pointer py-1 px-3 bg-blue-600 transition delay-150 duration-400 ease-in-out hover:bg-blue-400  rounded-full font-light text-white">{text}</button>;
};

export default Button;
