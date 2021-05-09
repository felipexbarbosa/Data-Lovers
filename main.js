import data from './data/pokemon/pokemon.js';
import {filterPokemonType} from "./data.js"
export function webpage(){
  let counter = -1;
  let bp = ""
  let body = document.getElementById("pokemons");
  const s = document.getElementById("search");

  for (let i = 0; i < 251; i++) {
    counter += 1;
    let pokeName = data.pokemon[counter].name;
    let pokeType = data.pokemon[counter].type;
    let pokeGen = data.pokemon[counter].generation.name;


    bp = bp + `<div class="card" id="card ${pokeName} ${pokeType} ${pokeGen}">
    <h1 id="pokemonName" class="pokename center"> ${data.pokemon[counter].name}</h1>
    <img height="100px" width ="100px" class="center" src=${data.pokemon[counter].img}>
    <h2 class="pokedes center">${data.pokemon[counter].num}</h2>
    <h2 class="pokedes center">${data.pokemon[counter].size.weight}</h2>
    <h2 class="pokedes center">${data.pokemon[counter].type}</h2>
    </div>
    `
    body.innerHTML = bp

  }
}
let bod = document.getElementById("website");
bod.addEventListener("load", webpage());
