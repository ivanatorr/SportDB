const express = require("express");
var cors = require("cors");

const exerciseTypeRouter = require("./routes/exercise_type.routes");
const muscleGroupRouter = require("./routes/muscle_group.routes");
const equipmentTypeRouter = require("./routes/equipment_type.routes");
const diffLvlRouter = require("./routes/diff_lvl.routes");
const equipmentShopsRouter = require("./routes/equipment_shops.routes");
const equipmentRouter = require("./routes/equipment.routes");
const exerciseRouter = require("./routes/exercise.routes");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", exerciseTypeRouter);
app.use("/api", muscleGroupRouter);
app.use("/api", equipmentTypeRouter);
app.use("/api", diffLvlRouter);
app.use("/api", equipmentShopsRouter);
app.use("/api", equipmentRouter);
app.use("/api", exerciseRouter);

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
