require("dotenv").config();
const mongoose = require("mongoose");
const Activity = require("./models/Activity");
const connectDB = require("./config/db");

const seedActivities = [
  {
    title: "Cricket Match",
    description: "T20 League Match at the stadium",
    location: "Chennai",
    dateTime: new Date("2025-05-10T16:00:00Z"),
  },
  {
    title: "Football Friendly",
    description: "Friendly match at the local turf",
    location: "Bangalore",
    dateTime: new Date("2025-05-12T18:00:00Z"),
  },
  {
    title: "Movie Night",
    description: "Latest blockbuster screening",
    location: "PVR Velachery",
    dateTime: new Date("2025-05-11T20:00:00Z"),
  },
];

const seedDB = async () => {
  try {
    await connectDB();
    await Activity.deleteMany(); // optional: clears old data
    const inserted = await Activity.insertMany(seedActivities);
    console.log("✅ Sample activities inserted:");
    console.table(inserted.map((a) => ({ id: a._id, title: a.title })));
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding activities:", err);
    process.exit(1);
  }
};

seedDB();
