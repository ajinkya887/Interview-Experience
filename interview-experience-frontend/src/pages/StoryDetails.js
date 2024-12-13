import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { APIUrl } from "../utils";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const StoryDetails = () => {
  const { company } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(`${APIUrl}/api/stories/${company}`);
        setStory(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching story:", error);
        setLoading(false);
      }
    };

    fetchStory();
  }, [company]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading story...</p>;
  }

  if (!story) {
    return <p className="text-center text-gray-600">Story not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 font-mono">
        {story.company} - {story.role}
      </h1>
      <div className="space-y-4">
        <p className="text-gray-800">
          <strong>Name:</strong> {story.name}
        </p>
        <p className="text-gray-800">
          <strong>Background:</strong> {story.background}
        </p>
        <p className="text-gray-800">
          <strong>Preparation:</strong> {story.preparation}
        </p>
        <p className="text-gray-800">
          <strong>Interview Process:</strong> {story.interviewProcess}
        </p>
        <p className="text-gray-800">
          <strong>Key Learnings:</strong> {story.keyLearnings}
        </p>
        <p className="text-gray-800">
          <strong>Time Taken:</strong> {story.timeTaken}
        </p>
        <p className="text-gray-800">
          <strong>Final Thoughts:</strong> {story.finalThoughts}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Date:</strong> {new Date(story.date).toLocaleDateString()}
        </p>
        <button
          onClick={() => navigate("/stories")}
          className="mb-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full flex items-center gap-2 hover:from-blue-600 hover:to-blue-800 transition-all"
        >
          <FaArrowLeft className="text-lg" />
          Back to Stories List
        </button>
      </div>
    </div>
  );
};

export default StoryDetails;
