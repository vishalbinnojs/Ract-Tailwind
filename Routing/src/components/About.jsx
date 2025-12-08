import React from "react";
import {Outlet} from "react-router-dom"
const About = () => {
  return (
    <>
  <div className="page">
    <h1>About</h1>
    </div>
  <Outlet />
   


    </>
  )
};

export default About;
