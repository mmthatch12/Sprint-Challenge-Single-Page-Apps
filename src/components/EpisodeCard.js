import React from 'react'
import styled from 'styled-components'

const EpisodeDiv = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1rem;
  margin: 20px;
  width: 30%;
`;

export default function EpisodeCard ({ name, date, episodenum }) {
  // image={image}
  return (
    <EpisodeDiv>
      <h1>{name}</h1>
      <h3>{date}</h3>
      <h3>{episodenum}</h3>
    </EpisodeDiv>
  )
}