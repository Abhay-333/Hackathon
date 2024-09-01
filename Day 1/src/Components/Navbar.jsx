import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Users from "./Users";
// import logo from "../Resources/png/logo-white.png";
import "../Resources/fonts/Gugi.css";
import "../Resources/fonts/Gugi.ttf"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-custom px-4 lg:px-6 py-3 shadow-md w-full z-10 top-0">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
          <div className="w-[100%] overflow-hidden rounded-md">
            {/* <img src={logo} className="mr-3" alt="Logo" /> */}
            <h1 className="ffont-gugi uppercase">Virtual Vortex</h1>
          </div>

          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">
            My Portfolio
          </span> */}
        </a>

        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zM3 10h14a1 1 0 110 2H3a1 1 0 010-2zM3 15h14a1 1 0 110 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link block py-2 pr-4 pl-3 rounded lg:bg-transparent lg lg:p-0"
                    : "nav-link block py-2 pr-4 pl-3 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-300 lg:p-0"
                }
              >
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                path={<Users />}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link block py-2 pr-4 pl-3 rounded lg:bg-transparent lg lg:p-0"
                    : "nav-link block py-2 pr-4 pl-3 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-300 lg:p-0"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link block py-2 pr-4 pl-3 rounded lg:bg-transparent lg lg:p-0"
                    : "nav-link block py-2 pr-4 pl-3 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-300 lg:p-0"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link block py-2 pr-4 pl-3 rounded lg:bg-transparent lg lg:p-0"
                    : "nav-link block py-2 pr-4 pl-3 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-300 lg:p-0"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
