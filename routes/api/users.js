const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route POST api/users is the endpoint
// @description register route
// @access value Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please use a password with six or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    //console.log(req.body);
    const errors = validationResults(req);
    if()
    res.send("User Route");
  }
);

module.exports = router;
