import React, { Component } from 'react'

export type association = {
    association: {
      name:string,
      description: string
    }
  }


export default class Associationcard extends Component <association, {}>{
  render() {
    console.log(this.props)
    return (
      <div>association card {this.props.association.description}</div>
    
    )
  }
}
