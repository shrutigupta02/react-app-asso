import React, { Component } from 'react'
import './login.css'

export type loginState = {
  isCreatingAccount: Boolean
}

export default class Login extends React.Component<{},loginState>{
 
  state = {
    isCreatingAccount: false
  }

  handleIsCreatingAccount = () => {
    let isCreatingAccount = !this.state.isCreatingAccount
    this.setState({isCreatingAccount})
  }

  render() {
    if(this.state.isCreatingAccount == false){
      return (
        <div className="loginPage">
          <form action="" method="get" className='loginContainer'>
            <input type="email" name='email' id='email' placeholder='      email' className='loginInput'></input> 
            <input type="password" name='password' id='password' placeholder='     mot de passe' className='loginInput'/>
            <input type="submit" value='se connecter' className='loginInput confirmInput'/>
            <div></div>
            <p onClick={() => this.handleIsCreatingAccount() }>créer un compte</p>
          </form>
        </div>
      )
    } else {
      return (
        <div className="loginPage">
          <form action="" method="get" className='loginContainer'>
            <input type="email" name='email' id='email' placeholder='      email' className='loginInput'></input> 
            <input type="password" name='password' id='password' placeholder='     mot de passe' className='loginInput'/>
            <input type="submit" value='créer un compte' className='loginInput confirmInput'/>
            <div></div>
            <p onClick={() => this.handleIsCreatingAccount() }>se connecter</p>
          </form>
        </div>
      )
    }
  }
}
