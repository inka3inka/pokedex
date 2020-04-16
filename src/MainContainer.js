import React, {Component} from "react";
import {PokedexView} from "./PokedexView";
import {NavTab} from "./NavTab";
import Pagination from 'react-bootstrap/Pagination'
// import {Pages} from './Pagination';

export class MainContainer extends Component {

	state = {
		pokemons: []
	};



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

		let active = 1;
		let items = [];
		for (let number = 1; number <= 5; number++) {
			items.push(
				<Pagination.Item key={number} active={number === active}>
					{number}
				</Pagination.Item>,
			);
		}

		const paginationBasic = (
			<div>
				<Pagination>{items}</Pagination>
			</div>
		);
		return (
			<div className="main__container">
				<NavTab />
				<PokedexView pokemons={this.state.pokemons}/>
				{paginationBasic}
				{/*<Pages />*/}
			</div>
			)
		}
}
