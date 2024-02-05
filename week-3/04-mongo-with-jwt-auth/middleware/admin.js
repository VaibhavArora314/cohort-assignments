// Middleware for handling auth

const { verifyJWT, decodeJWT } = require("../helpers");
const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Invalid format!",
    });
  }

  const token = authHeader.slice(7);
  if (!verifyJWT(token)) {
    return res.status(403).json({
      message: "Invalid token!",
    });
  }

  const payload = decodeJWT(token);
  const username = payload.username;

  const adminUser = Admin.findOne({ username });
  if (!adminUser) {
    return res.status(403).json({
      message: "No valid user exists!",
    });
  }
  req.body.username = username;
  
  next();
}

module.exports = adminMiddleware;
