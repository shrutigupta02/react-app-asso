import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./associationcard.css"


export type association = {
    association: {
      id: number,
      name:string,
      description: string
    }
    handleAssociation: Function
  }


export default class Associationcard extends React.Component<association, {}>{
  render() {
    return (
      <div className="AssociationCard">
      <p className="title">{this.props.association.name}</p>
      <p className="description">{this.props.association.description}</p>
          <Link to="/" className="NameLink" onClick={() => this.props.handleAssociation(this.props.association.id, this.props.association.name, this.props.association.description) }>
                En savoir plus
          </Link>         
      </div>  
    )
  }
}

