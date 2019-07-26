import React from 'react'
import styled from 'styled-components'

const CharacterDiv = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1rem;

`;



export default function CharacterCard ({ image, name, species, status, location, origin }) {
  return ( 
    <CharacterDiv>
      <img src={image} />
      <h2>{name}</h2>
      <h3>{species}{' '}{status}</h3>
      <p>Location: {location}</p>
      <p>Origin: {origin}</p>
    </CharacterDiv>
  )
}
