const express = require("express");
const router = express.Router();
//bring in the middleware
const auth = require("../../middleware/auth");

// @route GET api/auth
// @description test route
// @access value Public
//add middleware as 2nd parameter below
router.get("/", auth, (req, res) => res.send("Authorization Route"));

module.exports = router;
