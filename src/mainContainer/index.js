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
		itemsPerPage: 5
	}

	componentDidMount() {
		const pokemonPromises = new Array(11).fill(null).map((_, index) => {
			const request = fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`, {
				method: 'GET'
			})

			return request.then(response => response.json())
		});

		Promise.all(pokemonPromises)
			.then((pokemons)=> this.setState({
				pokemons
			}))
			.catch(err => alert(err))
	}

	setActivePage = (activePageIndex) => {
		this.setState({
			activePageIndex: activePageIndex
		});
		window.scrollTo(0, 0)
	};

	render() {
		const { activePageIndex, itemsPerPage, pokemons } = this.state;
		const pokemonsToShow = getPokemonsToShow(this.state);
		const pageCount = Math.ceil(pokemons.length / itemsPerPage);

		return (
			<div className="main__container">
				<NavTab />
				<Pokedex pokemons={pokemonsToShow}/>
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