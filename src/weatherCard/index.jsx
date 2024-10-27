import "./index.css";
//import moment from "moment";
import moment from "moment";
import { Card, Button } from "react-bootstrap";

let WeatherCard = ({ date, temp, min, max }) => {
  return (
    <>
      <div className="card">
        <div> {moment(date).format("dddd ha")} </div>
        <h1> {temp}°C </h1>
        <div>
          {" "}
          {min}°C - {max}°C{" "}
        </div>
      </div>

      <Card style={{ width: "25rem" }} border="success">
        <Card.Body>
          {" "}                       {/*  2024-09-20 18:00:00" */}
          <Card.Title>{moment(date).format("dddd h:mm:ss a")}</Card.Title>
          <Card.Text>
            <h1> {temp}°C </h1>
          </Card.Text>
          <Card.Title>
            {" "}
            min={min}°C - max={max}°C
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default WeatherCard;
