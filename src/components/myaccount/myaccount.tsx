import React, { Component, useState } from 'react'
import './myaccount.css'
import usericon from '../../img/user-icon.png'
// import { postNewDonation } from '../../api'
import { getAllDonations } from '../../api'

export type AccountState = {
  userName:string,
  donations:{name:string, donationNumber:number}[]
}

export default function Myaccount(state: AccountState) {

  
  const [newDonationNumber, setNewDonationNumber] = useState('')
  const [newDonationName, setNewDonationName] = useState('')

  let taxExonerationNumber:number = 0

  for( let i=0; i<state.donations.length; i++){
    taxExonerationNumber = taxExonerationNumber + state.donations[i].donationNumber 
  }
  if(taxExonerationNumber <= 1000)
    taxExonerationNumber = taxExonerationNumber * 0.66
  else 
    taxExonerationNumber = taxExonerationNumber * 0.75

  


    return (
      <div className="myaccount">
        <div className='title'>
          <h1>Votre compte</h1>
          <h2>Retrouvez ici tout vos dons enregistrés</h2>
        </div>
        <div className='userInformations'>
          <div>
            <p className='userName'>{state.userName}</p>
          </div>
          <img src={usericon} alt="user icon" />
        </div>
        <div className='history'>
          <h3>Historique des dons</h3>
          {/* getAllDonations() */}
          {state.donations.map((pres) => {
            return <div><p className='donationName'>{pres.name}</p><p className='donationDescription'>{pres.donationNumber}</p></div>
          })}
          
        </div>
        <div className='rightColumn'>
          <p className='newDonationInputTitle'>Enregistrer un don manuellement</p>
          {/* onSubmit={{newDonationNumber:'10', newDonationName:'newDonationName'}} */}
          <form method='' action='post' className='newDonationInput'>
            <input type='number' placeholder='  somme donnée' className='newDonationInputNumber' value='0' onChange={event => setNewDonationNumber(event.target.value)} />
            <input type='text' placeholder='  nom de l association' className='newDonationInputNumber' value=' ' onChange={event => setNewDonationName(event.target.value)}/>
          </form>
          <div className='newDonationInputSubmit'>Enregistrer le don</div>
          <div></div>
          <div className='taxExoneration'>
            <p className='taxExonerationTitle'>Déduction d’impôts sur la periode </p>
            <p className='taxExonerationNumber'>{Math.round(taxExonerationNumber)}€</p>
          </div>
        </div>
        {/* {newDonationNumber}{newDonationName} */}
      </div>
    )
  
}

