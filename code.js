const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/'

window.onload = async () => {
    const pokemon = await getPokemonKanto();

    for (const poke of pokemon){
        const mainHtmlElement = document.getElementById('ulPokemon');
        const newElement = document.createElement('li');

        newElement.innerHTML = `<h2>${poke.name}</h2><p></p>`

        if (poke.name !== null){
            mainHtmlElement.appendChild(newElement);

        }
    }
}

async function getPokemonKanto(){
    const response = await fetch(`${POKEMON_BASE_URL}pokemon/?limit=151`);
    const data = await response.json();
    return data.results;
}

async function getPokeById(pokeId){
    const response = await fetch
    const data = await response.json();
    return data;
  }

