import React from 'react'
import styled from 'styled-components'

const CharacterDiv = styled.div`
  border: 2px solid grey;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 10px;

`;

const Img = styled.img`
  border-bottom: 1px solid black;

`;



export default function CharacterCard ({ image, name, species, status, location, origin }) {
  return ( 
    <CharacterDiv>
      <Img src={image} />
      <h2>{name}</h2>
      <h3>{species}{' '}{status}</h3>
      <p>Location: {location}</p>
      <p>Origin: {origin}</p>
    </CharacterDiv>
  )
}
