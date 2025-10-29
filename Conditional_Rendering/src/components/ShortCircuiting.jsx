import React,{useState} from "react";

const ShortCircuiting = () => {
    // Short Circuiting is used to show the components like show/hide functionality. For this && Operator is used
    const [toggle, setToggle] = useState(false)
  return (
    <>
    <h1>Short Circuiting</h1>
    {toggle && <h1>Toggle Set To True</h1> }
    <button onClick={()=> setToggle(!toggle)}>{!toggle ? "Show" : "Hide"}</button>
    </>
  )
};

export default ShortCircuiting;
