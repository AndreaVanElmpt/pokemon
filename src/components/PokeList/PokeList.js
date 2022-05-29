import axios from "axios";
import React, {useEffect, useState} from "react";
import PokeCard from "../PokeCard/PokeCard";
import Button from "../Button/Button";
import "./PokeList.css"

function PokeList({}) {

    const [pokemonData, setPokemonData] = useState([]);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon/`)

    useEffect(() => {
    async function fetchData() {
        try {
            const result = await
                axios.get(`${endpoint}`);
                console.log(result.data)
                setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }


        fetchData();
    }, [endpoint]);


    return (

     <>

       <div className='buttons-control'>
          <div className='button-next-prev'>
            <Button
               type='button'
               disabled={!pokemonData.previous}
               onClickBtn={() => setEndpoint(pokemonData.previous)}
            >
             vorige
           </Button>
           <Button
             type='button'
             disabledBtn={!pokemonData.next}
             onClickBtn={() => setEndpoint(pokemonData.next)}
            >
             volgende
           </Button>
          </div>

       </div>

              <div className='card-list'>
                 {pokemonData.results && pokemonData.results.map((pokemon) => {
                     return <PokeCard url={pokemon.url}  key={pokemon.name}/>
                 })}
             </div>
         }


     </>
  );
}
export default PokeList;