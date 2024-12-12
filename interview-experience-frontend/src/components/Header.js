import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assests/Logo.png"

const Header = ({ isAuthenticated, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout(); // Call the handleLogout function passed as prop
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="sticky top-0 z-10 text-center mb-8 py-5 px-4 bg-gradient-to-r from-red-200 via-red-100 to-red-200 shadow-lg rounded-lg">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo / Brand Name */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-3xl font-extrabold tracking-wide text-gray-800 hover:text-blue-600 transition duration-300"
        >
          {/* Logo */}
          <img
            src={Logo}
            alt="InterviewHub Logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          {/* Text */}
          <span>
            Interview<span className="text-orange-700">Hub</span>
          </span>
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-red-100 md:bg-transparent shadow-lg md:shadow-none rounded-lg p-4 md:p-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-lg font-medium px-4 py-2 hover:text-blue-600 transition duration-300 ${
                isActive
                  ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
          <div className="w-full md:w-[1px] h-[1px] md:h-6 bg-gray-300 my-2 md:my-0 md:mx-2"></div>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `relative text-lg font-medium px-4 py-2 hover:text-blue-600 transition duration-300 ${
                isActive
                  ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                  : ""
              }`
            }
          >
            Company List
          </NavLink>
          <div className="w-full md:w-[1px] h-[1px] md:h-6 bg-gray-300 my-2 md:my-0 md:mx-2"></div>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `relative text-lg font-medium px-4 py-2 hover:text-blue-600 transition duration-300 ${
                isActive
                  ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                  : ""
              }`
            }
          >
            Add Experience
          </NavLink>
          {!isAuthenticated ? (
            <>
              <div className="w-full md:w-[1px] h-[1px] md:h-6 bg-gray-300 my-2 md:my-0 md:mx-2"></div>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `relative text-lg font-medium px-4 py-2 hover:text-blue-600 transition duration-300 ${
                    isActive
                      ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                      : ""
                  }`
                }
              >
                SignUp
              </NavLink>
              <div className="w-full md:w-[1px] h-[1px] md:h-6 bg-gray-300 my-2 md:my-0 md:mx-2"></div>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `relative text-lg font-medium px-4 py-2 hover:text-blue-600 transition duration-300 ${
                    isActive
                      ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                      : ""
                  }`
                }
              >
                Login
              </NavLink>
            </>
          ) : (
            <>
              <div className="w-full md:w-[1px] h-[1px] md:h-6 bg-gray-300 my-2 md:my-0 md:mx-2"></div>
              <button
                onClick={handleLogoutClick}
                className="relative text-lg font-medium px-4 py-2 hover:text-blue-600 transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
