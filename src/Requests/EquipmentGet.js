import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Axios from "axios";

export default class EquipmentGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/api/equipment")
      .then((res) => {
        const items = res.data;

        this.setState({ items });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteRow(id, e) {
    Axios.delete(`http://localhost:8080/api/equipment/${id}`).then((res) => {
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
              <th>Price(rub)</th>
              <th>Weight(kg)</th>
              <th>EquipmentName</th>
              <th>EquipmentType</th>
              <th>ShopName</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.weight}</td>
                <td>{item.equipment_name}</td>
                <td>{item.equipment_type}</td>
                <td>{item.shop_name}</td>
                <td>
                  {" "}
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
