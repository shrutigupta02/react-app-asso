import React, { Component, useState } from 'react'
import Associationcard from '../associationcard/associationcard'
import './searchengine.css'


export type associations = {
  associations: {
    id:number,
    name:string,
    description: string
  }[]
  handleAssociation: Function
}

export default function Searchengine(props: associations) {
  
  const [searchTerm, setSearchTerm] = useState('')
  
    return (
      <div className='searchEngine'> 
        <input type="text" className='searchInput' placeholder="  Chercher une association..." onChange= {event => setSearchTerm(event.target.value)}/> 
        {/* mapping in the associations and displaying a card for each one */}
        <div className="cardContainer">
        {props.associations.filter((val) => {
            
            if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          
          }).map((pres) => {
          return <div key={pres.id} className='cards'><Associationcard association={pres} handleAssociation={props.handleAssociation}/></div>
        })}
        </div>
      </div>
    )
}


