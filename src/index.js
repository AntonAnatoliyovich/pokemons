import PokemonsApi from "./js/pokemons-api";
import renderPokemonsButton from "./js/renderPokemonsButton";
import renderPokemonPhoto from "./js/renderPokemonPhoto";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const mainButton = document.querySelector("#main-button")
const buttonsContainer = document.querySelector("#buttons-container")
const loadMore = document.querySelector("#load-more")

buttonsContainer.addEventListener('click', getPokemonPhoto)
mainButton.addEventListener('click', getPokemons)
loadMore.addEventListener('click', loadMorePokemons)

const pokemonsApi = new PokemonsApi();
const lightbox = new SimpleLightbox('.buttons-container .pokemon-card');

function getPokemons () {
    pokemonsApi.getAllPokemonsData()
        .then(pokemonsData => {
            pokemonsData.map(item => {
                renderPokemonsButton(item)
            })
            loadMore.style.display = "block"; 
        })
        .catch(error => {
            console.log(error.message)
        })
}

function getPokemonPhoto(event) {
    const pokemonName = event.target.dataset.name
    const containerPhoto = document.querySelector(`#${pokemonName}`)
    // console.log(777, event)

    if (pokemonName) {
        pokemonsApi.setPokemonName(pokemonName)
    
        pokemonsApi.getPokemonPhotoByName()
            .then(pokemonPhoto => {
                // console.log(pokemonPhoto)
                containerPhoto.innerHTML = renderPokemonPhoto(pokemonPhoto)
    
                lightbox.refresh()
            })
            .catch(error => {
                console.log(error.message)
            })
    }
}

function loadMorePokemons() {
    pokemonsApi.setOffset();
    getPokemons();
}
