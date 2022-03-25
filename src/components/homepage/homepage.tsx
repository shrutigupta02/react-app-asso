import React, { Component } from 'react'
import Searchengine from '../searchengine/searchengine'
import Donationpage from '../donationpage/donationpage'
import Nav from '../nav/nav'
import Myaccount from '../myaccount/myaccount'
import './homepage.css'
import Login from '../login/login'
import homepage_img from '../../img/homepage_picture.png'




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
  userName:string,
  donations:{name:string, donationNumber:number}[]
}



// creation of the home page component
export default class Homepage extends React.Component<{}, AssociationsState>{
  
 
  // initialize the state
  state = {
    associations: [
      {id:0, name: 'Centre d’étude et d’action sociales de Paris CEAS de Paris.', description: 'Ètude des problèmes familiaux sociaux susciter toute action ayant le souci du progrès social.'},
      {id:1, name: 'Evangile et vie', description: 'Travailler a la propagation des textes de l écriture sainte et des doctrines qu elle contient'},
      {id:2, name: 'Etoile sportive française', description: 'Pratique des sports en general ainsi que la préparation militaire des jeunes gens'},
      {id:3, name: 'Association sportive de la villa des otages', description: 'Création d une section judo et disciplines associées'},
      {id:4, name: 'CERCLE FEMININ DE PARIS', description: 'Entretenir force et santé pour hommes et femmes par la pratique des sports et exercices physiques'},
      {id:5, name: 'AMICALE DES PERCEPTEURS MUTILES', description: 'Développer chez les jeunes le culte du souvenir à l égard des soldats tombés sur les champs de bataille'},
      {id:6, name: 'Association sportive de la villa des otages', description: 'Pratique des sports en general ainsi que la préparation militaire des jeunes gens'},
      {id:7, name: 'Association des artistes musiciens', description: 'Aide aux artistes musiciens'},
    ],
    associationSelected: {
      id: -1,
      name:'none',
      description: 'none'
    },
    accountPageOpened: false,
    userIsLoggingIn: false,
    userName:'email@exemple.test',
    taxExoneration:0,
    donations:[
      {name:'CEAS', donationNumber:100},
      {name:'Evangile et vie', donationNumber:200},
      {name:'Etoile sportive française', donationNumber:350},
      {name:'Association sportive de la villa des otages', donationNumber:100},
      {name:'Cercle feminin de Paris', donationNumber:100},
      {name:'Amicale des percepteurs mutilés', donationNumber:100},
      {name:'Les cheminots philatélistes', donationNumber:100},
      {name:'Association Franco-Autrichienne', donationNumber:100},
      {name:'Union sociale pour l habitat', donationNumber:100},
      {name:'Association des anciens combattants', donationNumber:135},
    ]
  }

  // function to open the Login page
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

  // function to open the myaccount.tsx page
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

  // function to go back to the homepage from the header
  handleHomepage = () => {
    let associations = this.state.associations
    let assoSelectedName = this.state.associationSelected.name
    let assoSelectedDescription = this.state.associationSelected.description
    let assoSelectedId = -1
    let associationSelected = {id:assoSelectedId, name:assoSelectedName, description:assoSelectedDescription}
    let accountPageOpened = false
    let userIsLoggingIn = false
    let newState = {associations, associationSelected, accountPageOpened, userIsLoggingIn}

    this.setState(newState)
  }

  // change the username in all the components when the user is connected to the app
  handleGlobalUsername = (user:string) => {
    let associations = this.state.associations
    let assoSelectedName = this.state.associationSelected.name
    let assoSelectedDescription = this.state.associationSelected.description
    let assoSelectedId = this.state.associationSelected.id
    let associationSelected = {id:assoSelectedId, name:assoSelectedName, description:assoSelectedDescription}
    let accountPageOpened = false
    let userIsLoggingIn = false
    let userName = user
    let taxExoneration = this.state.taxExoneration
    let donations = this.state.donations

    let newState = {associations, associationSelected, accountPageOpened, userIsLoggingIn, userName, taxExoneration, donations}
    
    this.setState(newState)
  }


  

  render() {
    
    // condition to render the account page
    if(this.state.accountPageOpened==true && this.state.userIsLoggingIn == false){
      return (
        
        <div> 
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage}/>
          <Myaccount userName={this.state.userName} donations={this.state.donations} />
        </div>
      )        
    // condition to render the homepage       
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
            <img src={homepage_img} alt="homepage_img" className='hp_pic'></img>
          </div>
          <Searchengine  associations={this.state.associations} handleAssociation={this.handleAssociation}/>
        </div>  
      ) 
    // condition to render the login page
    else if(this.state.userIsLoggingIn == true){
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage}/>
          <Login handleUser={this.handleGlobalUsername}/>
        </div>
      )
    // condition to render the page of the association with the converter
    } else {
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage}/>
          <Donationpage association={this.state.associationSelected} handleAssociation={this.handleAssociation} quitPage={this.quitDonationPage} userName={this.state.userName} />
        </div>
      )
    } 

  }
}