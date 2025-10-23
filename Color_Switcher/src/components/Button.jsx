import React from "react";

const Button = ({color,setBoxColor,children}) => {
    console.log(children)
    
    const changeBoxColor = () =>{
        setBoxColor(color)
    }
  return (
    <>
    <button style={{backgroundColor:color}}
    onClick={changeBoxColor}>{color}</button>
    </>
  )
};

export default Button;
