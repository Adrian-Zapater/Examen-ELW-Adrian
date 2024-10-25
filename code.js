const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/'

window.onload = async () => {
    const pokemon = await getPokemonKanto();

    for (const poke of pokemon){
        const mainHtmlElement = document.getElementById('pokemon');
        const newElement = document.createElement('div');

        newElement.innerHTML =
    }
}

async function getPokemonKanto(){
    const response = await fetch(`${POKEMON_BASE_URL}pokemon/?limit=151`);
    const data = await response.json();
    return data;
}
  