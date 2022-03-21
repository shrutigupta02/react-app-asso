import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export type NavProps = {
  handleAccountPageOpened: Function
  handleLogin: Function
  userIsLoggedIn: Boolean
}



export default class Nav extends React.Component<NavProps, {}>{
  
  render() {
    if (this.props.userIsLoggedIn==false){
      return (
        <div className='navbar'>
            <Link to="/" onClick={() => this.props.handleAccountPageOpened()} className='accountButton'>Mon Compte</Link>
            <p>se connecter</p>
        </div>
      )
    } else if (this.props.userIsLoggedIn == true){
      <div className='navbar'>
        <Link to="/" onClick={() => this.props.handleAccountPageOpened()}>Mon Compte</Link>
      </div>
    }
  }
}
