const express = require("express");
const router = express.Router();

// @route GET api/auth
// @description test route
// @access value Public
router.get("/", (req, res) => res.send("Authorization Route"));

module.exports = router;
