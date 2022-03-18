import React, { Component, useState } from 'react'





 export default function Converter(){

    const [changeNumber, setChangeNumber] = useState('')
    

    return (
      <div>Convertisseur     
        <section>
          <input type="number" onChange={event => setChangeNumber(event.target.value)} />
          <input type="number" value={parseInt(changeNumber)*0.75} disabled/>
        </section>
      </div>
    )
}

