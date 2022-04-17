import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default class MuscleGroupGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/muscle_group")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
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
              <th>MuscleGroup</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.muscle_group}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
