import React from "react";

const Hero = (props) => {
//   console.log(props);
  const {data,func} = props;

    console.log(data);
   func("Vishal")  // passing data (child to parent)

    
  return(
    <>
    <div className="bg-amber-500 p-2 h-[50%] text-center text-xl">Inside Layout Hero: {data} </div>
    </>
  )
};

export default Hero;
