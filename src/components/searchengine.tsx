import React, { Component } from 'react'
import Associationcard from './associationcard'

export type associations = {
    associations: {
      name:string,
      description: string
    }[]
  }



export default class Searchengine extends Component <associations, {}> {
  render() {
    // console.log(this.props)
    return (
        
      <div>
        searchengine
        <Associationcard association={this.props.associations[0]} />
      </div>
    )
  }
}

// 
// 