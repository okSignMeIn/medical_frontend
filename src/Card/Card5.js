import React from 'react'
import "./Card4.css";

function Card5() {
  return (
    <div className="Card4" style={{minWidth:715, maxHeight:170}}>
      <div>
        <h4>Primary Payer</h4>
        <div className="info4">
          <div className="rid">
            <p>VETERANS ADMINISTRATION - PRESCOTT VA [199311] 123456789 (Contracts)</p>
          </div>
          <div className="rid">
            <b>EDI</b>
            <p>-199311</p>
          </div>
          <div className="rid" >
            <b>Assignment </b>
          <p>-Not Assigned</p>
          </div>
          <div className="rid">
          <b>Forced Drop to Paper </b>
          <p>-No</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card5