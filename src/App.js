import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [pokemonData, setPokemonData] = useState({});


    useEffect(()=>{ async function fetchData() {
        try {
            const result = await
                axios.get(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
            console.log(result.data);
            setPokemonData(result.data)
        } catch (e) {
            console.error(e);
        }
    } fetchData()}, [])

  return (
 <>
    <div>
      Begin hier met de opdracht!

      <span>
             {Object.keys(pokemonData).length > 0 &&
                 <>
                     <h2>{pokemonData.name}</h2>
                     <h3><img src={pokemonData.sprites.front_default } alt={pokemonData.name}/></h3>
                     <h3>Moves: {pokemonData.moves.length}</h3>
                     <h3>Weight: {pokemonData.weight}</h3>
                     <h3>Abilities:</h3>
                     <ul>
                         {pokemonData.abilities.map((ability, index) =>{
                             return <li key={index}>{ability.ability.name}</li>
                         })}
                     </ul>

                 </>
             }
      </span>
    </div>
 </>
  );
}


export default App;
