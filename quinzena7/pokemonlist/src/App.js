import axios from "axios";
import React from "react";
import { CardPokemon } from "./components/estiloPokeCard";
import PokeCard from "./components/PokeCard";
import { useState, useEffect } from "react";

function App() {
  const [pokeList, setpokeList] = useState([]);
  const [pokeName, setpokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        const pokeList = response.data.results;
        setpokeList(pokeList);
      })
      .catch((err) => {
        alert("Algo deu errado");
      });
  }, [pokeName]);

  const changePokeName = (e) => {
    setpokeName(e.target.value);
  };

  return (
    <CardPokemon>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
              
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </CardPokemon>
  );
}

export default App;
