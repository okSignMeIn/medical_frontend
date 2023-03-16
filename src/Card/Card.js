import React from "react";
import "./Card.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";

function Card({ type, id, date, status }) {
  switch (type) {
    case "1":
      return (
        <Card1/>
      );
    case "2":
      return (
        <Card2/>
      );
    case "3":
      return (
        <Card3/>
      );
    case "4":
      return (
        <Card4/>
      );
      case "5":
      return (
        <Card5/>
      );
      case "6":
      return (
        <Card6/>
      );
      case "7":
      return (
        <Card7/>
      );
      case "8":
      return (
        <Card8/>
      );
      default:
        return null;
  }
}

export default Card;
