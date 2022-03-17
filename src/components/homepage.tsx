import React, { Component } from 'react'
import Searchengine from './searchengine'
import { useState } from 'react'

export type AssociationsState = {
  associations: {
    id:number,
    name:string,
    description: string
  }[]
  associationSelected: {
    name:string,
    description: string
  }
}



export default class Homepage extends React.Component<{}, AssociationsState>{
    
  state = {
    associations: [
      {id:0, name: 'asso1', description: 'description1'},
      {id:1, name: 'asso2', description: 'description2'}
    ],
    associationSelected: {
      name:'none',
      description: 'none'
    }
  }

  handleAssociation = (association:{name:string,description:string}) => { console.log('handleassociationlancé')}

  render() {
    // console.log(this.state)
    return (
      <div>homepage
        <Searchengine  associations={this.state.associations} handleAssociation={this.handleAssociation}/>
      </div>  
      
    )
  }
}
// 
