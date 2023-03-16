import React from "react";
import "./AGP.css";
import { Button } from "@mui/material";

function AGP() {
  return (
    <div style={{ width: 400 }}>
      <div style={{ display: "flex", justifyContent: "space-between", margin:10, backgroundColor:"#ffffff", alignItems:"center" }}>
        <div style={{marginLeft:5}}>
          <h4 className="time">Time In</h4>
          <h5>Target Range</h5>
          <p>70-180mg/dL</p>
        </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h2>52%</h2>
          <p>(12h 28m)</p>
        </div>
        <Button variant="outlined" sx={{
            width: 100,
            height: 40,
          }}>Outlined</Button>
      </div>
      <div className="ItemsAGP">
        <div className="Item1"></div>
        <div className="Item2"></div>
        <div className="Item3"></div>
      </div>
    </div>
  );
}

export default AGP;
