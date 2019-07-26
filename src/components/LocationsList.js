import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function LocationsList() {
    const[locationsList, setLocationsList] = useState([])

    useEffect(() => {
      Axios 
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
          const theInfo = response.data.results
          console.log('theInfo', response.data.results)
          setLocationsList(theInfo)
        })
        .catch(error => {
          console.error(error)
        })
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [])

    return (
        <section className='character-list grid-view'>
    
          {locationsList.map(location => {
              return (
                <div> 
                  <h2>{location.name}</h2>
                  <h3>{location.type}</h3>
                  <h3>{location.dimension}</h3>
                </div> 
              )}
          )}
          
        </section>
      )
}
