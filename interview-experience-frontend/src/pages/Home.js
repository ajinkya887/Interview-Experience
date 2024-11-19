import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [experiences, setExperiences] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/experiences");
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };
    fetchExperiences();
  }, []);

  // Filter experiences based on companyName or jobRole
  const filteredExperiences = experiences.filter((exp) => {
    const query = searchQuery.toLowerCase();
    return (
      exp.companyName.toLowerCase().includes(query) || 
      exp.jobRole.toLowerCase().includes(query)
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
