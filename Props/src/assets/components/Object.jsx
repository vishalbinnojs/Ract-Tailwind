import React from "react";

// const Object = ({data,role}) => {
    // 1st method
    // const {name,age} = data;
    
    
const Object = ({name,age}) => {
    
  return (
    <> 
    {/* first render */}
    {/* <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{role}</li>
    </ul> */}
    {/* second render using rest operator( Better) */}
    <ul>
        <li>Rest Operator: {name}</li>
        <li>Rest Operator: {age}</li>
    </ul>

    </>
  )
};

export default Object;
