import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokemon = () => {
  
  const [pokemones, setPokemones] = useState([]);

  const [isClicked, setIsClicked] = useState(false);

  
  useEffect(() => {
    
    if (isClicked) {
      axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
      .then(response=>setPokemones(response.data.results))
    }
  }, [isClicked]);
  const handleClick = ()=>{
    setIsClicked(!isClicked)
  }
  return (
    <div className='pokemones'>
      <button onClick={handleClick}>Fetch Pokemon</button>
        <ul>
          {
            pokemones.length > 0 && pokemones.map((pokemon,idx)=>{
              return (<li key={idx}>{pokemon.name}</li>)
            })
          }
        </ul>
    </div>
  );
}

export default Pokemon;
