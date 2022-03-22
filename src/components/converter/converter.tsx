import React, { Component, useState } from 'react'
import './converter.css'





 export default function Converter(){

    const [changeNumber, setChangeNumber] = useState('')
    

    return (
      <div className='section_converter'>
        <div className="amount">
          <label htmlFor="">Montant du don</label>
          <input type="number" placeholder='0.00' onChange={event => setChangeNumber(event.target.value)}/>
        </div>
        <div className="deduction">
          <label htmlFor="">Déduction</label>
          <input type="number" value={parseInt(changeNumber)*0.75} disabled/> 
        </div>
      </div>
    )
}

