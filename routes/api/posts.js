const express = require("express");
const router = express.Router();

// @route GET api/posts is the endpoint
// @description test route
// @access value Public
router.get("/", (req, res) => res.send("Posts Route"));

module.exports = router;
