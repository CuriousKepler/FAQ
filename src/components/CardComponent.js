import React from "react";
import user from "../assets/user.png";
import "./CardComponent.css";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card-row-1">
          <div className="card">
            <div className="card-image">
              <img src={props.img} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={user} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={user} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={user} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
        </div>
        <div className="card-row-2">
          <div className="card">
            <div className="card-image">
              <img src={user} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={user} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={user} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={user} />
            </div>
            <div className="card-title">
              <h2>Name</h2>
            </div>
            <div className="card-designation">
              <p>Designation</p>
            </div>
            <div className="card-company">
              <p>Company</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
