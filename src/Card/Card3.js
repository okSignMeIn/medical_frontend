import React from "react";
import "./Card3.css";

function Card3() {
  return (
    <div className="Card3">
      <div className="info3">
        <h3>Dr. Roger Lenon</h3>
        <div className="info1">MD, NPI 43212</div>
        <div className="info1">Holtzman Medical Group</div>
        <div className="info2">Contact No. 238018221</div>
      </div>
      <div>
        <img className="doc" src="/doc.png" alt="Roger" />
      </div>
    </div>
  );
}

export default Card3;
