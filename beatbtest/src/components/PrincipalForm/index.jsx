import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Text from "../Text/index";
import Range from "../Range/index";
import Date from "../Date/index";
import "./styles.css";
const PrincipalForm = () => {
  const [displayFormText, setDisplayFormText] = useState("none");
  const [displayFormDate, setDisplayFormDate] = useState("none");
  const [displayFormRange, setDisplayFormRange] = useState("none");
  const checkSelect = (event) => {
    const checkText = event.target.checked;
    const checkDate = event.target.checked;
    const checkRange = event.target.checked;
    const checkTextName = event.target.name;
    const checkDateName = event.target.name;
    const checkRangeName = event.target.name;
    if (checkText == false && checkTextName == "text") {
      setDisplayFormText("none");
    } else if (checkText == true && checkTextName == "text") {
      setDisplayFormText("");
    }
    if (checkDate == false && checkDateName == "date") {
      setDisplayFormDate("none");
    } else if (checkDate == true && checkDateName == "date") {
      setDisplayFormDate("");
    }
    if (checkRange == false && checkRangeName == "range") {
      setDisplayFormRange("none");
    } else if (checkRange == true && checkRangeName == "range") {
      setDisplayFormRange("");
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
            <Button
              className="btnCreate"
              variant="primary"
            >
              Crear
            </Button>
          </div>
        </form>
        <div className="card-body" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col" style={{ display: displayFormText }}>
              <Text />
            </div>
            <div className="col" style={{ display: displayFormRange }}>
              <Range />
            </div>
            <div className="col" style={{ display: displayFormDate }}>
              <Date />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default PrincipalForm;
