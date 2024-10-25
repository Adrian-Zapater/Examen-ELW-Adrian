const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/'

window.onload = async () => {
    const pokemon = await getPokemonKanto();

    for (const poke of pokemon){
        const mainHtmlElement = document.getElementById('ulPokemon');
        const newElement = document.createElement('li');

        newElement.innerHTML = `<h2 onclick="infoPoke(${poke.id})">${poke.name}</h2><p></p>`

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
    const response = await fetch(`${POKEMON_BASE_URL}pokemon/${pokeId}`);
    const data = await response.json();
    return data.results;
}

async function infoPoke(pokeId) {
    document.getElementById('poke').style.display = 'block';
    const sectionHtmlElement = document.getElementById('poke');
    sectionHtmlElement.innerHTML = '';
    const poke = await getPokeById(pokeId);
  
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <h1>${poke.name}</h1>
    <p>${poke.id}</p>
    <p>${poke.types.type.name}</p>`;
  
    sectionHtmlElement.appendChild(newElement);
  }

  