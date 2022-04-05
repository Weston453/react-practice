import React, {useState} from 'react'
import './App.css';
import Axios from 'axios'


function App() {
  const [ pokemon, setPokeman ] = useState("")
  const [ pokemonName, setPokemonName ] = useState("")

  const typePokemonName = (e) => {
    setPokemonName(e.target.value)
  }
  
  const getPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`).then(
      (response) => {
        setPokeman(JSON.stringify((response)['data']['stats']))
        console.log((response)['data'])
      }
    )
    }

  return (
    <div>
     <h1>hello</h1>
     <input placeholder="pokemon" onChange={typePokemonName}></input>
     <button onClick={getPokemon}>Get Pokemon</button>
     Name: {pokemon}
    </div>
  );
}

export default App;
