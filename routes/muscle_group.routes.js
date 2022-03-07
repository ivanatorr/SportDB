const Router = require("express");
const router = new Router();
const muscleGroupController = require("../controller/muscle_group.controller");

router.post("/muscle_group", muscleGroupController.createMuscleGroup);
router.get("/muscle_group", muscleGroupController.getAllMuscleGroup);
// router.delete("/muscle_group/:id", exerciseTypeController.deleteExerxiseType);

module.exports = router;
