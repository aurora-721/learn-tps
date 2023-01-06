const pokeapi = require('pokeapi');

pokeapi.getPokemonById(1).then((pokemon: any) => {
  console.log(pokemon.name);
});
// it should say "bulbasaur"