import React from 'react'
import "./Card10.css"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { fontSize } from '@mui/system';


function Card10() {
  return (
    <div className='Card10'>
        <div>
            <img className="retina"src="/retina.png" alt="" />
        </div>
        <div className='content'>
        <p style={{fontSize:16,fontWeight:600, marginTop:5, marginBottom:2}}>DR Present, moderate</p>
            <div style={{display:"flex", alignItems:"center"}}>
            <VerifiedUserIcon/>
            <p style={{fontSize:14,fontWeight:600}}>Verified by Dr. Domingo Sanchez</p>
            
            </div>
            <p className='parag'>View recommendation</p>
        </div>
    </div>
  )
}

export default Card10