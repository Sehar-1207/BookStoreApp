import React, { useEffect, useState } from "react";
import logo from "/images/logo1.png";
import { NavLink, Link } from "react-router-dom"; 
import Logout from './logout';
import { authUser } from "../contex/authProvider";

const Navbar = () => {
  const [user] = authUser();
  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sticky navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-semibold transition-colors duration-200
            ${isActive ? "text-orange-500" : "text-black dark:text-white"}
            hover:bg-orange-400 hover:text-white`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-semibold transition-colors duration-200
            ${isActive ? "text-orange-500" : "text-black dark:text-white"}
            hover:bg-orange-400 hover:text-white`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-semibold transition-colors duration-200
            ${isActive ? "text-orange-500" : "text-black dark:text-white"}
            hover:bg-orange-400 hover:text-white`
          }
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-semibold transition-colors duration-200
            ${isActive ? "text-orange-500" : "text-black dark:text-white"}
            hover:bg-orange-400 hover:text-white`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar px-4 md:px-20 sticky top-0 z-50 transition-all duration-300
      bg-white dark:bg-gray-900
      ${sticky ? "shadow-md" : ""}`}
    >
      {/* LEFT */}
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow rounded-box
            bg-white dark:bg-gray-800"
          >
            {navItems}
          </ul>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            className="w-8 h-8 md:w-12 md:h-12 rounded-lg object-contain"
            src={logo}
            alt="logo"
          />
          <span
            className="text-lg md:text-2xl font-bold
          text-black dark:text-white sm:text-lg"
          >
            Book Store
          </span>
        </div>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg ">
          {navItems}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:block">
          <label
            className="px-3 py-1 border rounded-lg flex items-center gap-2 h-10
            border-gray-300 dark:border-gray-600"
          >
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent
              text-black dark:text-white"
            />
          </label>
        </div>

        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />

          {/* Sun */}
          <svg
            className="swap-off h-6 w-6 md:h-8 md:w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Moon */}
          <svg
            className="swap-on h-6 w-6 fill-current text-white"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3c0 .34.02.67.06 1A7 7 0 0021 12.79z" />
          </svg>
        </label>

        {/* Login */}
        {user ? (<Logout/>):(
<Link to="/login">
          <button
            className="btn btn-sm md:btn-md
            bg-orange-500 hover:bg-orange-400
            text-white border-none font-bold"
          >
            Login
          </button>
        </Link>
        ) }
        
      </div>
    </div>
  );
};

export default Navbar;