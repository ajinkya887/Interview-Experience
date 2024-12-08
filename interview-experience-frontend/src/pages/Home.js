import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
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
        console.log("Roles response:", response);
        console.log("Roles response data:", response.data);
        
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
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Interview Experiences</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by company or role..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-2/3 p-2 border rounded-lg shadow-sm"
        />
      </div>

      {/* Filter by Job Role Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-2/3 p-2 border rounded-lg shadow-sm"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {filteredExperiences.length === 0 ? (
        <p className="text-center text-gray-500">No experiences found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueExperiences.map((exp) => (
            <Link
              to={`/company/${exp.companyName}`}
              key={exp.companyName}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{exp.companyName}</h2>
              <p className="text-gray-600"><strong>Role:</strong> {exp.jobRole}</p>
              <p className="text-gray-600"><strong>Difficulty:</strong> {exp.difficulty}</p>
              <p className="text-gray-600"><strong>Tags:</strong> {exp.tags.join(", ")}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
