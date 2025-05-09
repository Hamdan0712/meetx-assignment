const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("name", "Name is required").notEmpty(),
    body("email", "Please enter a valid email").isEmail(),
    body("phone", "Phone is required").notEmpty(),
    body("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  register
);

router.post(
  "/login",
  [
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password is required").exists(),
  ],
  login
);

module.exports = router;
