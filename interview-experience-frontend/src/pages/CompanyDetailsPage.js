import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CompanyDetailsPage() {
  const { companyName } = useParams(); // Retrieve the company name from the URL
  const [companyDetails, setCompanyDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/experiences/${companyName}`
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
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/experiences/${id}/like`
      );
      setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: response.data.likes, // Correct: Update with the new likes count
      }));
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  // Handle dislike button click
  const handleDislike = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/experiences/${id}/dislike`
      );
      setDislikes((prevDislikes) => ({
        ...prevDislikes,
        [id]: response.data.dislikes, // Correct: Update with the new dislikes count
      }));
    } catch (error) {
      console.error("Error updating dislike:", error);
    }
  };

  // handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/experiences/${id}`);
      setCompanyDetails((prevDetails) =>
        prevDetails.filter((exp) => exp._id !== id)
      );
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">
        Details for {companyName}
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
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold">{exp.jobRole}</h2>
              <p className="text-gray-600">
                <strong>Difficulty:</strong> {exp.difficulty}
              </p>
              <p className="text-gray-600">
                <strong>Tags:</strong> {exp.tags.join(", ")}
              </p>
              <h3 className="mt-4 font-bold">Rounds:</h3>
              <ul className="list-disc pl-5">
                {exp.rounds.map((round, index) => (
                  <li key={index}>
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
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleLike(exp._id)}
                  className="bg-green-500 text-white p-4 rounded-lg active:ring-4 active:ring-green-300 focus:ring-4 focus:ring-yellow-300 transition duration-300"
                >
                  Like ({likes[exp._id] || 0})
                </button>
                <button
                  onClick={() => handleDislike(exp._id)}
                  className="bg-red-500 text-white p-4 rounded-lg active:ring-4 active:ring-green-300 focus:ring-4 focus:ring-yellow-300 transition duration-300"
                >
                  Dislike ({dislikes[exp._id] || 0})
                </button>
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="bg-gray-500 text-white p-4 rounded-lg active:ring-4 active:ring-green-300 focus:ring-4 focus:ring-yellow-300 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompanyDetailsPage;
