import axios from "axios";
import React from "react";
import { EstiloInternoCard } from "./estiloPokeCard";


import { useState, useEffect, } from "react";

function PokeCard(props) {
  const [pokemon, setpokemon] = useState({});
  

  useEffect(() => {
    
    const fetchPokemon = (pokeName) => {
      console.log("pokename esta aqui ",pokeName)
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
          const pokemon = response.data;
        
          setpokemon(pokemon);
      
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err, "deu erro");
        });
    };
    
    fetchPokemon(props.pokemon);
  }, [props.pokemon]);

  return (
    <>
      <EstiloInternoCard>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </EstiloInternoCard>
    </>
  );
}

export default PokeCard;
