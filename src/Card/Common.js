import React from "react";

import CustomButton from "../Button/CustomButton";
import "./Common.css";

function Common() {
  return (
    <div className="common">
      <div className="diagnoses">
        

        <h3>Current Diagnoses</h3>
        <p>-(I10) Essential (primary) hypertension</p>
        <p>-(E11.9) Type 2 diabetes mellitus without complications</p>
        <p>
          -(E11.31) Type 2 diabetes mellitus with unspecified diabetic
          retinopathy
        </p>
        
      </div>
      <div className="buttons">
        <div>
          <CustomButton title="diagnoses" />
        </div>
        <div>
          <CustomButton  title="Patient Risk Score" />
        </div>
        <div>
          <CustomButton  title="Social Determinants" />
        </div>
        <div>
          <CustomButton title="Smoking Status" />
        </div>
        <div>
          <CustomButton  title="Allergies" />
        </div>
      </div>
    </div>
  );
}

export default Common;
