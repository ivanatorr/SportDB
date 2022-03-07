const db = require("../db");

class equipmentController {
  async createEquipment(req, res) {
    const {
      id_equipment_type,
      price,
      id_equipment_shops,
      weight,
      equipment_name,
    } = req.body;
    const newEquipment = await db
      .query(
        "INSERT INTO equipment (id_equipment_type, price, id_equipment_shops, weight, equipment_name) values ($1, $2, $3, $4, $5) RETURNING *",
        [id_equipment_type, price, id_equipment_shops, weight, equipment_name]
      )
      .catch((e) => {
        console.log(e);
      });
    console.log(newEquipment);
    res.json("ok");
  }
  async getEquipment(req, res) {
    const equipment = await db
      .query(
        ` SELECT equipment.id, equipment.price, equipment.weight, equipment.equipment_name, equipment_type.equipment_type, equipment_shops.shop_name
        FROM equipment
        JOIN equipment_shops ON equipment_shops.id = equipment.id_equipment_shops
        JOIN equipment_type ON equipment_type.id = equipment.id_equipment_type;
  
      `
      )
      .catch((e) => {
        console.log(e);
      });
    console.log(equipment);
    res.json(equipment.rows);
  }
  //   async deleteExerxiseType(req, res) {}
  async deleteEquipment(req, res) {
    const id = req.params.id;
    const equipment = await db
      .query("DELETE FROM equipment WHERE id = $1", [id])
      .catch((e) => {
        console.log(e);
      });
    res.json(equipment.rows[0]);
  }
  async updateEquipment(req, res) {
    const {
      id,
      id_equipment_type,
      price,
      id_equipment_shops,
      weight,
      equipment_name,
    } = req.body;
    const equipment = await db
      .query(
        "UPDATE equipment set id_equipment_type=$1, price=$2, id_equipment_shops=$3, weight=$4, equipment_name=$5 where id=$6 RETURNING *",
        [
          id_equipment_type,
          price,
          id_equipment_shops,
          weight,
          equipment_name,
          id,
        ]
      )
      .catch((e) => {
        console.log(e);
      });
    res.json(equipment.rows[0]);
  }
}

module.exports = new equipmentController();
