import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export type NavProps = {
  handleAccountPageOpened: Function
}

export default class Nav extends React.Component<NavProps, {}>{
  render() {
    return (
      <div>
          <Link to="/" onClick={() => this.props.handleAccountPageOpened()}>Mon Compte</Link>
          <button>se connecter</button>
      </div>
    )
  }
}
