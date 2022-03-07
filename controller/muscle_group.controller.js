const db = require("../db");

class muscleGroupController {
  async createMuscleGroup(req, res) {
    const { muscle_group } = req.body;
    const newMuscleGroup = await db.query(
      "INSERT INTO muscle_group (muscle_group) values ($1) RETURNING *",
      [muscle_group]
    );
    console.log(newMuscleGroup);
    res.json("ok");
  }
  async getAllMuscleGroup(req, res) {
    const allMuscleGroup = await db.query("SELECT * FROM muscle_group");
    res.json(allMuscleGroup.rows);
  }
}

module.exports = new muscleGroupController();
