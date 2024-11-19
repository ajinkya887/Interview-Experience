import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddExperiencePage from './pages/AddExperiencePage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';

function App() {
  return (
    <Router>
      <div className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-lg font-bold">Interview Experiences</a>
          <div>
            <a href="/" className="mr-4 hover:underline">Home</a>
            <a href="/add" className="hover:underline">Add Experience</a>
          </div>
        </nav>
      </div>
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExperiencePage />} />
          <Route path="/company/:companyName" element={<CompanyDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
