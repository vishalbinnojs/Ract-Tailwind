import React from "react";

const ColorBox = ({boxColor}) => {
    console.log(boxColor)
  return <div className=" mt-10 mx-auto w-64 h-64 border-2 border-amber-400 rounded-xl text-center content-center font-bold"
  style={{backgroundColor:boxColor}}>{boxColor.toUpperCase()}</div>;
};

export default ColorBox;
