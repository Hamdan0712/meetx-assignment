const Activity = require("../models/Activity");
const Booking = require("../models/Booking");

// ✅ 1. List all activities (Public)
exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ 2. Book an activity (Protected)
exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ msg: "Activity not found" });
    }

    const booking = new Booking({
      user: req.user.id,
      activity: activityId,
    });

    await booking.save();
    res.status(201).json({ msg: "Activity booked successfully!" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// ✅ 3. Get all bookings by logged-in user (Protected)
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate(
      "activity"
    );
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};
