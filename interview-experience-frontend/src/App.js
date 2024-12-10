import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import AddExperiencePage from "./pages/AddExperiencePage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";
import ExperieceList from "./pages/Experience";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

AOS.init(); // Initialize AOS animations

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Section */}
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
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `relative text-lg font-medium px-4 hover:text-blue-600 transition duration-300 ${
                    isActive
                      ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
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
                      ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0"
                      : ""
                  }`
                }
              >
              Login
              </NavLink>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="container mx-auto mt-12 flex-grow px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<ExperieceList />} />
            <Route path="/add" element={<AddExperiencePage />} />
            <Route
              path="/company/:companyName"
              element={<CompanyDetailsPage />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-gray-200 py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">InterviewHub</h3>
                <p className="text-sm">
                  A platform where you can find real interview experiences,
                  coding challenges, and expert advice.
                </p>
              </div>
              <div className="hidden md:block"></div>
              {/* Contact */}
              <div className="md:col-span-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    <span className="font-semibold">Email:</span>{" "}
                    contact@interviewhub.com
                  </li>
                  <li className="text-gray-400">
                    <span className="font-semibold">Phone:</span> +1 234 567 890
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="md:col-span-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8 border-t border-gray-700 pt-4">
              <p className="text-sm">
                © {new Date().getFullYear()} InterviewHub. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
