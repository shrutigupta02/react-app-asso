import React, { Component, useState } from 'react'
import Associationcard from '../associationcard/associationcard'



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
      <div> 
        <input type="text" placeholder="rechercher" onChange= {event => setSearchTerm(event.target.value)}/> 
        {/* mapping in the associations and displaying a card for each one */}
        {props.associations.filter((val) => {
            
            if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          
          }).map((pres) => {
          return <div key={pres.id}><Associationcard association={pres} handleAssociation={props.handleAssociation}/></div>
        })}
      </div>
    )
}





    // {id = props.associations[1].id}
    // {name = props.associations[1].name}
    // {description = props.associations[1].description}


    // 

  {/**/}

        {/* {
            props.associations.map((pres) => {
            <div key={pres.id}>
              <Associationcard association={pres} handleAssociation={props.handleAssociation}/>
            </div>
          })
        } */}  



 /* {
          this.props.associations.map(pres =>
            <div key={pres.id}>
              <Associationcard association={pres} handleAssociation={this.props.handleAssociation}/>
            </div>
          )
        }     */
        