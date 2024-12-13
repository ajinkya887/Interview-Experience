import React, { useState } from 'react';
import axios from 'axios';
import { APIUrl } from '../utils';

const StoryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    background: '',
    preparation: '',
    interviewProcess: '',
    keyLearnings: '',
    timeTaken: '',
    finalThoughts: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${APIUrl}/api/stories`, formData);
      console.log('Story created:', response.data);
      window.alert("Your story has been added successfully!");
      // Clear form after submission
      setFormData({
        name: '',
        company: '',
        role: '',
        background: '',
        preparation: '',
        interviewProcess: '',
        keyLearnings: '',
        timeTaken: '',
        finalThoughts: '',
      });
    } catch (error) {
      console.error('Error creating story:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 font-mono">
        Add Interview Story
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Name of company"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            placeholder="ex.- Software Engineer"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Background:</label>
          <textarea
            name="background"
            value={formData.background}
            onChange={handleChange}
            required
            placeholder="Brief description of your educational and professional background."
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Preparation:</label>
          <textarea
            name="preparation"
            value={formData.preparation}
            onChange={handleChange}
            required
            placeholder="Explain how you prepared for the interview (e.g., studying algorithms, practicing coding problems)."
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Key Learnings:</label>
          <textarea
            name="keyLearnings"
            value={formData.keyLearnings}
            onChange={handleChange}
            required
            placeholder="What did you learn from the interview experience?"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Time Taken for preparation:</label>
          <input
            type="text"
            name="timeTaken"
            value={formData.timeTaken}
            onChange={handleChange}
            required
            placeholder="ex.- 6 months, 1 year"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Final Thoughts:</label>
          <textarea
            name="finalThoughts"
            value={formData.finalThoughts}
            onChange={handleChange}
            required
            placeholder="Any final thoughts or advice for others preparing for similar interviews?"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full"
        >
          Add Story
        </button>
      </form>
    </div>
  );
};

export default StoryForm;
