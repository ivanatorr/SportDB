const Router = require("express");
const router = new Router();
const exerciseController = require("../controller/exercise.controller");

router.post("/exercise", exerciseController.createExercise);
router.get("/exercise", exerciseController.getExercise);
router.put("/exercise", exerciseController.updateExercise);
router.delete("/exercise/:id", exerciseController.deleteExerxise);

module.exports = router;
