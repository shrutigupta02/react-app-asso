import React, { Component } from 'react'
import Searchengine from '../searchengine/searchengine'
import Donationpage from '../donationpage/donationpage'
import Nav from '../nav/nav'
import Myaccount from '../myaccount/myaccount'
import './homepage.css'
import Login from '../login/login'



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
  accountPageOpened: Boolean,
  userIsLoggingIn: Boolean
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
    },
    accountPageOpened: false,
    userIsLoggingIn: false
  }

  handleLogin = () => {
    let associationSelected = this.state.associationSelected
    let associations = this.state.associations
    let accountPageOpened = false
    let userIsLoggingIn = true
    let newState = {associations, associationSelected, accountPageOpened, userIsLoggingIn}

    this.setState(newState)
  }

  // function to modify the association selected in the state
  handleAssociation = (associationSelectedId:number, associationSelectedName:string, associationSelectedDescription:string) => {
    let associationSelected = {id:associationSelectedId, name:associationSelectedName , description:associationSelectedDescription}
    let associations = this.state.associations
    let accountPageOpened = this.state.accountPageOpened
    let userIsLoggingIn = false
    let newAssociations = {associations, associationSelected, accountPageOpened, userIsLoggingIn}
    
    this.setState(newAssociations)
  }

  // function for quitting the DonationPAge and going back to the homepage
  quitDonationPage = () => {
    let associations = this.state.associations
    let assoSelectedName = this.state.associationSelected.name
    let assoSelectedDescription = this.state.associationSelected.description
    let associationSelected = {id:-1, name:assoSelectedName, description:assoSelectedDescription}
    let accountPageOpened = this.state.accountPageOpened
    let newAssoState = {associations, associationSelected, accountPageOpened}

    this.setState(newAssoState)
  }

  handleAccountPageOpened = () => {
    let associations = this.state.associations
    let assoSelectedName = this.state.associationSelected.name
    let assoSelectedDescription = this.state.associationSelected.description
    let assoSelectedId = this.state.associationSelected.id
    let associationSelected = {id:assoSelectedId, name:assoSelectedName, description:assoSelectedDescription}
    let accountPageOpened = true
    let userIsLoggingIn = false
    let newState = {associations, associationSelected, accountPageOpened, userIsLoggingIn}

    this.setState(newState)
  }

  handleHomepage = () => {
    let associationSelected = this.state.associationSelected
    let associations = this.state.associations
    let accountPageOpened = false
    let userIsLoggingIn = false
    let newState = {associations, associationSelected, accountPageOpened, userIsLoggingIn}

    this.setState(newState)
  }


  

  render() {
    
    if(this.state.accountPageOpened==true && this.state.userIsLoggingIn == false){
      return (
        <div> 
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage}/>
          <Myaccount />
        </div>
      )                 
    } else if(this.state.associationSelected.id==-1 && this.state.accountPageOpened == false && this.state.userIsLoggingIn == false)
      return (     
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage}/> 
          <div className='home_container'>
            <div className='titleandtext'>
              <h1>Économisez et Soutenez</h1>
              <p className='main_text'>
              Vous cherchez le moyen de baisser 
              vos impots et de soutenir une association 
              qui vous tiens à coeur.

              Nous sommes là pour vous !
              </p>
            </div> 
            <img src='' alt="homepage_img" className='hp_pic'></img>
          </div>
          <Searchengine associations={this.state.associations} handleAssociation={this.handleAssociation}/>  
          <Searchengine  associations={this.state.associations} handleAssociation={this.handleAssociation}/>
        </div>  
      ) 
    else if(this.state.userIsLoggingIn == true){
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage}/>
          <Login />
        </div>
      )
    } else {
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage}/>
          <Donationpage association={this.state.associationSelected} handleAssociation={this.handleAssociation} quitPage={this.quitDonationPage} />
        </div>
      )
    } 

  }
}