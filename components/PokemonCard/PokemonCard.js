import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useSinglePokemon } from '@/api/swr';
import { RouterLink } from '../RouterLink';

const PokemonCard = ({ data }) => {
  const { data: pokemonInfo = {} } = useSinglePokemon(data.name);
  const { abilities = [] } = pokemonInfo;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" image={pokemonInfo.sprites?.front_default} alt="random" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {data.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          Abilities:
        </Typography>
        {abilities &&
          abilities.length > 0 &&
          abilities.map(({ ability }) => (
            <Typography underline="always" key={ability.name}>
              {ability.name}
            </Typography>
          ))}
      </CardContent>
      <CardActions>
        <RouterLink href={`detailed/${data.name}`}>
          <Button variant="contained" size="small">
            Details
          </Button>
        </RouterLink>
      </CardActions>
    </Card>
  );
};

PokemonCard.propTypes = {
  data: PropTypes.object
};

PokemonCard.defaultProps = {
  data: {}
};

export default PokemonCard;
