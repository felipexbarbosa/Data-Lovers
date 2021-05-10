import {webpage, children} from "./main.js"
export let checker=[];
export function filterPokemonType(picked){
    let ids = [];
  for (var i = 0, len = children.length ; i < len; i++) {
    ids.push(children[i].id);
}
    let counter = -1;
    console.log(picked.value);
    for (let i = 0; i < 251; i++) {
        counter += 1;
        if(ids[counter].includes(picked.value)){
            console.log(ids.counter);
            
        }else{
        children[counter].classList.add("invisible");
        }

}
}

export function filterPokemonName(s){
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

export function filterPokemonGen(gen){
    let ids = [];  

    console.log(gen.value);

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
