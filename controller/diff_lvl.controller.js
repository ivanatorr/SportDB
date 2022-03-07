const db = require("../db");

class diffLvlController {
  async createDiffLvl(req, res) {
    const { diff_lvl } = req.body;
    const newDiffLvl = await db.query(
      "INSERT INTO diff_lvl (diff_lvl) values ($1) RETURNING *",
      [diff_lvl]
    );
    console.log(newDiffLvl);
    res.json(newDiffLvl);
  }
  async getAllDiffLvl(req, res) {
    const allDiffLvlv = await db.query("SELECT * FROM diff_lvl");
    res.json(allDiffLvlv.rows);
  }
  //   async deleteExerxiseType(req, res) {}
}

module.exports = new diffLvlController();
