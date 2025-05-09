const express = require("express");
const router = express.Router();
const {
  listActivities,
  bookActivity,
  getMyBookings,
} = require("../controllers/activityController");
const auth = require("../middleware/auth");

// Public: Get all available activities
router.get("/", listActivities);

// Protected: Book an activity
router.post("/book", auth, bookActivity);

// Protected: Get my bookings
router.get("/my-bookings", auth, getMyBookings);

module.exports = router;
