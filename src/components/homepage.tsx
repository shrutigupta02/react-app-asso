import React, { Component } from 'react'
import Searchengine from './searchengine'
import { useState } from 'react'


// define the type of the state
export type AssociationsState = {
  associations: {
    id:number,
    name:string,
    description: string
  }[],
  associationSelected: {
    id: number,
    name:string,
    description: string
  }
}


// creation of the home page component
export default class Homepage extends React.Component<{}, AssociationsState>{
    
  // initialize the state
  state = {
    associations: [
      {id:0, name: 'asso1', description: 'description1'},
      {id:1, name: 'asso2', description: 'description2'},
      {id:2, name: 'asso2', description: 'description2'}
    ],
    associationSelected: {
      id: -1,
      name:'none',
      description: 'none'
    }
  }

  // function to modify the association selected in the state
  handleAssociation = (associationSelectedId:number, associationSelectedName:string, associationSelectedDescription:string) => {
    
    let associationSelected = {id:associationSelectedId, name:associationSelectedName , description:associationSelectedDescription}
    let associations = this.state.associations
     
    
    this.setState({associations, associationSelected})
  }

  render() {
    
    if(this.state.associationSelected.id==-1)
    return (
      <div>homepage
        <Searchengine  associations={this.state.associations} handleAssociation={this.handleAssociation}/>
      </div>  
      
    )
  }
}
// 
