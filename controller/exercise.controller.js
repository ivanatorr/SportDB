const db = require("../db");

class exerciseController {
  async createExercise(req, res) {
    const {
      exercise_name,
      id_muscle_group,
      id_equipment_type,
      id_diff_lvl,
      id_exercise_type,
      num_reps,
      time_reps,
    } = req.body;
    const newExercise = await db
      .query(
        "INSERT INTO exercise (exercise_name, id_muscle_group, id_equipment_type, id_diff_lvl, id_exercise_type, num_reps, time_reps) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [
          exercise_name,
          id_muscle_group,
          id_equipment_type,
          id_diff_lvl,
          id_exercise_type,
          num_reps,
          time_reps,
        ]
      )
      .catch((e) => {
        console.log(e);
      });
    console.log(newExercise);
    res.json("ok");
  }
  async getExercise(req, res) {
    const exercise = await db
      .query(
        `SELECT exercise.id, exercise.exercise_name, exercise.num_reps, exercise.time_reps, muscle_group.muscle_group, exercise_type.exercise_type, diff_lvl.diff_lvl, equipment_type.equipment_type
          FROM exercise
          JOIN muscle_group ON muscle_group.id = exercise.id_muscle_group
          JOIN exercise_type ON exercise_type.id = exercise.id_exercise_type
          JOIN equipment_type ON equipment_type.id = exercise.id_equipment_type
          JOIN diff_lvl ON diff_lvl.id = exercise.id_diff_lvl;
      `
      )
      .catch((e) => {
        console.log(e);
      });
    console.log(exercise);
    res.json(exercise.rows);
  }
  //   async updateExerxiseType(req, res) {
  //     // const { id, exercise_type } = req.body;
  //     // const exercise_type = await db.query()
  //   }
  async deleteExerxise(req, res) {
    const id = req.params.id;
    const exercise = await db
      .query("DELETE FROM exercise WHERE id = $1", [id])
      .catch((e) => {
        console.log(e);
      });
    res.json(exercise.rows[0]);
  }
  async updateExercise(req, res) {
    const {
      id,
      exercise_name,
      id_muscle_group,
      id_equipment_type,
      id_diff_lvl,
      id_exercise_type,
      num_reps,
      time_reps,
    } = req.body;
    const exercise = await db
      .query(
        "UPDATE exercise set exercise_name=$1, id_muscle_group=$2, id_equipment_type=$3, id_diff_lvl=$4, id_exercise_type=$5, num_reps=$6, time_reps=$7 where id=$8 RETURNING *",
        [
          exercise_name,
          id_muscle_group,
          id_equipment_type,
          id_diff_lvl,
          id_exercise_type,
          num_reps,
          time_reps,
          id,
        ]
      )
      .catch((e) => {
        console.log(e);
      });
    res.json(exercise.rows[0]);
  }
}

module.exports = new exerciseController();
