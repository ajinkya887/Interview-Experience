const express = require("express");
const {
  createStory,
  getStories,
  getStoryByCompany,
  deleteStory,
  getCompanies,
} = require("../controllers/storiesController");
const router = express.Router();


//Get List of Companies
router.get("/companies", getCompanies)

// Create a new story
router.post("/", createStory);

// Get all stories
router.get("/", getStories);

// Get stories filtered by company
router.get("/:company", getStoryByCompany);

// Delete a story
router.delete("/:id", deleteStory);

module.exports = router;
