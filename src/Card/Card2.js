import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Card2.css";

function Card2() {
  return (
    <div>
      <div className="Card2">
        <AccountCircleIcon color="disabled" sx={{fontSize: 70}}/>
        <div className="information">
          <h3>Linda Harris </h3>
          <div>11/09/1945(76 years), F</div>
          <div className="smoker">Non Smoker </div>
        </div>
      </div>
      <div className="Card2" style={{marginTop:-45 ,borderRadius:10}}>
        <div className="secondary_info">
          <div>EMPI/MRN</div>
          <div>P078645</div>
        </div>
        <div className="secondary_info">
          <div>Phone </div>
          <div>512-265-4081</div>
        </div>
        <div className="secondary_info">
          <div>PCP </div>
          <div>Dr. Karen Carter</div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
