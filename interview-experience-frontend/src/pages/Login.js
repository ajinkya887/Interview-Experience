import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { APIUrl } from "../utils";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${APIUrl}/api/auth/login`, formData);
      setMessage(response.data.message);
      setError("");
      // On success, store the token and mark user as authenticated
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true); // Update state to indicate user is logged in
      navigate("/"); // Redirect to Home page
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setMessage(""); // Clear success message
    }
  };

  return (
    <div className="flex items-start justify-center mt-auto h-screen">
      <div className="bg-white shadow-xl rounded-lg p-7 w-full max-w-md bg-gradient-to-r from-blue-100 via-white to-blue-100">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Log In
        </h2>
        {message && (
          <p className="text-green-500 text-center mb-4">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
