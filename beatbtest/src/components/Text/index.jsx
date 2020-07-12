import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const Text = () => {
  const handleChange = (e) => {
    let textValue = e.target.value;
    console.log(textValue);
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>Digite el texto</Card.Title>
        <Form.Control
          as="textarea"
          rows="3"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Card.Body>
    </Card>
  );
};
export default Text;
