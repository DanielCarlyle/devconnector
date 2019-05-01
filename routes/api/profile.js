const express = require("express");
const router = express.Router();

// @route GET api/profile is the endpoint
// @description test route
// @access value Public
router.get("/", (req, res) => res.send("Profile Route"));

module.exports = router;
