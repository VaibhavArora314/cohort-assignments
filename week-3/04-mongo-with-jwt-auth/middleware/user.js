const { User } = require("../db");
const { verifyJWT, decodeJWT } = require("../helpers");

function userMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({
        message: "Invalid token!",
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
  
    const user = User.findOne({ username });
    if (!user) {
      return res.status(403).json({
        message: "No valid user exists!",
      });
    }
    req.body.username = username;
  
    next();
}

module.exports = userMiddleware;