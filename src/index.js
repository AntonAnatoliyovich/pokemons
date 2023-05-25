import PokemonsApi from "./js/pokemons-api";

const pokemonsApi = new PokemonsApi();

pokemonsApi.getAllPokemonsData()
.then(pokemonsData => {
    console.log(pokemonsData)
})
.catch(error => {
    console.log(error.message)
})
