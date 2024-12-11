const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const experienceRoutes = require("./routes/experienceRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

// CORS middleware allowing all IP addresses
app.use(cors({
  origin: "*",  // Allows all domains/IPs
}));

app.use(bodyParser.json());

// Routes
app.use("/api/experiences", experienceRoutes);
app.use('/api/auth', authRoutes);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
