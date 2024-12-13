const Story = require("../models/Story");

const createStory = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const story = new Story(req.body);
    const savedStory = await story.save();
    res.status(201).json(savedStory);
  } catch (error) {
    console.error("Error creating story:", error.message);
    res.status(500).json({
      message: "Failed to create story. Please check your data and try again.",
      error: error.message,
    });
  }
};

const getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ date: -1 });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get List of Companies
const getCompanies = async (req, res) => {
  try {
    const roles = await Story.distinct("company");
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching roles', error: error.message });
  }
}

// Get story for a specific company
const getStoryByCompany = async (req, res) => {
  const { company } = req.params;
  try {
    const story = await Story.findOne({ company });
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.json(story);
  } catch (error) {
    console.error("Error fetching story by company:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteStory = async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Story deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStory,
  getStories,
  getCompanies,
  getStoryByCompany,
  deleteStory,
};
