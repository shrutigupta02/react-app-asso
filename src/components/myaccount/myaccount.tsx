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
            <p>Don 1</p>
            <p>15,00</p>
          </div>
          <div>
            <p>Don 2</p>
            <p>15,00</p>
          </div>
          <div>
            <p>Don 3</p>
            <p>15,00</p>
          </div>
          <div>
            <p>Don 4</p>
            <p>15,00</p>
          </div>
          <div>
            <p>Don 5</p>
            <p>15,00</p>
          </div>
          <div>
            <p>Don 6</p>
            <p>15,00</p>
          </div>
          <div>
            <p>Don 7</p>
            <p>15,00</p>
          </div>
        </div>
        <div className='rightColumn'>
          <div className='newDonationInput'></div>
          <div></div>
        </div>
        
      </div>
    )
  }
}
