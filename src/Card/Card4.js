import React from "react";
import "./Card4.css";

function Card4({ heading, entry1, entry2, entry3, entry4 }) {
  return (
    <div className="Card4">
      <div>
        <h4>Prior Authorization</h4>
        <div className="info4">
          <div className="rid">
            <b>RID:</b>
            <p>200003</p>
          </div>
          <div className="rid">
            <b>Auth ID:</b>
            <p>63c8cef16328c39de555111f</p>
          </div>
          <div >
            <b>Services Requested</b>
          <p>-CPT 92227 * 2 visits annually</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
