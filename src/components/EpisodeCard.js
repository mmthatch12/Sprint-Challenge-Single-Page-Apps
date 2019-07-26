import React from 'react'

export default function EpisodeCard ({ name, type, dimension }) {
  // image={image}
  return (
    <div>
      <h1>{name}</h1>
      <h3>{type} - {dimension}</h3>
    </div>
  )
}