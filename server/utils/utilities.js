const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/auth");

const verifyPassword = (userPassword, actualPassword) => {
  if (userPassword === actualPassword) return true;
  return false;
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("authHeader: ", authHeader);
  const token = authHeader.split(" ")[1];
  // console.log("Token: ", token);
  if (!token) {
    res.status(401).json({ success: false, message: "Invalid user!" });
  }
  jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    if (err) {
      res.status(403).json({ success: false, message: "Forbidden access!" });
    }
    // console.log("decodeTOken: ", decodedToken);
    req.user = decodedToken;
    next();
  });
};

const generateToken = (userId) => {
  const payload = { Id: userId };
  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, SECRET_KEY, options);
  return token;
};

module.exports = { verifyPassword, verifyToken, generateToken };
