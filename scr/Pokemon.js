import React from 'react';

export function Pokemon(props){
  return (
    <div>
      {props.name} {props.number} {props.abilities} {props.height} {props.weight} {props.types} {props.image}
    </div>
  )
}