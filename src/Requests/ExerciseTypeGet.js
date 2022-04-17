import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default class ExerciseTypeGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/exercise_type")
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
  //   Nav = () => {
  //     const [open, setOpen] = React.useState(false);

  //     return (
  //       <nav className={open ? "open" : null}>
  //         <button
  //           onClick={() => {
  //             setOpen(!open);
  //           }}
  //         >
  //           hamburger
  //         </button>
  //         <ul>{/* elements */}</ul>
  //       </nav>
  //     );
  //   };

  render() {
    const { isLoaded, items } = this.state;

    // if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>ExerciseType</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.exercise_type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
