import React from "react";
import { user } from "../assets/user.png";

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <img src={user} />
        <h2 className="card-title"></h2>
        <p className="card-designation"></p>
        <p className="card-company"></p>
      </div>
    </div>
  );
}

export default Card;
