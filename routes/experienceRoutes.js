const express = require("express");
const { createExperience, getExperiences, getExperienceByCompany } = require("../controllers/experienceController");
const router = express.Router();

router.post("/", createExperience); // Add a new experience
router.get("/", getExperiences); // Get all experiences
router.get("/:companyName", getExperienceByCompany); // Get experiences for a specific company



module.exports = router;
