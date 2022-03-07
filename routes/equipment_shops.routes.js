const Router = require("express");
const router = new Router();
const equipmentShopsController = require("../controller/equipment_shops.controller");

router.post("/equipment_shops", equipmentShopsController.createEquipmentShops);
router.get("/equipment_shops", equipmentShopsController.getAllEquipmentShops);
// router.delete("/exercise_type/:id", exerciseTypeController.deleteExerxiseType);

module.exports = router;
