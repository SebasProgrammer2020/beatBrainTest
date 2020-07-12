import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./styles.css";
const Range = () => {
  const handleChange = (e) => {
    const inputvalue = e.target.value;
    console.log(inputvalue);
  };
  return (
    <Card className="card">
      <Form style={{ margin: "0px 20px" }}>
        <Card.Body className="cardbody">
          <Form.Group>
            <Card.Title>Seleccione el valor</Card.Title>
          </Form.Group>
          <Form.Control
            type="range"
            style={{ marginTop: "50px" }}
            onChange={(e) => {
              handleChange(e);
            }}
            min="0"
            max="10"
            step="1"
          />
          <div className="row">
            <div className="col-md-10">
              <Form.Label>0</Form.Label>
            </div>
            <div className="col-md-2">
              <Form.Label>10</Form.Label>
            </div>
          </div>
        </Card.Body>
      </Form>
    </Card>
  );
};
export default Range;
