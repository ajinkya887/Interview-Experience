const express = require("express");
const { createExperience, getExperiences, getExperienceByCompany, likeExperience, dislikeExperience } = require("../controllers/experienceController");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");


router.post("/", authenticateToken, createExperience);
router.get("/", authenticateToken, getExperiences);
router.get("/:companyName", authenticateToken, getExperienceByCompany);
router.patch("/:id/like", authenticateToken, likeExperience);
router.patch("/:id/dislike", authenticateToken, dislikeExperience);


module.exports = router;
