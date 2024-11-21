const Experience = require("../models/experienceModel");

// Create a new interview experience
const createExperience = async (req, res) => {
  try {
    const { companyName, jobRole, difficulty, tags, rounds } = req.body;
    const experience = new Experience({
      companyName,
      jobRole,
      difficulty,
      tags,
      rounds,
    });
    const savedExperience = await experience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all interview experiences
const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get interview experiences for a specific company
const getExperienceByCompany = async (req, res) => {
  try {
    const { companyName } = req.params;
    const experiences = await Experience.find({ companyName: companyName });

    if (!experiences || experiences.length === 0) {
      return res
        .status(404)
        .json({ message: "No experiences found for this company." });
    }

    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const likeExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
    if (!experience) return res.status(404).send("Experience not found");

    experience.likes += 1; // Increment like count
    await experience.save();
    res.json({ likes: experience.likes });
  } catch (error) {
    res.status(500).json({ message: "Error liking experience" });
  }
};

// Increment dislike count for an experience
const dislikeExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
    if (!experience) return res.status(404).send("Experience not found");

    experience.dislikes += 1; // Increment dislike count
    await experience.save();
    res.json({ dislikes: experience.dislikes });
  } catch (error) {
    res.status(500).json({ message: "Error disliking experience" });
  }
};

module.exports = {
  createExperience,
  getExperiences,
  getExperienceByCompany,
  likeExperience,
  dislikeExperience,
};
