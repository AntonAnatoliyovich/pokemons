import axios from "axios";

export default class PokemonsApi {
    constructor() {
        this.baseURL = 'https://pokeapi.co/api/v2/';
        this.route = 'pokemon';
        this.limit = 10;
        this.offset = 0;
    }

    getAllPokemonsData() {
        const requestURL = `${this.baseURL}${this.route}?limit=${this.limit}&offset=${this.offset}`;

        return axios.get(requestURL)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status)
                }
                return response.data.results
            })
    }
}

////////результат виконання функції повертається туди, де ми її викликали/////////////
