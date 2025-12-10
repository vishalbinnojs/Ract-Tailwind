
import { NavLink } from "react-router-dom";

const Navbar = () => {
 

  return (
    <>
      
        <nav className="bg-yellow-700 p-4 flex justify-center gap-4 text-gray-200">
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} font-bold hover:text-green-500 duration-300`} to="/">Home</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} hover:text-green-500 duration-300`} to="/about">About</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} hover:text-green-500 duration-300 `}to="/services">Services</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} hover:text-green-500 duration-300 `}to="/Contact">Contact</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} hover:text-green-500 duration-300 `}to="/help">Help</NavLink>
        </nav>
         
      

   
    </>
  );
};

export default Navbar;
