import React, {Component} from 'react';

export class Searcher extends Component {

  state = {
    hit: ''
  };


  handleAPIelements = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {method: 'GET'})
      .then(response => response.json())
  }


  handleHitChange = e => {
    e.preventDefault();
    this.setState({
      hit: e.target.value
    })
  }

  handleHits = e => {
    e.preventDefault();
    return this.state.hit == 'Hello' && 1 ? console.log('Tak') : console.log('Result nof found')
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Find pokemon (Name or Number)" value={this.state.hit} onChange={this.handleHitChange}/>
        <input type="submit" value="Search" onClick={this.handleHits} />
      </form>
    )
  }
}