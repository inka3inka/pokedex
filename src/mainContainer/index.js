import React, {Component} from "react";
import Pokedex from "../pokedex/index";
import NavTab from "../navTab/index";
import Pagination from 'react-bootstrap/Pagination';
import { getPokemonsToShow } from '../utils';
import './styles.scss';

export default class MainContainer extends Component {

	state = {
		pokemons: [],
		activePageIndex: 0,
		itemsPerPage: 20,
		pokemonCount: 0
	}

	componentDidMount() {
		this.loadPokemonCount();
	}

	loadPokemonCount(){
		const request = fetch(`https://pokeapi.co/api/v2/pokemon`, {
			method: 'GET'
		})

		request
			.then(response => response.json())
			.then(({ count }) => {
				this.setState({
					pokemonCount: count
				})
				this.loadPokemons();
			})
	}

	loadPokemons() {
		const { activePageIndex, itemsPerPage } = this.state;
		const pageOffset =  1 + activePageIndex * itemsPerPage;
		const pokemonPromises = new Array(itemsPerPage).fill(null).map((_, index) => {
			const request = fetch(`https://pokeapi.co/api/v2/pokemon/${index + pageOffset}/`, {
				method: 'GET'
			})

			return request.then(response => response.json())
		});

		Promise
			.all(pokemonPromises)
			.then((pokemons)=> this.setState({
				pokemons,
				isLoading: false
			}))
			.catch(err => {
				this.setState({
					isLoading: false
				});
				alert(err);
			})

	}

	setActivePage = (activePageIndex) => {
		this.setState({
			activePageIndex: activePageIndex,
			pokemons: [],
			isLoading: true
		}, () => this.loadPokemons());

		window.scrollTo(0, 0);
	};

	render() {
		const { activePageIndex, itemsPerPage, pokemonCount } = this.state;
		// const pokemonsToShow = getPokemonsToShow(this.state);
		const pageCount =Math.ceil(pokemonCount / itemsPerPage);

		return (
			<div className="main__container">
				<NavTab />
				<Pokedex pokemons={this.state.pokemons}/>
				<div className="pokedex-pagination">
					<Pagination>
						{
							new Array(pageCount).fill(null)
								.map((_, index) => // inex as key here won't lead to sideeffects
									<Pagination.Item key={index} active={index === activePageIndex} onClick={() => this.setActivePage(index)}>
										{index + 1}
									</Pagination.Item>
								)
						}
					</Pagination>
				</div>
			</div>
		)
	}
}