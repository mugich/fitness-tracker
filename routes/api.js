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


app.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    {$push: { exercises: body }} 
 
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


};