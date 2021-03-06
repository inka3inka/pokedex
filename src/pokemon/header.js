import React from 'react';

export default function PokemonHeader({ pokemon }){
  return (
    <div className="pokemon__header">
      <h3 className="pokemon__name">
        <div>{pokemon.name}</div>
        <div>#{pokemon.id}</div>
      </h3>
      <div className="pokemon-image__container">
        <img className="pokemon__image" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="pokemon image" />
      </div>
    </div>
  )
}