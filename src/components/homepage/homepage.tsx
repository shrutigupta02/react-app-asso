import React, { Component } from 'react';
import axios from 'axios';
import Searchengine from '../searchengine/searchengine';
import Donationpage from '../donationpage/donationpage';
import Nav from '../nav/nav';
import Myaccount from '../myaccount/myaccount';
import './homepage.css';
import Login from '../login/login';
import homepage_img from '../../img/homepage_picture.png';

// define the type of the state
export type AssociationsState = {
  associations: {
    id: number,
    name: string,
    description: string
  }[],
  associationSelected: {
    id: number,
    name: string,
    description: string
  },
  accountPageOpened: Boolean,
  userIsLoggingIn: Boolean,
  userName: string,
  donations: { name: string, donationNumber: number }[]
}

// creation of the home page component
export default class Homepage extends React.Component<{}, AssociationsState> {
  // initialize the state
  state = {
    associations: [],
    associationSelected: {
      id: -1,
      name: 'none',
      description: 'none'
    },
    accountPageOpened: false,
    userIsLoggingIn: false,
    userName: 'email@example.com',
    taxExoneration: 0,
    donations: [
      { name: 'CEAS', donationNumber: 100 },

    ]
  }

  // Fetch associations from MongoDB when the component mounts
  componentDidMount() {
    axios.get('/api/associations')
      .then(response => {
        this.setState({ associations: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the associations!", error);
      });
  }

  // function to open the Login page
  handleLogin = () => {
    this.setState({ userIsLoggingIn: true, accountPageOpened: false });
  }

  // function to modify the association selected in the state
  handleAssociation = (associationSelectedId: number, associationSelectedName: string, associationSelectedDescription: string) => {
    this.setState({
      associationSelected: {
        id: associationSelectedId,
        name: associationSelectedName,
        description: associationSelectedDescription
      },
      userIsLoggingIn: false
    });
  }

  // function for quitting the DonationPage and going back to the homepage
  quitDonationPage = () => {
    this.setState({
      associationSelected: {
        id: -1,
        name: this.state.associationSelected.name,
        description: this.state.associationSelected.description
      }
    });
  }

  // function to open the myaccount.tsx page
  handleAccountPageOpened = () => {
    this.setState({ accountPageOpened: true, userIsLoggingIn: false });
  }

  // function to go back to the homepage from the header
  handleHomepage = () => {
    this.setState({
      associationSelected: { id: -1, name: 'none', description: 'none' },
      accountPageOpened: false,
      userIsLoggingIn: false
    });
  }

  // change the username in all the components when the user is connected to the app
  handleGlobalUsername = (user: string) => {
    this.setState({ userName: user, accountPageOpened: false, userIsLoggingIn: false });
  }

  render() {
    // condition to render the account page
    if (this.state.accountPageOpened && !this.state.userIsLoggingIn) {
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage} />
          <Myaccount userName={this.state.userName} donations={this.state.donations} />
        </div>
      );
    // condition to render the homepage       
    } else if (this.state.associationSelected.id === -1 && !this.state.accountPageOpened && !this.state.userIsLoggingIn) {
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage} />
          <div className='home_container'>
            <div className='titleandtext'>
              <h1>Save and Support</h1>
              <p className='main_text'>
                Looking for ways to reduce your taxes and support a cause you care about?
                We are here to help!
              </p>
            </div>
            <img src={homepage_img} alt="homepage_img" className='hp_pic' />
          </div>
          <Searchengine associations={this.state.associations} handleAssociation={this.handleAssociation} />
        </div>
      );
    // condition to render the login page
    } else if (this.state.userIsLoggingIn) {
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage} />
          <Login handleUser={this.handleGlobalUsername} />
        </div>
      );
    // condition to render the page of the association with the converter
    } else {
      return (
        <div>
          <Nav handleAccountPageOpened={this.handleAccountPageOpened} handleLogin={this.handleLogin} handleHomepage={this.handleHomepage} />
          <Donationpage association={this.state.associationSelected} handleAssociation={this.handleAssociation} quitPage={this.quitDonationPage} userName={this.state.userName} />
        </div>
      );
    }
  }
}
