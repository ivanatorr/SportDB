CREATE TABLE exercise_type(
    id SERIAL PRIMARY KEY,
    exercise_type VARCHAR(255));
CREATE TABLE muscle_group(
    id SERIAL PRIMARY KEY,
    muscle_group VARCHAR(255));
CREATE TABLE exercise(
    id SERIAL PRIMARY KEY,
    exercise_name VARCHAR(255),
    id_muscle_group INT,
    FOREIGN KEY (id_muscle_group) REFERENCES muscle_group(id),
    id_equipment_type INT,
    FOREIGN KEY (id_equipment_type) REFERENCES equipment_type(id),
    id_diff_lvl INT,
    FOREIGN KEY (id_diff_lvl) REFERENCES diff_lvl(id),
    id_exercise_type INT,
    FOREIGN KEY (id_exercise_type) REFERENCES exercise_type(id),
    num_reps INT,
    time_reps INT);
CREATE TABLE equipment_type(
    id SERIAL PRIMARY KEY,
    equipment_type VARCHAR(255));
CREATE TABLE diff_lvl(
    id SERIAL PRIMARY KEY,
    diff_lvl VARCHAR(255));
CREATE TABLE equipment_shops(
    id SERIAL PRIMARY KEY,
    shop_name VARCHAR(255),
    shop_site VARCHAR(255));
CREATE TABLE equipment(
    id SERIAL PRIMARY KEY,
    id_equipment_type INT,
    FOREIGN KEY (id_equipment_type) REFERENCES equipment_type(id),
    price INT,
    id_equipment_shops INT,
    FOREIGN KEY (id_equipment_shops) REFERENCES equipment_shops(id),
    weigth INT,
    equipment_name VARCHAR(255));
    SELECT exercise.exercise_name, exercise.num_reps, exercise.time_reps, muscle_group.muscle_group, exercise_type.exercise_type, diff_lvl.diff_lvl, equipment_type.equipment_type
      FROM exercise
      JOIN muscle_group ON muscle_group.id = exercise.id_muscle_group
      JOIN exercise_type ON exercise_type.id = exercise.id_exercise_type
      JOIN equipment_type ON equipment_type.id = exercise.id_equipment_type
      JOIN diff_lvl ON diff_lvl.id = exercise.id_diff_lvl;

      SELECT equipment.price, equipment.weight, equipment.equipment_name, equipment_type.equipment_type, equipment_shops.shop_name
      FROM equipment
      JOIN equipment_shops ON equipment_shops.id = equipment.id_equipment_shops
      JOIN equipment_type ON equipment_type.id = equipment.id_equipment_type;

