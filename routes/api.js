const express = require("express");
const Workout = require("../models/workout");
const router = express.Router();

router.get("/api/workout", (req, res) => {
  Workout.find().then(workout) => {

  }
})