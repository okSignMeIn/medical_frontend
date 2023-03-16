import React from 'react'
import CustomButton2 from '../Button/CustomButton2'
import "./Recommendations.css"

function Recommendations() {
  return (
    <div className='recommend'>
        <div className='missed'>
            <div>
                <h4>Potentially missed CPT codes</h4>
            </div>
            <div className='btns'>
                <CustomButton2 title="CPT-92227"/>
                <CustomButton2 title="CPT-99211"/>
            </div>
        </div>
        <div className='pres'>
            <h4>Prescriptions</h4>
            <div>
                <p>Presciption 1</p>
                <p>Presciption 2</p>
                <p>Presciption 3</p>
                <p>Presciption 4</p>
            </div>
        </div>

    </div>
  )
}

export default Recommendations