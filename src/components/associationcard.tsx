import React, { Component } from 'react'

export type association = {
    association: {
      name:string,
      description: string
    }
    handleAssociation: Function
  }


export default class Associationcard extends Component <association, {}>{
  render() {
    console.log(this.props)
    return (
      <div>
          association card {this.props.association.description}
          {this.props.handleAssociation({name:this.props.association.name,description:this.props.association.description})}
      </div>  
    )
  }
}

