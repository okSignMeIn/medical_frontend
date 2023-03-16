import React from 'react'
import "./Card7.css"

function Card7() {
  return (
    <div className='Card7'>
        <div className='row1'>
            <h4>CPT</h4>

            <h4>Diagnosis</h4>
            <h4>Units</h4>

            <h4>Price</h4>
        </div>
        <div className='row2'>
            <p>92227</p>
                
            <p className='para'>Image of Retina for detection or monitoring of disease</p>
            <p className='unit'>2</p>
            
            <p>$432</p>
        </div>
        <div className='row3'>
            <b>Total: $864</b>
        </div>
    </div>
  )
}

export default Card7