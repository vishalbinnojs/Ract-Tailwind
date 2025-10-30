import React from "react";

const UserCard = ({user}) => {
  const {id,name,role,age} = user;   
 
  
    return(
 <div style={{width:"200px",margin: "8px auto",background:"brown",textAlign:"center",padding:"12px",borderRadius:"12px",fontWeight:500, color:"#ddd",fontSize:"1.5rem"}}>
    <p>Id is : {id}</p>
    <p>Name : {name === "vishal" ? "vishal": "null"}</p>
    {/* Conditional Rendering */}
    <p>Role : {role}</p>
    <p>Age : {age}</p>
 </div>
    )
};

export default UserCard;
