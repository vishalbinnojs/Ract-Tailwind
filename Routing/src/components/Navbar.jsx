
import { NavLink } from "react-router-dom";
const Navbar = () => {
 

  return (
    <>
      
        <nav className="bg-yellow-400 p-4 flex justify-center gap-4 text-gray-200">
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} font-bold`}to="/">Home</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} `}to="/about">About</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} `}to="/services">Services</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-green-500' : ''} `}to="/help">Help</NavLink>
        </nav>
         
      

   
    </>
  );
};

export default Navbar;
