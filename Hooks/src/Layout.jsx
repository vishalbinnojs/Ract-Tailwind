import React from "react";
import {NavLink, Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <>
    <header>
        <nav className='flex justify-center gap-3 items-center bg-[#444444] p-2'>
            <NavLink to="/useRef" className={({isActive})=> `hover:text-gray-200 ${isActive ? "text-amber-400" : "text-white"}`}>useRef</NavLink>
           
        </nav>
    </header>
    <main>
        {<Outlet />}
    </main>
    </>
  )
};

export default Layout;
