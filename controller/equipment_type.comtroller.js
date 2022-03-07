const db = require("../db");

class equipmentTypeController {
  async createEquipmentType(req, res) {
    const { equipment_type } = req.body;
    const newEquipmentType = await db.query(
      "INSERT INTO equipment_type (equipment_type) values ($1) RETURNING *",
      [equipment_type]
    );
    console.log(newEquipmentType);
    res.json("ok");
  }
  async getAllEquipmentType(req, res) {
    const allEquipmentType = await db.query("SELECT * FROM equipment_type");
    res.json(allEquipmentType.rows);
  }
}

module.exports = new equipmentTypeController();
