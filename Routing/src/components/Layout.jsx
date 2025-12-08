import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  // Programmatic Navigation using useNavigate() hook
const navigate = useNavigate();
const isLoggedIn = true;
  const handleClick = () =>{
    // programmatic logic here to navigate to a page
if(isLoggedIn) navigate('/services')
  // if user logged in then we are navigating to services page on Clicking the button. We can navigate to the services even if we don't create the route for services page
}
  return (
    <>
      <header className="bg-zinc-800">
        <Navbar />
        <button className="my-4"onClick = {handleClick}>Navigate to Services</button>
      </header>
      <main>
        {/* Child Routes will be render here using Outlet*/}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
