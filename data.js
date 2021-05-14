export function filterPokemonType(pokemons, type){
    const filteredPokemons = []
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].type.includes(type)){
            filteredPokemons.push(pokemons[i]);
        }
    }
    return filteredPokemons;
}

export function filterPokemonName(pokemons, input){
    const filteredPokemons = []
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].name.includes(input)){
            filteredPokemons.push(pokemons[i]);
        }
    }
    return filteredPokemons;
}

export function filterPokemonGeneration(pokemons, generation){
    const filteredPokemons = []
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].generation.name.includes(generation)){
            filteredPokemons.push(pokemons[i]);
        }
        
    }
    return filteredPokemons;

}
