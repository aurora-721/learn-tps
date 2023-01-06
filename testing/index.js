var pokeapi = require('pokeapi');
pokeapi.getPokemonById(1).then(function (pokemon) {
    console.log(pokemon.name);
});
// it should say "bulbasaur"
