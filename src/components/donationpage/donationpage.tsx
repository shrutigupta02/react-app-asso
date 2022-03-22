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

          <Link className='quit' to="/" onClick={() => {this.props.quitPage()}}>retour</Link>
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
            <div className='donation_button_section'>
              <button type='button' className='give_donation'>Donner sur le site</button>
            </div>
          </div>
          <div className='how_to'>
            <section>
              <h2>Comment ça marche ?</h2>
              <h3>Dons à des organismes d'intérêt général ou reconnu d'utilité publique</h3>
              <p>Les dons ouvrent droit à une réduction d'impôt sur le revenu égale à 66 % du montant versé dans la limite de 20 % du revenu imposable. Un don de 50 € ouvre par exemple droit à une réduction d'impôt de 33 €, un don de 100 € à une réduction de 66 €, etc.</p>
              <h3>Dons à des organismes d'aide aux personnes en difficulté ou aux victimes de violences domestiques</h3>
              <p>La réduction d'impôt est de 75 % pour un don d'un montant inférieur ou égal à 1000 €. La fraction au-delà de 1000 € ouvre droit à une réduction d'impôt de 66 % du montant donné.</p>
              <p>Cette réduction d'impôt ne peut être supérieure à 20 % du revenu imposable.</p>
            </section>
          </div>
      </div>
    )
  }
}
