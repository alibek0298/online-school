const express = require("express");
const authRoutes = require("./auth/auth");
const userRoutes = require("./users/user");
const classRoutes = require("./classes/class");
const lessonRoutes = require("./lessons/lesson");

const router = express.Router();

// router.use("/auth", authRoutes);
router.use("/users", userRoutes);
// router.use("/classes", classRoutes);
// router.use("/lessons", lessonRoutes);

module.exports = router;
