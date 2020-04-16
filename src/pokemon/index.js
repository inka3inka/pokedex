import React from 'react';
import PokemonStatistics from './statistics';
import PokemonHeader from './header';
import './styles.scss';

export default function Pokemon({ pokemon }){
  return (
    <div className="pokemon">
      <PokemonHeader pokemon={pokemon} />
      <PokemonStatistics pokemon={pokemon}/>
    </div>
  )
}