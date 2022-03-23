import React, { Component } from 'react'
import './myaccount.css'
import usericon from '../../img/user-icon.png'

export type AccountState = {
  userName:string,
  taxExoneration:number,
  donations:{name:string, donationNumber:number}[]
}

export default function Myaccount(state: AccountState) {

  state = {
    userName:'HugBarbier',
    taxExoneration:1000,
    donations:[{name:'associationnum1', donationNumber:1300}, {name:'associationnum2', donationNumber:1300}, {name:'associationnum1', donationNumber:1300}, {name:'associationnum2', donationNumber:1300}, {name:'associationnum1', donationNumber:1300}, {name:'associationnum2', donationNumber:1300}]
  }

  
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
          {state.donations.map((pres) => {
            return <div><p className='donationName'>{pres.name}</p><p className='donationDescription'>{pres.donationNumber}</p></div>
          })}
          
        </div>
        <div className='rightColumn'>
          <p className='newDonationInputTitle'>Enregistrer un don manuellement</p>
          <div className='newDonationInput'>
            <input type='number' placeholder='  somme donnée' className='newDonationInputNumber' />
            <input type='text' placeholder='  nom de l association' className='newDonationInputNumber' />
          </div>
          <input type='submit' className='newDonationInputSubmit' />
          <div></div>
          <div className='taxExoneration'>
            <p className='taxExonerationTitle'>Déduction d’impôts sur la periode </p>
            <p className='taxExonerationNumber'>{state.taxExoneration}€</p>
          </div>
        </div>
        
      </div>
    )
  
}
