import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import AddExperiencePage from "./pages/AddExperiencePage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";
import ExperieceList from "./pages/ExperienceList";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddStoryForm from "./pages/AddStory";
import StoriesList from "./pages/StoriesList";
import StoryDetails from "./pages/StoryDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when the app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token"); // Remove token from localStorage
  };

  // Protected Route
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      alert("Please sign in or login first!");
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <div className="container mx-auto mt-12 flex-grow px-6">
          <Routes>
            {/* Route for Signup Page */}
            <Route
              path="/signup"
              element={<Signup setIsAuthenticated={setIsAuthenticated} />}
            />
            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/list"
              element={
                <ProtectedRoute>
                  <ExperieceList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <AddExperiencePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/company/:companyName"
              element={
                <ProtectedRoute>
                  <CompanyDetailsPage />
                </ProtectedRoute>
              }
            />
            {/* Route for add story */}
            <Route
              path="/add-story"
              element={
                <ProtectedRoute>
                  <AddStoryForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/stories"
              element={
                <ProtectedRoute>
                  <StoriesList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/stories/:company"
              element={
                <ProtectedRoute>
                  <StoryDetails />
                </ProtectedRoute>
              }
            />
            {/* Login route */}
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
