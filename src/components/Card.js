import React from "react";
import "./asset/home.css";

export default function Card({ name, dis, cost, img }) {
  return (
    <div className="card">
      <div className="con">
        <span className="icon">
          <img src={img} />
        </span>
        <div className="content-text">
            <h1>{name}</h1>
          <p>{dis}</p>
        </div>
        <span class="cost">{cost}</span>
      </div>
    </div>
  );
}
