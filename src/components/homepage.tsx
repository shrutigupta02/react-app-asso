import React, { Component } from 'react'
import Searchengine from './searchengine'
import { useState } from 'react'

export type AssociationsState = {
  associations: {
    name:string,
    description: string
  }[]
}

export default class Homepage extends React.Component<{}, AssociationsState>{
    
  state = {
    associations: [
      {name: 'asso1', description: 'description1'},
      {name: 'asso2', description: 'description2'}
    ]    
  }

  render() {
    // console.log(this.state)
    return (
      <div>homepage
        <Searchengine  associations={this.state.associations}/>
        
      </div>  
      
    )
  }
}
// 
