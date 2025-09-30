import React from "react";

const Parent = (props) => {
  console.log(props)
  return (
    <>
    <div>
    
    {props.title}
    {props.children}  {/*h3 and p are children and you can not change the name children */}
    </div>

    </>
  )
};

export default Parent;
