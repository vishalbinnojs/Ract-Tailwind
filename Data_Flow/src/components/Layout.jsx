import React from "react";
import About from "./About";
import Hero from "./Hero";
import State from "./State";

const Layout = ({ data }) => {
  const value = data;
  console.log(value);

  function Receive(a) {
      console.log(a);
    
  }

  return (
    <>
      <div className="bg-linear-to-br from-violet-500 to-fuchsia-500 text-white text-2xl p-16">
        Layout 
        <Hero data={value} func={Receive} />
        <About data={value} />
        <State />
      </div>
    </>
  );
};

export default Layout;
