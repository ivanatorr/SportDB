import { Component, React } from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EquipmentPost from "./Requests/EquipmentPost";
import ExercisePost from "./Requests/ExercisePost";
import EquipmentGet from "./Requests/EquipmentGet";
import ExerciseGet from "./Requests/ExerciseGet";
import EquipmentPut from "./Requests/EquipmentPut";
import HealthRestrictionGet from "./Requests/HealthRestrictionGet";
import ExercisePut from "./Requests/ExercisePut";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              {/* <img
                                src={"https://i.playground.ru/i/pix/1281834/image.jpg"}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> */}
              Sport
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/EquipmentPost">Добавить Оборудование</Nav.Link>
                <Nav.Link href="/ExercisePost">Добавить Упражнение</Nav.Link>
                <Nav.Link href="/EquipmentGet">
                  Посмотреть Оборудование
                </Nav.Link>
                <Nav.Link href="/ExerciseGet">Посмотреть Упражнение</Nav.Link>
                <Nav.Link href="/EquipmentPut">Изменить Оборудование</Nav.Link>
                <Nav.Link href="/ExercisePut">Изменить Упражнение</Nav.Link>
                <Nav.Link href="/HealthRestrictionGet">
                  Посмотреть ограничения по здоровью
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route path="/EquipmentPost" element={<EquipmentPost />} />
            <Route path="/ExercisePost" element={<ExercisePost />} />
            <Route path="/EquipmentGet" element={<EquipmentGet />} />
            <Route path="/ExerciseGet" element={<ExerciseGet />} />
            <Route path="/EquipmentPut" element={<EquipmentPut />} />
            <Route path="/ExercisePut" element={<ExercisePut />} />
            <Route
              path="/HealthRestrictionGet"
              element={<HealthRestrictionGet />}
            />
            {/* <Route exact path="/dota2" component={Dota2}/> */}
          </Routes>
        </Router>
      </>
    );
  }
}
