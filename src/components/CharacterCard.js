import React from 'react'

export default function CharacterCard ({ image, name, species, status, location, origin }) {
  return ( 
    <div>
      <img src={image} />
      <h1>{name}</h1>
      <h3>{species}{' '}{status}</h3>
      <h3>Location: {location}</h3>
      <h3>Origin: {origin}</h3>
    </div>
  )
}
