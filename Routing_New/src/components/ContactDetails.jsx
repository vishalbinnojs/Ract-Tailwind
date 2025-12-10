import React from "react";
import {useParams} from "react-router-dom"
const ContactDetails = () => {
    const params = useParams()
    console.log(params);
    
  return (
    <>
    <div className="bg-amber-500 w-[300px] mx-auto mt-4 text-center text-gray-200 p-2 rounded-lg border-zinc-500 border-2">
        <span>Dynamic Routing</span>
        <h1 className="text-2xl mb-2">ContactDetails of Contact Id: {params.id}</h1>
    <p>Mobile Number: +91-xx-xxx-XY-123</p>
    <p>Email Address: email@example.com</p>
    </div>
    
    </>  
  )
};

export default ContactDetails;
