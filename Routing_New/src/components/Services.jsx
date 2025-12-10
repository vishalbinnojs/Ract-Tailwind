import React from "react";
import {Outlet,Link} from "react-router-dom"
const Services = () => {
  return (
    <>
    <div className="page">Services
<div className="flex flex-col gap-4 mt-4 ">

    <Link to="s1">S1</Link>
    <Link to="s2">S2</Link>
</div>
    </div>
    <div className="bg-amber-500 text-center font-bold">
        <Outlet/>
    </div>
    </>
  )
};

export default Services;
