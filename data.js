export function filterPokemonType(){
    let ids = [];
  let children = document.getElementById("pokemons").children;
  for (var i = 0, len = children.length ; i < len; i++) {
    ids.push(children[i].id);
}
    let counter = -1;
    let picked = document.getElementById("type");
    console.log(picked.value);
    for (let i = 0; i < 251; i++) {
        counter += 1;
        if(ids[counter].includes(picked.value)){
            console.log("hi");
        }else{
            children[counter].classList.add("invisible");
        }
}
}
let type = document.getElementById("type");
type.addEventListener("change", filterPokemonType);

export function filterPokemonName(){
    let ids = [];
    let input = document.getElementById("search").value;
    console.log(input);
    input = input.toLowerCase();
  let children = document.getElementById("pokemons").children;
  for (var i = 0, len = children.length ; i < len; i++) {
    ids.push(children[i].id);
    }
    let counter = -1;
    for (let i = 0; i < 251; i++) {
        counter += 1;
        if(ids[counter].includes(input.toLowerCase())){
        console.log("bru");
        }else{
            children[counter].classList.add("invisible");
        }
}
}
let name = document.getElementById("FilterBtn");
name.addEventListener("click", filterPokemonName);

export function filterPokemonGen(){
    let ids = [];  
      let gens = document.getElementById("gen");

    console.log(gens.value);

  let children = document.getElementById("pokemons").children;
  for (var i = 0, len = children.length ; i < len; i++) {
    ids.push(children[i].id);
}
    let counter = -1;
    console.log(gen.value);
    for (let i = 0; i < 251; i++) {
        counter += 1;
        if(ids[counter].includes(gen.value)){
            console.log("hi");
        }else{
            children[counter].classList.add("invisible");
        }
}
}
let gene = document.getElementById("gen");
gene.addEventListener("change", filterPokemonGen);