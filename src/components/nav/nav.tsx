import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import logo from '../../img/logo.png'

export type NavProps = {
  handleAccountPageOpened: Function
  handleLogin: Function
  handleHomepage: Function
}



export default class Nav extends React.Component<NavProps, {}>{
  
  render() {
      return (
        <div className='navbar'>    
            <Link to="/" onClick={() => this.props.handleAccountPageOpened()} className='accountButton'>My Account</Link>
            <Link to="/" onClick={() => this.props.handleLogin()} className='connexionButton'>Log In</Link>
            <Link to="/" onClick={() => {this.props.handleHomepage()}} className='homepageButton'>Welcome</Link>          
            <img src={logo} onClick={() => {this.props.handleHomepage()}}></img>
        </div>
      )
  }
}
