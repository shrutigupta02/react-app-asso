import React, { Component } from 'react'
import Associationcard from './associationcard'
import { Link } from "react-router-dom";

export type associations = {
    associations: {
      id:number,
      name:string,
      description: string
    }[]
    handleAssociation: Function
  }



export default class Searchengine extends Component <associations, {}> {
  render() {
    // console.log(this.props)
    return (
        
      <div>
        searchengine
        {
            this.props.associations.map(pres =>
                <div key={pres.id}>
                    <Associationcard association={pres} handleAssociation={this.props.handleAssociation}/>
                </div>
            )
        }
        {/*  */}
      </div>
    )
  }
}

// 
// 