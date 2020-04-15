import React from 'react';

export function Pokemon({ pokemon: props }){
  return (
    <div className="pokemon">
      <h3 className="pokemon__name">{props.name}</h3>
      <div>{props.number}</div>
      <div>{props.abilities.map(ability => ability.ability.name).join(', ')}</div>
      <div>{props.height}</div>
      <div>{props.weight}</div>
      <div>{props.types.map(type => type.type.name).join(', ')}</div>
      <div>{props.image}</div>
      <img className="pokemon__image" src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} />
    </div>
  )
}