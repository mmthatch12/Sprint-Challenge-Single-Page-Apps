import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard'

export default function EpisodesList() {
    const[episodesList, setEpisodesList] = useState([])

    useEffect(() => {
      Axios 
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
          const theInfo = response.data.results
          console.log('theInfo', response.data.results)
          setEpisodesList(theInfo)
        })
        .catch(error => {
          console.error(error)
        })
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [])

    return (
        <section className='character-list grid-view'>
    
          {episodesList.map(episode => {
              return (
                <div> 
                  <EpisodeCard
                    name={episode.name}
                    date={episode.date}
                    episodenum={episode.episode}
                />
              )}
          )}
          
        </section>
      )
}