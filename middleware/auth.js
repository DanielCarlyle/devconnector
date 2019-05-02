const jwt = require("jsonwebtoken");
const config = require("config");

//middleware function - req,res, next
//has access to the re,res and the next is a callback to go to the next piece of middleware
module.exports = function(req, res, next) {
  //get token from header - header key
  const token = req.header("x-auth-token");

  //check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token,authorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
