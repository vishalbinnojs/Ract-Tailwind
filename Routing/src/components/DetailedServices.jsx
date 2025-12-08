import React from "react";
import {useParams} from "react-router-dom"

const DetailedServices = () => {
    const params = useParams();
    console.log(params);
    
  return (
    <>
    <div className="page">DetailedServices {params.id}</div>;
    
    </>
  )
};

export default DetailedServices;
