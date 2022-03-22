import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Converter from '../converter/converter'
import './donationpage.css'


export type association = {
    association: {
      id: number,
      name:string,
      description: string
    }
    handleAssociation: Function,
    quitPage: Function
  }

export default class Donationpage extends React.Component<association, {}>{
  render() {
    return (
      <div className='donationPage'> 
          
          nom : {this.props.association.name} -
          description : {this.props.association.description}

          <Link to="/" onClick={() => {this.props.quitPage()}}>quitter la page</Link>
          <h1>nom : {this.props.association.name}</h1>
          <p className='description'>description : {this.props.association.description}</p>
          <div className='location'>
            <img src="" alt="" />
            <p className='adresse'>3 rue de Metz 75010 Paris</p>
            <button type='button' className='save_donation'>Enregistrer dans mes dons</button>
          </div>
          <p className='title_converter'>Rentrez votre don pour voir quelle somme va pouvoir être déduite de vos impôts </p>
          <div className='container_converter'>
            <Converter/>
            <div className='donattion_button_section'>
              <button type='button' className='save_donation'>Donner sur le site</button>
            </div>
          </div>
      </div>
    )
  }
}
