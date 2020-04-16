import React from 'react';
import Pokemon from "../pokemon";
import './styles.scss'

export default function Pokedex(props) {
  return (
    <div className="pokedex-container">
      <ul>
        {props.pokemons.map(pokemon =>
          <li key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </li>
        )}
      </ul>
    </div>
  )
}