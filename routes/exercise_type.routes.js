const Router = require("express");
const router = new Router();
const exerciseTypeController = require("../controller/exercise_type.controller");

router.post("/exercise_type", exerciseTypeController.createExerxiseType);
router.get("/exercise_type", exerciseTypeController.getAllExerciseType);

module.exports = router;
