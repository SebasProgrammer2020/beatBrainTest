import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Text from "../Text/index";
import Range from "../Range/index";
import Date from "../Date/index";
import "./styles.css";
const Selector = () => {
  const [checkText, setcheckText] = useState("none");
  const [checkTextName, setCheckTextName] = useState("");
  const [checkDate, setcheckDate] = useState("none");
  const [checkTextDate, setCheckTextDate] = useState("");
  const [checkRange, setcheckRange] = useState("none");
  const [checkTextRange, setCheckTextRange] = useState("");
  const checkSelect = (event) => {
    const checkText = event.target.checked;
    const checkDate = event.target.checked;
    const checkRange = event.target.checked;
    const checkTextName = event.target.name;
    const checkDateName = event.target.name;
    const checkRangeName = event.target.name;
    if (checkText == false && checkTextName == "text") {
      setcheckText("none");
    } else if (checkText == true && checkTextName == "text") {
      setcheckText("");
    }
    if (checkDate == false && checkDateName == "date") {
      setcheckDate("none");
    } else if (checkDate == true && checkDateName == "date") {
      setcheckDate("");
    }
    if (checkRange == false && checkRangeName == "range") {
      setcheckRange("none");
    } else if (checkRange == true && checkRangeName == "range") {
      setcheckRange("");
    }
  };
  return (
    <div className="container">
      <Card style={{ padding: "20px" }}>
        <div className="title">
          <h3>Seleccione los campos que tendrá el formulario</h3>
        </div>
        <form className="card-header">
          <div className="row">
            <div className="col">
              <label>
                <input
                  type="checkbox"
                  name="text"
                  className="check"
                  onChange={(event) => {
                    checkSelect(event);
                  }}
                />
                Texto
              </label>
            </div>
            <div className="col">
              <label>
                <input
                  type="checkbox"
                  name="date"
                  className="check"
                  onChange={(event) => {
                    checkSelect(event);
                  }}
                />
                Fecha
              </label>
            </div>
            <div className="col">
              <label>
                <input
                  type="checkbox"
                  name="range"
                  className="check"
                  onChange={(event) => {
                    checkSelect(event);
                  }}
                />
                Rango
              </label>
            </div>
          </div>
          <div>
            <Button className="btnCreate" variant="primary" type="submit">
              Crear
            </Button>
          </div>
        </form>
        <div className="card-body" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col" style={{ display: checkText }}>
              <Text />
            </div>
            <div className="col" style={{ display: checkRange }}>
              <Range />
            </div>
            <div className="col" style={{ display: checkDate }}>
              <Date />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Selector;
