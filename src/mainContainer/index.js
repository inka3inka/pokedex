import React, {Component} from "react";
import Pokedex from "../pokedex/index";
import NavTab from "../navTab/index";
import Pagination from 'react-bootstrap/Pagination';
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

	loadPokemonCount() {
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
			.then((pokemons) => this.setState({
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

	setDisabledPage = (activePageIndex,pageCount) => {
		return activePageIndex === 0 ||  activePageIndex === pageCount -1 ? "disabled" : null
	};

	searchPokemon = (searchTag) => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${searchTag}/`, {
			method: 'GET'
		})
			.then(response => response.json())
			.then((pokemon) => this.setState({
				pokemons: [pokemon]
			}))
			.catch(() => alert("There is no such Pokemon. Try again!!!"))
	}

	reload = () => {
		this.loadPokemonCount()
	}

	render() {
		const { activePageIndex, itemsPerPage, pokemonCount } = this.state;
		const pageCount =Math.ceil(pokemonCount / itemsPerPage);
		const minVisiblePageIndex = activePageIndex - 2;
		const maxVisiblePageIndex = activePageIndex + 2;

		//Pagination rendering
		let pages;
		if (this.state.pokemons.length > 1) {
			pages = (
				<Pagination>
					<Pagination.First onClick={() => this.setActivePage(0)} disabled={this.setDisabledPage(activePageIndex)}/>
					<Pagination.Prev onClick={() => this.setActivePage(activePageIndex-1)} disabled={this.setDisabledPage(activePageIndex)}/>
					<Pagination.Item>{1}</Pagination.Item>
					<Pagination.Ellipsis />
					{
						new Array(pageCount).fill(null)
							.map((_, index) => // inex as key here won't lead to sideeffects
								<Pagination.Item key={index} active={index === activePageIndex} onClick={() => this.setActivePage(index)}>
									{index + 1}
								</Pagination.Item>
							)
							.filter(element => element.key >= minVisiblePageIndex && element.key <= maxVisiblePageIndex)
					}
					<Pagination.Ellipsis />
					<Pagination.Item>{pageCount}</Pagination.Item>
					<Pagination.Next onClick={() => this.setActivePage(activePageIndex+1)} disabled={this.setDisabledPage(activePageIndex, pageCount)}/>
					<Pagination.Last onClick={() => this.setActivePage(pageCount-1)} disabled={this.setDisabledPage(activePageIndex, pageCount)}/>
				</Pagination>
			)
		} else {
			pages = null
		}


		return (
			<div className="main__container">
				<NavTab searchPokemon={this.searchPokemon} reload={this.reload}/>
				<Pokedex pokemons={this.state.pokemons}/>
				<div className="pokedex-pagination">
					{pages}
				</div>
			</div>
		)
	}
}