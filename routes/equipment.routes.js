const Router = require("express");
const router = new Router();
const equipmentController = require("../controller/equipment.controller");

router.post("/equipment", equipmentController.createEquipment);
router.get("/equipment", equipmentController.getEquipment);
router.put("/equipment", equipmentController.updateEquipment);
router.delete("/equipment/:id", equipmentController.deleteEquipment);

module.exports = router;
