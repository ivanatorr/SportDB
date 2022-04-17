import React, { useState } from "react";
import EquipmentTypeGet from "./EquipmentTypeGet";
import EquipmentShopsGet from "./EquipmentShopsGet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Axios from "axios";

export default function EquipmentPost() {
  const url = "http://localhost:8080/api/equipment";
  const [info, setInfo] = useState({
    id_equipment_type: "",
    price: "",
    id_equipment_shops: "",
    weight: "",
    equipment_name: "",
  });
  const submit = (e) => {
    e.preventDefault();
    Axios.put(url, {
      id: parseInt(info.id),
      id_equipment_type: parseInt(info.id_equipment_type),
      price: parseInt(info.price),
      id_equipment_shops: parseInt(info.id_equipment_shops),
      weight: parseInt(info.weight),
      equipment_name: info.equipment_name,
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
          id="id"
          value={info.id}
          placeholder="id"
          type="number"
        ></Form.Control>
        <Form.Control
          onChange={(e) => handle(e)}
          id="id_equipment_type"
          value={info.id_equipment_type}
          placeholder="id вида оборудования"
          type="number"
        ></Form.Control>
        <Form.Control
          onChange={(e) => handle(e)}
          id="price"
          value={info.price}
          placeholder="цена"
          type="number"
        ></Form.Control>
        <Form.Control
          onChange={(e) => handle(e)}
          id="id_equipment_shops"
          value={info.id_equipment_shops}
          placeholder="id магазина оборудования"
          type="number"
        ></Form.Control>
        <Form.Control
          onChange={(e) => handle(e)}
          id="weight"
          value={info.weight}
          placeholder="вес"
          type="number"
        ></Form.Control>
        <Form.Control
          onChange={(e) => handle(e)}
          id="equipment_name"
          value={info.equipment_name}
          placeholder="название оборудования"
          type="text"
        ></Form.Control>
        <Button variant="outline-dark" onClick={submit}>
          Изменить оборудование
        </Button>
      </Form>
      <EquipmentTypeGet />
      <EquipmentShopsGet />
    </div>
  );
}
