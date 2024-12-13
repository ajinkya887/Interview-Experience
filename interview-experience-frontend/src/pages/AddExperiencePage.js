import React, { useState } from "react";
import axios from "axios";
import { APIUrl } from "../utils";

function AddExperience() {
  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [tags, setTags] = useState("");
  const [rounds, setRounds] = useState([
    { type: "", description: "", duration: "", difficulty: "Easy" },
  ]);

  const handleAddRound = () => {
    setRounds([...rounds, { type: "", description: "", duration: "", difficulty: "Easy" }]);
  };

  const handleRoundChange = (index, field, value) => {
    const updatedRounds = [...rounds];
    updatedRounds[index][field] = value;
    setRounds(updatedRounds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const experienceData = {
      companyName,
      jobRole,
      difficulty,
      tags: tags.split(",").map((tag) => tag.trim()),
      rounds,
    };

    try {
      const response = await axios.post(`${APIUrl}/api/experiences`, experienceData);
      alert("Experience added successfully!");
      setCompanyName("");
      setJobRole("");
      setDifficulty("Easy");
      setTags("");
      setRounds([{ type: "", description: "", duration: "", difficulty: "Easy" }]);
    } catch (error) {
      console.error("Error adding experience:", error);
      alert("Failed to add experience.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6  bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 font-mono">Add Interview Experiences</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Job Role:</label>
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
            className="w-full p-2 border rounded"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Tags (comma-separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Rounds:</label>
          {rounds.map((round, index) => (
            <div key={index} className="p-4 mb-4 border rounded bg-gray-100">
              <div className="mb-2">
                <label className="block font-semibold">Type:</label>
                <input
                  type="text"
                  value={round.type}
                  onChange={(e) => handleRoundChange(index, "type", e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Description:</label>
                <textarea
                  value={round.description}
                  onChange={(e) => handleRoundChange(index, "description", e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Duration (e.g., 90 minutes):</label>
                <input
                  type="text"
                  value={round.duration}
                  onChange={(e) => handleRoundChange(index, "duration", e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block font-semibold">Difficulty:</label>
                <select
                  value={round.difficulty}
                  onChange={(e) => handleRoundChange(index, "difficulty", e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddRound}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Another Round
          </button>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Add Experience
        </button>
      </form>
    </div>
  );
}

export default AddExperience;
