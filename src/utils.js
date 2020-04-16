/* TODO Setup unit tests */
export function getPokemonsToShow({ activePageIndex, itemsPerPage, pokemons }){
  const firstItemIndex = activePageIndex * itemsPerPage;
  const pokemonsToShow = pokemons.slice(firstItemIndex, firstItemIndex + itemsPerPage);

  return pokemonsToShow;
}