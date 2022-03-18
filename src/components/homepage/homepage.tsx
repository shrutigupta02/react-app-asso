import React, { Component } from 'react'
import Searchengine from '../searchengine/searchengine'
import Donationpage from '../donationpage/donationpage'
import Nav from '../nav/nav'


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
      {id:2, name: 'asso3', description: 'description3'},
      {id:3, name: 'bilbou', description: 'description1'},
      {id:4, name: 'ccccc', description: 'description2'},
      {id:5, name: 'nanmaisnanmaisnanmains', description: 'description3'}
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
    let newAssociations = {associations, associationSelected}
    
    this.setState(newAssociations)
  }

  // function for quitting the DonationPAge and going back to the homepage
  quitDonationPage = () => {
    let associations = this.state.associations
    let assoSelectedName = this.state.associationSelected.name
    let assoSelectedDescription = this.state.associationSelected.description
    let associationSelected = {id:-1, name:assoSelectedName, description:assoSelectedDescription}
    let newAssoState = {associations, associationSelected}

    this.setState(newAssoState)
  }

  render() {
    
    if(this.state.associationSelected.id==-1)
      return (
        <div>
          <Nav/>
          <Searchengine  associations={this.state.associations} handleAssociation={this.handleAssociation}/>
        </div>  
        
      )
    else {
      return (
        <div>
          <Nav/>
          <Donationpage association={this.state.associationSelected} handleAssociation={this.handleAssociation} quitPage={this.quitDonationPage} />
        </div>
      )
    }
  }
}
