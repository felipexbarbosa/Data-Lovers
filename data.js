import {webpage, children, picked, type, gene, gens, name, input, s} from "./main.js"
export function filterPokemonType(){
    let ids = [];
  for (var i = 0, len = children.length ; i < len; i++) {
    ids.push(children[i].id);
}
    let counter = -1;
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

export function filterPokemonName(){
    let ids = [];
    console.log(s.value);
  for (var i = 0, len = children.length ; i < len; i++) {
    ids.push(children[i].id);
    }
    let counter = -1;
    for (let i = 0; i < 251; i++) {
        counter += 1;
        if(ids[counter].includes(s.value)){
        console.log("bru");
        }else{
            children[counter].classList.add("invisible");
        }
}
}

export function filterPokemonGen(){
    let ids = [];  

    console.log(gens.value);

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
