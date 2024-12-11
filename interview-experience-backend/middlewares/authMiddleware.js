const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Access denied, no token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user data (from the token) to the request object
    req.user = decoded;

    // Continue to the next middleware
    next();
  } catch (err) {
    return res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = authenticateToken;
