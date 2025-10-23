import React from "react";

const Button = ({color,setBoxColor,children}) => {
   
    
    const changeBoxColor = () =>{
        setBoxColor(color)
    }
  return (
    <>
    <button style={{backgroundColor:color}}
    onClick={changeBoxColor}>{children}</button>
    </>
  )
};

export default Button;
