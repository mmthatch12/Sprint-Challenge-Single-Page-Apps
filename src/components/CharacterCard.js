import React from 'react'

export default function CharacterCard ({ image, name, species, status, location, origin }) {
  return ( 
    <div>
      <img src={image} />
      <h1>{name}</h1>
      <h3>{species}</h3>
      <h3>{status}</h3>
      <h3>{location}</h3>
      <h3>{origin}</h3>
    </div>
  )
}
