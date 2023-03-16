import React from 'react'
import "./Default.css"

function Default({title,body,w,h}) {
  return (
    <div style={{width:w,height:h}} className='card'>
        <div className='cardHeader'>
          <h2>{title}</h2>
        </div>
        <div className='cardBody'>
          {body}
        </div>
    </div>
  )
}

export default Default;