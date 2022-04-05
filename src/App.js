import React, {useState, useEffect} from 'react'
import './App.css';
import Axios from 'axios'


function App() {
//API practice
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

//Incrament/decrament counter practice
let [ counter, setCounter ] = useState(0)

//API part2 Practice

const [ data, setData ] = useState('')
const [ userInfo, setUserInfo ] = useState([])

useEffect(() => {
  getData()

}, [])

const getData = () => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
    .then((response) => {
      setData(JSON.stringify(response))
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div>
    {/* API practice */}
     <h1>hello</h1>
     <input placeholder="pokemon" onChange={typePokemonName}></input>
     <button onClick={getPokemon}>Get Pokemon</button>
     Name: {pokemon}

     {/* Increment/decrement Counter Practice  */}
     <div>
       <button onClick={() => {
         setCounter(counter -=1)
       }}>-</button>
       {counter}
       <button onClick={() => {
         setCounter(counter +=1)
       }}>+</button>
     </div>

    {/* API part2 Practice */}
    <button onClick={getData}>get data</button>
    {data}

    </div>
  );
}

export default App;
