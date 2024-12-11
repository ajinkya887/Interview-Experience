import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated, handleLogout }) => {
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
          className="text-3xl font-extrabold tracking-wide text-gray-800 hover:text-blue-600 transition duration-300"
        >
          Interview<span className="text-orange-700">Hub</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `relative text-lg font-medium px-4 hover:text-blue-600 transition duration-300 ${
                isActive
                  ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                  : ""
              }`
            }
          >
            Company List
          </NavLink>
          <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `relative text-lg font-medium px-4 hover:text-blue-600 transition duration-300 ${
                isActive
                  ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                  : ""
              }`
            }
          >
            Add Experience
          </NavLink>
          <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>

          {!isAuthenticated ? (
            <>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `relative text-lg font-medium px-4 hover:text-blue-600 transition duration-300 ${
                    isActive
                      ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:top-8 after:left-0"
                      : ""
                  }`
                }
              >
                SignUp
              </NavLink>
              <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `relative text-lg font-medium px-4 hover:text-blue-600 transition duration-300 ${
                    isActive
                      ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:top-8 after:left-0"
                      : ""
                  }`
                }
              >
                Login
              </NavLink>
            </>
          ) : (
            <>
              <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
              <button
                onClick={handleLogoutClick}
                className="relative text-lg font-medium px-4 hover:text-blue-600 transition duration-300"
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
