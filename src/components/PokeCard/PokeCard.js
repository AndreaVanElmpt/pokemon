import axios from "axios";
import React, {useEffect, useState} from "react";
import './PokeCard.css'

function PokeCard({ url }) {
    const [pokemonData, setPokemonData] = useState();


    useEffect(()=>{ async function fetchData() {
        try {
            const result = await
                axios.get(`${url}`);
            console.log(result.data);
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    } fetchData()}, [url])

    return (
        <>

                <div className='pokemon-card'>

             {pokemonData &&
                 <>

                     <h2>{pokemonData.name}</h2>


                     <h3><img src={pokemonData.sprites.front_default } alt={pokemonData.name}/></h3>


                     <h3>Moves: {pokemonData.moves.length}</h3>
                     <h3>Weight: {pokemonData.weight}</h3>

                    <div className='pokemon-card__abilities'>
                     <h3>Abilities:</h3>
                     <ul>
                         {pokemonData.abilities.map((ability, index) =>{
                             return <li key={index}>{ability.ability.name}</li>
                         })}
                     </ul>
                    </div>
                 </>
             }

                </div>

        </>
    );
}



export default PokeCard
