const express = require("express");
const cors = require("cors");
const app = express();

// ✅ Basic CORS setup
app.use(cors());

// ✅ Parses JSON body
app.use(express.json());

// ✅ Global Request Logger (prints method, URL, headers, body)
app.use((req, res, next) => {
  console.log("---- Incoming Request ----");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("--------------------------");
  next();
});

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/activities", require("./routes/activityRoutes"));

// ✅ Debug Test Route (not behind a route file)
app.post("/test", (req, res) => {
  res.send("Test route is working!");
});

// ✅ Global Error Handler (catches unhandled exceptions)
app.use((err, req, res, next) => {
  console.error("🔥 GLOBAL ERROR HANDLER:");
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

module.exports = app;
