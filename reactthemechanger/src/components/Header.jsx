import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";

const Header = () => {

    const {
        theme,
        toggleTheme,
      } = useContext(ThemeContext);

      const changeTheme = () => {
        toggleTheme();
      };
  return (
   <div className="header-div flex justify-between">
    <div className="nav-div px-3 py-1 m-2">
       <ul className="flex justify-between gap-5">
        <li className="">
        <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
        </li>
        <li className="">
        <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
        </li>
       </ul>
    </div>
     <div className="btn-div">
    <button
      className=" px-3 py-1 m-2 rounded border-none bg-blue-400 text-white cursor-pointer"
      onClick={() => changeTheme()}
    >
      Switch Theme
    </button>
  </div>
   </div>
  )
}

export default Header
