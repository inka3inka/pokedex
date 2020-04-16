import React from 'react';

export default function PokemonStatistics({ pokemon }){
  return (
    <div className="pokemon__statistics">
      <div className="pokemon__abilities">
        <span>Abilities: </span>
        <div>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</div>
      </div>
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>Types: {pokemon.types.map(type => type.type.name).join(', ')}</div>
    </div>
  )
}