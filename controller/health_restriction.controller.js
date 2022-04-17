const db = require("../db");

class healthRestrictionController {
  async createHealthRestriction(req, res) {
    const { health_restriction } = req.body;
    const newHealthRestriction = await db.query(
      "INSERT INTO health_restriction (health_restriction) values ($1) RETURNING *",
      [health_restriction]
    );
    console.log(newHealthRestriction);
    res.json(newHealthRestriction);
  }
  async getAllHealthRestriction(req, res) {
    const allHealthRestriction = await db.query(
      "SELECT * FROM health_restriction"
    );
    res.json(allHealthRestriction.rows);
  }
  //   async deleteExerxiseType(req, res) {}
}

module.exports = new healthRestrictionController();
