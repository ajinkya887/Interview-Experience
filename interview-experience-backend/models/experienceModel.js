const mongoose = require("mongoose");

const roundSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
});

const experienceSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    jobRole: { type: String, required: true },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
    tags: { type: [String], required: true },
    rounds: [roundSchema],
    likes: { type: Number, default: 0 }, 
    dislikes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Experience", experienceSchema);
