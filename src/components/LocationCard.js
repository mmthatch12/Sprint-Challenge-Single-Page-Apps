import React from 'react'
import styled from 'styled-components'

const LocationDiv = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1rem;
  width: 40%;
  margin: 10px 0px 10px 5px;
  padding: 10px;

`;

export default function LocationCard ({ name, type, dimension }) {
  // image={image}
  return (
    <LocationDiv>
      <h1>{name}</h1>
      <h3>{type} - {dimension}</h3>
    </LocationDiv>
  )
}
