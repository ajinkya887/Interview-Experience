import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APIUrl } from "../utils";

function CompanyDetailsPage() {
  const { companyName } = useParams(); // Retrieve the company name from the URL
  const [companyDetails, setCompanyDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [cooldown, setCooldown] = useState(new Set()); // Set to track cooldowns

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(
          `${APIUrl}/api/experiences/${companyName}`
        );
        setCompanyDetails(response.data);

        const initialLikes = {};
        const initialDislikes = {};
        response.data.forEach((exp) => {
          initialLikes[exp._id] = exp.likes;
          initialDislikes[exp._id] = exp.dislikes;
        });
        setLikes(initialLikes);
        setDislikes(initialDislikes);
      } catch (error) {
        console.error("Error fetching company details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanyDetails();
  }, [companyName]);

  // Handle like button click
  const handleLike = async (id) => {
    if (cooldown.has(id)) {
      alert("You have liked or disliked the experience.");
      return;
    }

    try {
      const response = await axios.patch(
        `${APIUrl}/api/experiences/${id}/like`
      );
      setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: response.data.likes,
      }));

      // Add to cooldown set
      setCooldown((prevCooldown) => new Set(prevCooldown.add(id)));

      // Remove from cooldown after 10 minutes
      setTimeout(() => {
        setCooldown((prevCooldown) => {
          const updated = new Set(prevCooldown);
          updated.delete(id);
          return updated;
        });
      }, 10 * 60 * 1000); // 10 minutes in milliseconds
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  // Handle dislike button click
  const handleDislike = async (id) => {
    if (cooldown.has(id)) {
      alert("You have liked or disliked the experience.");
      return;
    }

    try {
      const response = await axios.patch(
        `${APIUrl}/api/experiences/${id}/dislike`
      );
      setDislikes((prevDislikes) => ({
        ...prevDislikes,
        [id]: response.data.dislikes,
      }));

      // Add to cooldown set
      setCooldown((prevCooldown) => new Set(prevCooldown.add(id)));

      // Remove from cooldown after 10 minutes
      setTimeout(() => {
        setCooldown((prevCooldown) => {
          const updated = new Set(prevCooldown);
          updated.delete(id);
          return updated;
        });
      }, 10 * 60 * 1000); // 10 minutes in milliseconds
    } catch (error) {
      console.error("Error updating dislike:", error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this experience?");
    if(confirmDelete){
      try {
        await axios.delete(`${APIUrl}/api/experiences/${id}`);
        setCompanyDetails((prevDetails) =>
          prevDetails.filter((exp) => exp._id !== id)
        );
      } catch (error) {
        console.error("Error deleting experience:", error);
      }
    }
  };

  return (
    <div className="px-4 py-6 min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 font-mono">
          Details for {companyName}{" "}
        </h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading details...</p>
        ) : companyDetails.length === 0 ? (
          <p className="text-center text-gray-500">
            No details available for this company.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyDetails.map((exp) => (
              <div
                key={exp._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl p-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {exp.jobRole}
                </h2>
                <p className="text-gray-600">
                  <strong>Difficulty:</strong> {exp.difficulty}
                </p>
                <p className="text-gray-600">
                  <strong>Tags:</strong> {exp.tags.join(", ")}
                </p>
                <h3 className="mt-4 font-semibold text-gray-700">Rounds:</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  {exp.rounds.map((round, index) => (
                    <li key={index} className="mb-2">
                      <p>
                        <strong>Type:</strong> {round.type}
                      </p>
                      <p>
                        <strong>Description:</strong> {round.description}
                      </p>
                      <p>
                        <strong>Duration:</strong> {round.duration}
                      </p>
                      <p>
                        <strong>Difficulty:</strong> {round.difficulty}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Like and Dislike Buttons */}
                <div className="mt-6 flex space-x-4 justify-between">
                  <button
                    onClick={() => handleLike(exp._id)}
                    className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Like 👍 {likes[exp._id] || 0}
                  </button>
                  <button
                    onClick={() => handleDislike(exp._id)}
                    className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Dislike 👎 {dislikes[exp._id] || 0}
                  </button>
                  <button
                    onClick={() => handleDelete(exp._id)}
                    className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyDetailsPage;
