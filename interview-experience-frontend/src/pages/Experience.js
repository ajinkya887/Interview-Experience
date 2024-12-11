import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch } from "react-icons/fa"; // Add a search icon

function ExperieceList() {
  const [experiences, setExperiences] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/experiences");
        setExperiences(response.data);
        if (response.data && Array.isArray(response.data.roles)) {
          setRoles(["All", ...response.data.roles]);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };
    fetchExperiences();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/experiences/roles");
        
        if (Array.isArray(response.data.data)) {
          setRoles(["All", ...response.data.data]);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching roles:", error.response ? error.response.data : error.message);
      }
    };
    fetchRoles();
  }, []);

  // Filter experiences based on companyName, jobRole, or selected role
  const filteredExperiences = experiences.filter((exp) => {
    const query = searchQuery.toLowerCase();
    const roleMatch = selectedRole === "All" || exp.jobRole === selectedRole;
    return (
      (exp.companyName.toLowerCase().includes(query) || exp.jobRole.toLowerCase().includes(query)) &&
      roleMatch
    );
  });

  const uniqueExperiences = Array.from(
    new Map(
      filteredExperiences.map((exp) => [`${exp.companyName}-${exp.jobRole}`, exp])
    ).values()
  );

  return (
    <div className="px-4 py-6 min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 font-mono">Interview Experiences</h1>

      {/* Search Section */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by company or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Filter by Job Role Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full md:w-2/3 lg:w-1/2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Displaying Experiences */}
      {filteredExperiences.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No experiences found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueExperiences.map((exp) => (
            <Link
              to={`/company/${exp.companyName}`}
              key={exp.companyName}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{exp.companyName}</h2>
              <p className="text-gray-600 mt-2"><strong>Role:</strong> {exp.jobRole}</p>
              <p className="text-gray-600"><strong>Difficulty:</strong> {exp.difficulty}</p>
              <p className="text-gray-600"><strong>Tags:</strong> {exp.tags.join(", ")}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperieceList;
