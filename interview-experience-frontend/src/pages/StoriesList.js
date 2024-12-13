import React, { useEffect, useState } from "react";
import { APIUrl } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]); 
  const [selectedCompany, setSelectedCompany] = useState("All"); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(`${APIUrl}/api/stories`);
        setStories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stories:", error);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${APIUrl}/api/stories/companies`);
        if (Array.isArray(response.data.data)) {
          setCompanies(["All", ...response.data.data]);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  const filteredStories = stories.filter(
    (story) => selectedCompany === "All" || story.company === selectedCompany
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 font-mono">
        Interview Experiences
      </h1>

      {/* Add Story Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => navigate("/add-story")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
        >
          Add Your Story
        </button>
      </div>
      
      {/* Filter by Company Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="w-full md:w-2/3 lg:w-1/2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading stories...</p>
      ) : filteredStories.length === 0 ? (
        <p className="text-center text-gray-600">No stories found.</p>
      ) : (
        <div className="space-y-6">
          {filteredStories.map((story) => (
            <div
              key={story._id}
              className="p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{story.company}</h2>
              <p className="text-gray-800 mb-2">
                <strong>Role:</strong> {story.role}
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Name:</strong> {story.name}
              </p>
              <p className="text-gray-800 mb-4">
                <strong>Key Learnings:</strong> {story.keyLearnings}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Date:</strong> {new Date(story.date).toLocaleDateString()}
              </p>
              <Link
                to={`/stories/${story.company}`}
                className="inline-block text-blue-500 font-semibold text-lg hover:text-blue-700 underline"
              >
                View Full Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoriesList;
