import React, { useState } from "react";
import ExerciseTypeGet from "./ExerciseTypeGet";
import DiffLvlGet from "./DiffLvlGet";
import MuscleGroupGet from "./MuscleGroupGet";
import EquipmentTypeGet from "./EquipmentTypeGet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Axios from "axios";

export default function ExercisePost() {
  const url = "http://localhost:8080/api/exercise";
  const [info, setInfo] = useState({
    exercise_name: "",
    id_muscle_group: "",
    id_equipment_type: "",
    id_diff_lvl: "",
    id_exercise_type: "",
    num_reps: "",
    time_reps: "",
    health_restriction_id: "",
  });
  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      exercise_name: info.exercise_name,
      id_muscle_group: parseInt(info.id_muscle_group),
      id_equipment_type: parseInt(info.id_equipment_type),
      id_diff_lvl: parseInt(info.id_diff_lvl),
      id_exercise_type: parseInt(info.id_exercise_type),
      num_reps: parseInt(info.num_reps),
      time_reps: parseInt(info.time_reps),
      health_restriction_id: parseInt(info.health_restriction_id),
    }).then((res) => {
      console.log(res.data);
    });
  };

  const handle = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.id] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  };
  return (
    <div>
      <Form onSubmit={(e) => submit(e)}>
        <Form.Control
          onChange={(e) => handle(e)}
          id="exercise_name"
          value={info.exercise_name}
          placeholder="название упражнения"
          type="text"
        ></Form.Control>
        <p>
          Группа мышц:
          <select
            onChange={(e) => handle(e)}
            class="dropdown"
            id="id_muscle_group"
          >
            <option value="1">Пресс</option>
            <option value="2">Грудь</option>
            <option value="3">Ноги</option>
            <option value="4">Трицепс</option>
            <option value="5">Спина</option>
            <option value="6">Плечи</option>
            <option value="7">Бицепс</option>
          </select>
        </p>

        {/* <Form.Control
          onChange={(e) => handle(e)}
          id="id_muscle_group"
          value={info.id_muscle_group}
          placeholder="id группы мышц"
          type="number"
        ></Form.Control> */}
        <p>
          Тип снаряжения:
          <select
            onChange={(e) => handle(e)}
            class="dropdown"
            id="id_equipment_type"
          >
            <option value="1">Гири</option>
            <option value="2">Штанга</option>
            <option value="3">Отсутствует</option>
            <option value="4">Гантели</option>
            <option value="5">Тренажёр</option>
            <option value="6">Беговая дорожка</option>
            <option value="7">Велотренажёр</option>
          </select>
        </p>

        <p>
          Уровень сложности:
          <select onChange={(e) => handle(e)} class="dropdown" id="id_diff_lvl">
            <option value="1">Начинающий</option>
            <option value="2">Средний</option>
            <option value="3">Продвинутый</option>
          </select>
        </p>

        <p>
          Тип упражнения:
          <select
            onChange={(e) => handle(e)}
            class="dropdown"
            id="id_exercise_type"
          >
            <option value="1">Силовое</option>
            <option value="2">Растяжка</option>
            <option value="3">Кардио</option>
            <option value="4">Палиометрический</option>
          </select>
        </p>

        <Form.Control
          onChange={(e) => handle(e)}
          id="num_reps"
          value={info.num_reps}
          placeholder="количество повторений"
          type="number"
        ></Form.Control>
        <Form.Control
          onChange={(e) => handle(e)}
          id="time_reps"
          value={info.time_reps}
          placeholder="время повторения"
          type="number"
        ></Form.Control>
        <p>
          Ограничения по здоровью:
          <select
            onChange={(e) => handle(e)}
            class="dropdown"
            id="health_restriction_id"
          >
            <option value="1">Без ограничений</option>
            <option value="2">С ограничениями</option>
            <option value="3">Полностью ограничено</option>
          </select>
        </p>
        <Button variant="outline-dark" onClick={submit}>
          Добавить упражнение
        </Button>
      </Form>
      <ExerciseTypeGet />
      <DiffLvlGet />
      <MuscleGroupGet />
      <EquipmentTypeGet />
    </div>
  );
}
