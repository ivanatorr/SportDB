const Router = require("express");
const router = new Router();
const equipmentTypeController = require("../controller/equipment_type.comtroller");

router.post("/equipment_type", equipmentTypeController.createEquipmentType);
router.get("/equipment_type", equipmentTypeController.getAllEquipmentType);
// router.delete("/muscle_group/:id", exerciseTypeController.deleteExerxiseType);

module.exports = router;
