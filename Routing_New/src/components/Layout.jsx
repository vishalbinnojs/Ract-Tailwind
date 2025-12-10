import React from "react";
import { Outlet,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  // Programmatic Navigation using useNavigate() hook
  const navigate = useNavigate();
  const isLoggedIn  = true;
  const handleNavigation = () =>{
    // Program Logic here: After that user will be redirected to contact page
if(isLoggedIn) {

  navigate('/contact')
}
  }
  return (
    <>
      <header className="bg-zinc-700 text-xl">
        <Navbar />
        <button className="bg-black hover:outline-2 p-2 my-2 cursor-pointer text-gray-200 rounded-lg"onClick={handleNavigation}>Naviagate to Contact</button>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
