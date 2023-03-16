import React from "react";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import "./Card1.css"

function Card1() {
  return (
    <div className="Card1">
      <PendingActionsIcon sx={{ fontSize: 50 }} />
      <div className="info">
        <div>
          <b>Claim ID</b>
          <b>Date of Service</b>
          <b>Status</b>
        </div>
        <div>
          <p className="par">200003</p>
          <p className="par">1/10/2023</p>
          <p className="par">Pending</p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
