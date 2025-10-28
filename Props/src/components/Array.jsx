import React from "react";

const Array = (props) => {
    const list = props.items  
  return (
    <>
    {list.map((item,i)=>(
        <h1 key={i}>{item}</h1>
    ))}
    </>
  )
};

export default Array;
