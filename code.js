const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/'
let nEquip = 0;
const equip = new Array(6);

window.onload = async () => {
    const pokemon = await getPokemonKanto();
    const mainHtmlElement = document.getElementById('ulPokemon');

    for (const poke of pokemon){
        const newElement = document.createElement('h2');
        newElement.innerHTML = `<span onclick="infoPoke('${poke.url}')">${poke.name}</span><p></p>`

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

function addPoke(pokeId) {
    if (nEquip == 6)
        alert(`¡EQUIPO COMPLETO!`);
    else{
        nEquip++;
        equip.push(pokeId);
    }
}

async function infoPoke(pokeUrl) {
    document.getElementById('poke').style.display = 'block';
    const sectionHtmlElement = document.getElementById('poke');
    sectionHtmlElement.innerHTML = '';
    const poke = await getPokeByUrl(pokeUrl);
  
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <h2>${poke.id}</h2>
    <h1>${poke.name}</h1>
    <figure><img id="imagen" src="${poke.sprites.front_default}"></img></figure>
    <h3>Types:</h3>`;
  
    sectionHtmlElement.appendChild(newElement);

    const newElement2 = document.createElement('ul');

    for (const type of poke.types){
        const listItem = document.createElement('li');
        listItem.textContent = type.type.name;
        newElement2.appendChild(listItem);
    }
    sectionHtmlElement.appendChild(newElement2);

    const newElement3 = document.createElement('div');
    newElement3.innerHTML = `
    <button onclick="addPoke('${poke.id}')" id="addPoke">¡CAPTURALO!</button>`;
    sectionHtmlElement.appendChild(newElement3);
}

function cerrarPoke() {
    document.getElementById('poke').style.display = 'none';
}