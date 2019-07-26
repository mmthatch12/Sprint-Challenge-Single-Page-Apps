import React, { useEffect, useState } from 'react';
import Axios from 'axios';

//https://rickandmortyapi.com/api/character/

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[characterList, setCharacterList] = useState([])

  useEffect(() => {
    Axios 
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const theInfo = response.data.results
        console.log('theInfo', response.data.results)
        setCharacterList(theInfo)
      })
      .catch(error => {
        console.error(error)
      })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  return (
    <section className='character-list grid-view'>

      {characterList.map(character => {
          return (
            <div> 
              <h2>{character.name}</h2>
              <h3>{character.status}</h3>
              <h3>{character.species}</h3>
            </div> 
          )}
      )}
      
    </section>
  )

}
