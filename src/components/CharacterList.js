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

  return <section className='character-list grid-view'>
      <h2>TODO: `array.map()` over your state here!</h2>
      characterList.map(character => {

      })
      
    </section>

}
