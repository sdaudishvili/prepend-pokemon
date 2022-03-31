import useSWR from 'swr';
import buildQuery from '@/utils/buildQuery';
import config from './config';
import { get } from './helpers/dataProvider';

export const usePokemons = (options, swrOptions = {}) => {
  const {
    data: { results = [] }
  } = useSWR(`${config.pokemon}${buildQuery(options)}`, get, swrOptions);

  return { data: results };
};

export const useSinglePokemon = (name, swrOptions = {}) => {
  const { data } = useSWR(`${config.pokemon}/${name}`, get, swrOptions);

  return { data };
};
