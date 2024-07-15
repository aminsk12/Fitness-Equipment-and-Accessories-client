import { NavLink } from "react-router-dom";
import { navLinks } from "../../../utils/navLinks";
import logo from "../../../assets/img/download.png"

const Header = () => {
  return (
    <div className="navbar bg-white shadow-sm  sticky top-0 bg-opacity-30 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg mt-3 p-2 w-52 z-10"
          >
            {navLinks.map((navlink, index) => (
              <li key={index} className="hover:bg-gray-100 rounded-md">
                
                  <NavLink
                    to={navlink.path}
                    className="block px-4 py-2 text-gray-700 hover:text-gray-500 transition duration-300 ease-in-out btn btn-ghost"
                  >
                    {navlink.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5  bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                  </NavLink>
               
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center" >
          
          <a href="/" className="ml-2 flex justify-center items-center text-3xl font-bold text-gray-800">
          <img className="w-20 h-20 " src = {logo} alt=" Logo" />
          Fitness Club
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu-horizontal space-x-3">
          {navLinks.map((navlink, index) => (
            <li key={index} className="relative group ">
              
                <NavLink
                  to={navlink.path}
                  className="text-gray-700 hover:text-gray-500 text-lg font-medium transition duration-300 ease-in-out btn btn-ghost"
                >
                  {navlink.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5  bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </NavLink>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
