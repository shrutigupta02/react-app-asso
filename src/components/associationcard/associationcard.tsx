import React, { Component } from 'react'
import { Link } from "react-router-dom";


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
      <div>
          <Link to="/" onClick={() => this.props.handleAssociation(this.props.association.id, this.props.association.name, this.props.association.description) }>
                card : id= {this.props.association.id} {this.props.association.name} - {this.props.association.description}
          </Link>         
      </div>  
    )
  }
}

