const Router = require("express");
const router = new Router();
const diffLvlController = require("../controller/diff_lvl.controller");

router.post("/diff_lvl", diffLvlController.createDiffLvl);
router.get("/diff_lvl", diffLvlController.getAllDiffLvl);
// router.delete("/exercise_type/:id", exerciseTypeController.deleteExerxiseType);

module.exports = router;
