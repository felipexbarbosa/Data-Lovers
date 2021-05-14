import data from './data/pokemon/pokemon.js';
import {filterPokemonName, filterPokemonType, filterPokemonGeneration} from "./data.js"

const type = document.getElementById("type");
const generation = document.getElementById("generation");
const name = document.getElementById("FilterBtn");
const input = document.getElementById("search");

const pokemonList = data.pokemon;

export function pageRender(pokemons){
  let pokemonCards = ""
  const cardsSection = document.getElementById("pokemons");
  

  for (let i = 0; i < pokemons.length; i++) {
    let pokeName = pokemons[i].name;
    let pokeType = pokemons[i].type;
    let pokeGen = pokemons[i].generation.name;


    pokemonCards = pokemonCards + `<div class="card" id="card ${pokeName} ${pokeType} ${pokeGen}">
    <h1 id="pokemonName" class="pokename center"> ${pokemons[i].name}</h1>
    <img height="100px" width ="100px" class="center" src=${pokemons[i].img}>
    <h2 class="pokedes center">${pokemons[i].num}</h2>
    <h2 class="pokedes center">${pokemons[i].size.weight}</h2>
    <h2 class="pokedes center">${pokemons[i].type}</h2>
    </div>
    `

    cardsSection.innerHTML = pokemonCards

  }
}

pageRender(pokemonList);
generation.addEventListener("change", event => {
  event.preventDefault() 
  console.log(generation);
  console.log(generation.value);
  const filteredPokemons = filterPokemonGeneration(pokemonList, generation.value);
  pageRender(filteredPokemons);


});

name.addEventListener("click", event => {
  event.preventDefault() 
  const filteredPokemons = filterPokemonName(pokemonList, input.value);
  pageRender(filteredPokemons);
});

type.addEventListener("change", event => {
  event.preventDefault() 
  const filteredPokemons = filterPokemonType(pokemonList, type.value);
  pageRender(filteredPokemons);

});

