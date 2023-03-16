import React from 'react'
import "./Request_info.css"

function Request_info({id,date,urgent}) {
  return (
    <div className='Request_info'>
        <b>Request ID :{<p> {id}</p>}</b>
        <b>Date :{<p> {date}</p>}</b>
        <p>{urgent}</p>
    </div>
  )
}

export default Request_info