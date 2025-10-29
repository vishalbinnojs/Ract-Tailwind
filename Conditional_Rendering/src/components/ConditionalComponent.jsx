import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const ConditionalComponent = () => {
  let option = 1 ;
  // const Component = ComponentA;  //1.passing the reference of ComponentA to the Component Variable and using the variable like component

const Component = option === "a" ? ComponentA : ComponentB;  

  return (
    <>
      <h1>
        Rendering Advanced Conditional Components
      </h1>
    
      <Component /> 
      
    </>
  );
};

export default ConditionalComponent;
