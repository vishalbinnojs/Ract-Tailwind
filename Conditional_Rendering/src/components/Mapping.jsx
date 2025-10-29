import React,{useState} from "react";

const Mapping = () => {
const [status, setStatus] = useState("loading");   

const statusMap = {
    loading: <p>Loading...</p>,
    success: <p>Data fetched successfully! ✔</p>,
    error: <p>Error fetching data.❌</p>
  };

  return(
    <>
    <h1>{statusMap[status]}</h1>
    <button onClick={()=> setStatus("loading")}>Loading</button>
    <button onClick={()=> setStatus("success")}>Success</button>
    <button onClick={()=> setStatus("error")}>Error</button>
    </>
  )
};

export default Mapping;
