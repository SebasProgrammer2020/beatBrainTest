import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const Date = () => {
  const handleChange = (e) => {
    let dateValue = e.target.value;
    console.log(dateValue);
  };
  return (
    <Card>
      <Form style={{ margin: "20px" }}>
        <Form.Group>
          <Card.Title>Seleccione la fecha</Card.Title>
        </Form.Group>
        <Form.Group style={{ padding: "15px" }}>
          <Form.Control
            type="date"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Group>
      </Form>
    </Card>
  );
};
export default Date;
