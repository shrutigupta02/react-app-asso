import React, { Component, useState } from 'react'
import './converter.css'
import { postNewDonation } from '../../api'


export type ConverterProps = {
  userName:string, 
  assoName:string,
}

 export default function Converter(props:ConverterProps){

    const [changeNumber, setChangeNumber] = useState('')

    return (
      <div className='section_converter'>
        <div className="amount">
          <label className="amount_title" htmlFor="">Montant du don</label>
          <input className="amount_input" type="number" placeholder='0.00' onChange={event => setChangeNumber(event.target.value)}/>
        </div>
        <div className="deduction">
          <label className="deduction_title" htmlFor="">Déduction</label>
          <input className="deduction_input"type="number" value={parseInt(changeNumber)*0.75} disabled/> 
        </div>
        <button type='button' className='save_donation' onClick={() => postNewDonation(parseInt(changeNumber), props.userName, props.assoName)}>Enregistrer dans mes dons</button>
      </div>
    )
}