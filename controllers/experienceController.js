const Experience = require("../models/experienceModel");

// Create a new interview experience
const createExperience = async (req, res) => {
    try {
        const { companyName, jobRole, difficulty, tags, rounds } = req.body;
        const experience = new Experience({ companyName, jobRole, difficulty, tags, rounds });
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
            return res.status(404).json({ message: "No experiences found for this company." });
        }

        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createExperience, getExperiences, getExperienceByCompany };

