var db = require("../models");

module.exports = function(app) {
app.get("/api/workouts", (req, res) => {
  db.Workout.find().then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});
}