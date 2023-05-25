import PokemonsApi from "./js/pokemons-api";

const mainButton = document.querySelector("#main-button")

mainButton.addEventListener('click', getPokemons)

const pokemonsApi = new PokemonsApi();

function getPokemons () {
    pokemonsApi.getAllPokemonsData()
        .then(pokemonsData => {
            console.log(pokemonsData)
        })
        .catch(error => {
            console.log(error.message)
        })
}


