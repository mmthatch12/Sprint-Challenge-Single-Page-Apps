import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard'

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
                <LocationCard 
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                />


              )}
          )}
          
        </section>
      )
}
