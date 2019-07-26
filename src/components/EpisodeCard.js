import React from 'react'

export default function EpisodeCard ({ name, date, episodenum }) {
  // image={image}
  return (
    <div>
      <h1>{name}</h1>
      <h3>{date}</h3>
      <h3>{episodenum}</h3>
    </div>
  )
}