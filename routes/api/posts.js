const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

// @route POST api/posts is the endpoint
// @description Create a Post
// @access value Private (need to be logged in)
//router.get("/", (req, res) => res.send("Posts Route"));

router.get("/", (req, res) => res.send("Posts Route Working Test"));

module.exports = router;
