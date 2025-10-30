import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="sticky top-0 z-10 ">
        <nav className="p-4 bg-gray-700 flex justify-between text-white shadow-green-100/10 shadow-sm ">
          <div className="content-center">
            <strong>
              <i>Logo</i>
            </strong>
          </div>
          <div className="hidden md:flex bg-gray-700 gap-4 items-center justify-center">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-green-200" : "hover:text-green-200"}`
              }
              onClick={handleToggle}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-green-200" : "hover:text-green-200"}`
              }
              onClick={handleToggle}
              to="/popup"
            >
              Popup
            </NavLink>
          </div>
          <div className="flex gap-2">
            <button>||</button>
            <button>||</button>
            <button
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 block md:hidden"
              onClick={handleToggle}
            >
              ☰
            </button>
          </div>
          {/* Mobile View */}
          <div
            className={`${
              open ? "-translate-x-full" : " translate-x-0 delay-100 duration-500"
            } md:hidden absolute top-0 left-0 flex flex-col h-screen bg-black w-[50%] `}
          >
            <span
              className="inline-block absolute top-1 right-1 cursor-pointer p-1  bg-gray-900 rounded-xl"
              onClick={handleToggle}
            >
              ❌
            </span>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-200" : "hover:text-green-200"
                } mt-12 p-3 text-center hover:bg-gray-800`
              }
              onClick={handleToggle}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-200" : "hover:text-green-200"
                } p-3 text-center hover:bg-gray-800`
              }
              onClick={handleToggle}
              to="/popup"
            >
              Popup
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        {/* Child route will be rendered here */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
