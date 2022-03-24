import React, { Component } from 'react'
import './login.css'
import { postNewUser } from "../../api/index";

export type loginState = {
  isCreatingAccount: Boolean
  userName: string
  userPassword: string
}

export type loginProps = {
  handleUser:Function
} 

export default class Login extends React.Component<loginProps,loginState>{
  // export default function Login(state: loginState) {
 
  state = {
    isCreatingAccount: false,
    userName: 'name',
    userPassword: 'password'
  }


  handleIsCreatingAccount = () => {
    let isCreatingAccount = !this.state.isCreatingAccount
    this.setState({isCreatingAccount})

    postNewUser(this.state.userName, this.state.userPassword)
  }

  handleUsername = (user:string) => {
    
    let userName = user
    let isCreatingAccount = this.state.isCreatingAccount
    let userPassword = this.state.userPassword

    this.setState({isCreatingAccount, userName, userPassword})
  }

  handlePassword = (password:string) => {
    let userName = this.state.userName
    let isCreatingAccount = this.state.isCreatingAccount
    let userPassword = password

    this.setState({isCreatingAccount, userName, userPassword})
  }

  handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    this.props.handleUser(this.state.userName)
    event.preventDefault();
    this.handleIsCreatingAccount()
    // TO DO 
    // ajouter que : si la connexion a fonctionné on part de la page
  }

  render() {
    // if(this.state.isCreatingAccount == false){
      return (
        <div className="loginPage">
          <form action="" method="get" className='loginContainer' onSubmit={this.handleFormSubmit}>
            <input type="email" name='email' id='email' placeholder='email' className='loginInput' onChange={event1 => this.handleUsername(event1.target.value)}></input> 
            <input type="password" name='password' id='password' placeholder='mot de passe' className='loginInput' onChange={event => this.handlePassword(event.target.value)}/>
            <input type="submit" value='se connecter' className='loginInput confirmInput'/>
            <div></div>
            <p onClick={() => this.handleIsCreatingAccount() }>créer un compte</p>
          </form>
        </div>
      )
    // } 
    // else {
    //   return (
    //     <div className="loginPage">
    //       <form action="" method="get" className='loginContainer' onSubmit={this.handleFormSubmit}>
    //         <input type="email" name='email' id='email' placeholder='email' className='loginInput' onChange={event => this.handleUsername(event.target.value)}></input> 
    //         <input type="password" name='password' id='password' placeholder='mot de passe' className='loginInput' onChange={event => this.handlePassword(event.target.value)}/>
    //         <input type="submit" value='créer un compte' className='loginInput confirmInput'/>
    //         <div></div>
    //         <p onClick={() => this.handleIsCreatingAccount() }>se connecter</p>
    //       </form>
    //     </div>
    //   )
    // }
  }
}
