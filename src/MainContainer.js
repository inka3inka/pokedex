import React, {Component} from "react";
import {PokedexView} from "./PokedexView";
import {NavTab} from "./NavTab";

export class MainContainer extends Component {

	state = {
		pokemons: []
	}

	componentDidMount() {
		const pokemonPromises = new Array(10).fill(null).map((_, index) => {
			const request = fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`, {
				method: 'GET'
			})

			return request.then(response => response.json());
		})

		Promise.all(pokemonPromises)
			.then((pokemons)=> this.setState({
				pokemons
			}))
	}

	render() {
		return (
			<div className="container">
				<NavTab />
				<PokedexView pokemons={this.state.pokemons}/>
			</div>
			)
		}
}
