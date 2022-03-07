const db = require("../db");

class equipmentShopsController {
  async createEquipmentShops(req, res) {
    const { shop_name, shop_site } = req.body;
    const newEquipmentShops = await db.query(
      "INSERT INTO equipment_shops (shop_name, shop_site) values ($1, $2) RETURNING *",
      [shop_name, shop_site]
    );
    console.log(newEquipmentShops);
    res.json("ok");
  }
  async getAllEquipmentShops(req, res) {
    const allEquipmentShops = await db.query("SELECT * FROM equipment_shops");
    res.json(allEquipmentShops.rows);
  }
}

module.exports = new equipmentShopsController();
