import React from "react";
// if I forget to send name as props where Default component is used then name=bhardwaj otherwise name=whatever you pass as props
const Default = ({name="bhardwaj",age}) => {
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    </>
  )
};

export default Default;
