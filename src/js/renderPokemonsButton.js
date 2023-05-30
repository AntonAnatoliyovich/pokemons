const buttonsContainer = document.querySelector("#buttons-container")

export default function renderPokemonsButton(pokemon) {
    const buttonCard = `<button class="btn btn-outline-info" type="button" data-name="${pokemon.name}">${pokemon.name}</button>
    <div id="${pokemon.name}" class="image"></div>`

    buttonsContainer.insertAdjacentHTML("beforeEnd", buttonCard)
}
