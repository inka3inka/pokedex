import React, {Component} from 'react';

export class Searcher extends Component {

  state = {
    hit: ''
  };


  handleHitChange = e => {
    e.preventDefault();
    this.setState({
      hit: e.target.value
    })
  }

  handleHits = () => {
    return this.state.hit == pokemons.pokemonName || pokemons.pokemonID ? pokemons[pokemons.pokemonID] : 'Result nof found'
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Find pokemon (Name or Number)" value={this.state.hit} onChange={this.handleHitChange}/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}