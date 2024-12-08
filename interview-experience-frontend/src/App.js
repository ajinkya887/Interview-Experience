import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddExperiencePage from "./pages/AddExperiencePage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              Interview Experiences
            </a>
            <div className="flex items-center space-x-4">
              <a href="/" className="hover:underline transition">
                Home
              </a>
              <a href="/add" className="hover:underline transition">
                Add Experience
              </a>
              {/* <a
                href="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Log In
              </a>
              <a
                href="/signin"
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Sign Up
              </a> */}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="container mx-auto mt-12 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddExperiencePage />} />
            <Route
              path="/company/:companyName"
              element={<CompanyDetailsPage />}
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="bg-blue-800 text-white text-center py-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Interview Experiences. All rights
            reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
