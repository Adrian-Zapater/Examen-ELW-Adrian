const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/'

window.onload = async () => {
    const pokemon = await getPokemonKanto();
    const mainHtmlElement = document.getElementById('ulPokemon');

    for (const poke of pokemon){
        const newElement = document.createElement('li');
        newElement.innerHTML = `<span onclick="infoPoke('${poke.url}')">${poke.name}</span>`

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
    return data;
}

async function getPokeByUrl(pokeUrl){
    const response = await fetch(`${pokeUrl}`);
    const data = await response.json();
    return data;
}

async function infoPoke(pokeUrl) {
    document.getElementById('poke').style.display = 'block';
    const sectionHtmlElement = document.getElementById('poke');
    sectionHtmlElement.innerHTML = '';
    const poke = await getPokeByUrl(pokeUrl);
  
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <h1>${poke.name}</h1>
    <p>${poke.id}</p>
    <p>${poke.types.type.name}</p>`;
  
    sectionHtmlElement.appendChild(newElement);
}