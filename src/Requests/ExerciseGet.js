import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Axios from "axios";

export default class ExerciseGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/api/exercise")
      .then((res) => {
        const items = res.data;

        this.setState({ items });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteRow(id, e) {
    Axios.delete(`http://localhost:8080/api/exercise/${id}`).then((res) => {
      console.log(res);

      console.log(res.data);

      const items = this.state.posts.filter((item) => item.id !== id);

      this.setState({ items });
    });
  }

  render() {
    const { isLoaded, items } = this.state;

    // if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>ExerciseName</th>
              <th>MuscleGroup</th>
              <th>ExerciseType</th>
              <th>EquipmentType</th>
              <th>DiffLvl</th>
              <th>HealthRestriction</th>
              <th>NumReps</th>
              <th>TimeRep(min)</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.exercise_name}</td>
                <td>{item.muscle_group}</td>
                <td>{item.exercise_type}</td>
                <td>{item.equipment_type}</td>
                <td>{item.diff_lvl}</td>
                <td>{item.health_restriction}</td>
                <td>{item.num_reps}</td>
                <td>{item.time_reps}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.deleteRow(item.id, e)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
