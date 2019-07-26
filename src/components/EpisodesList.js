import React, { useEffect, useState } from 'react';
import Axios from 'axios';

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
                  <h2>{episode.name}</h2>
                  <h3>{episode.air_date}</h3>
                  <h3>{episode.episode}</h3>
                </div> 
              )}
          )}
          
        </section>
      )
}