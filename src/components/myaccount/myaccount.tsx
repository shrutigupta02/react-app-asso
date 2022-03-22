import React, { Component } from 'react'
import './myaccount.css'
import usericon from '../../img/user-icon.png'

export default class Myaccount extends Component {
  render() {
    return (
      <div className="myaccount">
        <div className='title'>
          <h1>Votre compte</h1>
          <h2>Retrouvez ici tout vos dons enregistrés</h2>
        </div>
        <div className='userInformations'>
          <div>
            <p className='userName'>Nom de l'utilisateur</p>
            <p className='userEmail'>email@email.com</p>
          </div>
          <img src={usericon} alt="user icon" />
        </div>
        <div className='history'>
          <h3>Historique des dons</h3>
          <div>
            <p className='donationName'>Don 1</p>
            <p className='donationDescription'>15,00</p>
          </div>
          <div>
            <p className='donationName'>Don 2</p>
            <p className='donationDescription'>10,00</p>
          </div><div>
            <p className='donationName'>Don 3</p>
            <p className='donationDescription'>12,00</p>
          </div><div>
            <p className='donationName'>Don 4</p>
            <p className='donationDescription'>11,00</p>
          </div><div>
            <p className='donationName'>Don 5</p>
            <p className='donationDescription'>10,00</p>
          </div><div>
            <p className='donationName'>Don 6</p>
            <p className='donationDescription'>15,00</p>
          </div><div>
            <p className='donationName'>Don 7</p>
            <p className='donationDescription'>15,00</p>
          </div>
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
            <p className='taxExonerationNumber'>15,00€</p>
          </div>
        </div>
        
      </div>
    )
  }
}
