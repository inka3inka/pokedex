import React from 'react';
import {Pokemon} from "./Pokemon";

export function PokedexView(props) {

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