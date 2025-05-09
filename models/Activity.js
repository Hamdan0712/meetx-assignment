const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  dateTime: { type: Date, required: true },
});

module.exports = mongoose.model("Activity", ActivitySchema);
