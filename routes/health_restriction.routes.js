const Router = require("express");
const router = new Router();
const healthRestrictionController = require("../controller/health_restriction.controller");

// router.post(
//   "/health_restriction",
//   healthRestrictionController.createHealthRestriction
// );
router.get(
  "/health_restriction",
  healthRestrictionController.getAllHealthRestriction
);
// router.delete("/exercise_type/:id", exerciseTypeController.deleteExerxiseType);

module.exports = router;
