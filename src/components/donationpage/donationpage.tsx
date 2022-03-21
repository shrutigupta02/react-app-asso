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

          < Converter />
      </div>
    )
  }
}
