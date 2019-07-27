import React from "react";
import "./style.css";

function TravelCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeTravel(props.id)} className="remove">
      <i class="fas fa-suitcase"></i>
      </span>
    </div>
  );
}

export default TravelCard;
