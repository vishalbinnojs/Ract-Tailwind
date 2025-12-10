import React from "react";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
      <>
    <div className=" flex flex-col gap-2 bg-zinc-900  p-2">
      <h1 className="text-center text-3xl text-red-400 ">Home</h1>
     {loaderData.map((item)=>{
return(

  <div 
  key={item.id}
  className="text-gray-200 bg-zinc-500 w-[200px] mx-auto p-2 py-6 rounded-lg text-center" 
  >
    <p>Name: {item.name}</p>
    <p>Id: {item.id}</p>
  </div>
)
})}
    </div>
</>
  );
};

export default Home;
