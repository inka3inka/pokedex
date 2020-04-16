import React from 'react';

export default function PokemonStatistics({ pokemon }){
  return (
    <div className="pokemon__statistics">
      <div className="pokemon__abilities">
        <span>Abilities: </span>
        <div>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</div>
      </div>
      <div className="pokemon__statistics--simple-header">
        <span>Height:</span>
        <div>{pokemon.height}</div>
      </div>
      <div className="pokemon__statistics--simple-header">
        <span>Weight:</span>
        <div>{pokemon.weight}</div>
      </div>
      <div>
        <span>Types: </span>
        <div>{pokemon.types.map(type => type.type.name).join(', ')}</div>
      </div>
    </div>
  )
}