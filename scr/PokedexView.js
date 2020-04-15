import React, {Component} from 'react';
import {Pokemon} from "./Pokemon";

export class PokedexView extends Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    function Pokemon(pokemonName, pokemonAbilities, pokemonID, pokemonHeight, pokemonWeight, pokemonTypes, pokemonImage) {
      this.pokemonName = pokemonName;
      this.pokemonAbilities = pokemonAbilities;
      this.pokemonID = pokemonID;
      this.pokemonHeight = pokemonHeight;
      this.pokemonWeight = pokemonWeight;
      this.pokemonTypes = pokemonTypes;
      this.pokemonImage = pokemonImage
    }

    let pokemons = [...this.state.pokemons];

    for (let i = 1; i <= 10; i++) {
      pokemons.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(pokemon => {
              return new Pokemon(
                pokemon.species.name,
                pokemon.abilities.map(element => element.ability.name),
                pokemon.id,
                pokemon.height,
                pokemon.weight,
                pokemon.types.map(element => element.type.name),
                `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`);
            }
          )
      )
    }
    this.setState({
      pokemons: pokemons
    });
  }


    render() {
      const {pokemons} = this.state;
      console.log(pokemons);

      return (
        <div className="pokedex-container">
          <ul>
            {console.log(pokemons[0])};
            {/*{pokemons.map((element) => <li key={element.pokemonID}>Hello {element.pokemonName}</li>)}*/}
            {/*<li><img alt="Pokemon image" src={this.state.pokemonImage} /></li>*/}
            {pokemons.map(element =>
              <li key={element.pokemonID}>
                <Pokemon
                  name={element.pokemonName}
                  number={element.pokemonID}
                  abilities={element.pokemonAbilities}
                  height={element.pokemonHeight}
                  weight={element.pokemonWeight}
                  types={element.pokemonTypes}
                  image={element.pokemonImage}
                  />
              </li>
              )}
          </ul>
        </div>
      )

    }
  }
