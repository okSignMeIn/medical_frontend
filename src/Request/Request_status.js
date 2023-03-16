import React from 'react'
import "./Request_status.css"

function Request_status({status,icon}) {
  return (
    <div className='Request_status'>
        <b>{status}</b>
        {icon}
    </div>
  )
}

export default Request_status