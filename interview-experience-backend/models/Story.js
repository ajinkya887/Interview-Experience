const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    role: { type: String, required: true },
    background: { type: String, required: true },
    preparation: { type: String, required: true },
    keyLearnings: { type: String, required: true },
    timeTaken: { type: String, required: true },
    finalThoughts: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Story', StorySchema);
