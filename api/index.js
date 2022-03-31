import config from './config';
import { getMany, getOne } from './helpers/dataProvider';

export const getPokemons = (options) => {
  return getMany(config.pokemon, options);
};

export const getSinglePokemon = (name) => {
  return getOne(config.pokemon, name);
};

export const getPokemonSpeciesByName = (name) => {
  return getOne(config.pokemon_species, name);
};
