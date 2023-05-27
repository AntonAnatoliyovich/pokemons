import PokemonsApi from "./js/pokemons-api";
import renderPokemonsButton from "./js/renderPokemonsButton";

const mainButton = document.querySelector("#main-button")

mainButton.addEventListener('click', getPokemons)

const pokemonsApi = new PokemonsApi();

function getPokemons () {
    pokemonsApi.getAllPokemonsData()
        .then(pokemonsData => {
            pokemonsData.map(item => {
                renderPokemonsButton(item)
            })
        })
        .catch(error => {
            console.log(error.message)
        })
}
