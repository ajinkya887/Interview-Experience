const express = require("express");
const {
  createExperience,
  getExperiences,
  getExperienceByCompany,
  likeExperience,
  dislikeExperience,
  deleteExperience, 
  getRoles
} = require("../controllers/experienceController");
const router = express.Router();

router.get("/roles", getRoles)
router.post("/", createExperience);
router.get("/", getExperiences);
router.get("/:companyName", getExperienceByCompany);
router.patch("/:id/like", likeExperience);
router.patch("/:id/dislike", dislikeExperience);
router.delete("/:id", deleteExperience);

module.exports = router;
