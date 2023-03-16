import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Item.css";
function Item({ logo, title, callback}) {
  const handleClick = () => {
    console.log("click");
  }

  return (


    <div className="Item" onClick={callback}>
      <div className="Icon">{logo}</div>
      <p>{title}</p>
    </div>

  );
}

export default Item;
