const db = require("../db");

class exerciseTypeController {
  async createExerxiseType(req, res) {
    const { exercise_type } = req.body;
    const newExerciseType = await db.query(
      "INSERT INTO exercise_type (exercise_type) values ($1) RETURNING *",
      [exercise_type]
    );
    console.log(newExerciseType);
    res.json("ok");
  }
  async getAllExerciseType(req, res) {
    const allExerciseType = await db.query("SELECT * FROM exercise_type");
    res.json(allExerciseType.rows);
  }
}

module.exports = new exerciseTypeController();
