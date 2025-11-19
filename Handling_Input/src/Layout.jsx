import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <nav className="p-4 bg-pink-200 flex gap-4 font-bold">
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/controlled"
          >
            Controlled
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/uncontrolled"
          >
            Uncontrolled
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/multipleInputs"
          >
            Multiple Inputs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/checked"
          >
            Multiple Checked
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/checkedAll"
          >
            Checked All
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/form"
          >
            Form
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/radio"
          >
            Radio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/radioGrouped"
          >
            Radio Grouped
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-gray-700 ${isActive ? "text-black" : "text-gray-700"}`
            }
            to="/selectDropdown"
          >
            Select Dropdown
          </NavLink>
        </nav>
      </header>
      <main className="">
        {/* Child route will be rendered here */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
