const buttonsContainer = document.querySelector("#buttons-container")

export default function renderPokemonsButton(pokemon) {
    const buttonCard = `<button class="btn btn-primary" type="button" data-name="${pokemon.name}">${pokemon.name}</button>`

    buttonsContainer.insertAdjacentHTML("beforeEnd", buttonCard)
}

