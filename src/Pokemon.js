import React from 'react';

export function Pokemon({ pokemon: props }){
  return (
    <div className="pokemon">
      <h3 className="pokemon__name">{props.name} #{props.id}</h3>
      <div className="pokemon-image__container"><img className="pokemon__image" src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} /></div>
      <div className="pokemon__statistics">
        <div className="pokemon__abilities">
          <span>Abilities: </span>
          <div>{props.abilities.map(ability => ability.ability.name).join(', ')}</div>
        </div>
        <div>Height: {props.height}</div>
        <div>Weight: {props.weight}</div>
        <div>Types: {props.types.map(type => type.type.name).join(', ')}</div>
      </div>
    </div>
  )
}