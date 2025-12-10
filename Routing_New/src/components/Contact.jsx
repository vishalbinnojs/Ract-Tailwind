import React from "react";
import {NavLink} from "react-router-dom"

const Contact = () => {
 
 const data = ["a","b","c","d"]
  return (
  <>
  <div className="page">Contact
   { data.map((item)=>(
     <NavLink to={`/contact/${item}`}
      key={item}
      className={({isActive})=>`${isActive ? "text-green-500":""} ml-4 text-xl hover:text-green-500 duration-300 transform-gpu hover:scale-200`}
      >{item}</NavLink>

    ))}
</div>
        </>
  
  
  )
};

export default Contact;
