import React from 'react';

export default function PokemonStatistics({ pokemon }){
  return (
    <div className="pokemon__statistics">
      <div className="pokemon-row">
        <span className="pokemon-row__label">Abilities: </span>
        <div className="pokemon-row__content">{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</div>
      </div>
      <div className="pokemon-row">
        <span className="pokemon-row__label">Height:</span>
        <div className="pokemon-row__content">{pokemon.height}</div>
      </div>
      <div className="pokemon-row">
        <span className="pokemon-row__label">Weight:</span>
        <div className="pokemon-row__content">{pokemon.weight}</div>
      </div>
      <div className="pokemon-row">
        <span className="pokemon-row__label">Types: </span>
        <div className="pokemon-row__content">{pokemon.types.map(type => type.type.name).join(', ')}</div>
      </div>
    </div>
  )
}