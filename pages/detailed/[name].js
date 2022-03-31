import { Box, Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import { getPokemonSpeciesByName, getSinglePokemon } from '@/api';
import { ListRenderer } from '@/components/ListRenderer';
import { KeyValueTableRenderer } from '@/components/KeyValueTableRenderer';
import { SectionRenderer } from '@/components/SectionRenderer';
import { HeaderTagsRenderer } from '@/components/HeaderTagsRenderer';
import { RouterLink } from '@/components/RouterLink';

const Home = ({ pokemon, species }) => {
  return (
    <>
      <HeaderTagsRenderer title={pokemon.name} />
      <Container sx={{ pt: 4, pb: 8 }} maxWidth="lg">
        <RouterLink href="/">
          <Button variant="contained" size="small">
            Back To List
          </Button>
        </RouterLink>
        <Typography sx={{ mt: 2 }} component="h2" variant="h4" color="inherit" gutterBottom>
          Pokemon Name: {pokemon.name} (Weight: {pokemon.weight})
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card>
              <CardMedia component="img" image={pokemon.sprites?.front_default} alt="random" />
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardMedia component="img" image={pokemon.sprites?.back_default} alt="random" />
            </Card>
          </Grid>
        </Grid>

        <SectionRenderer title="Species">
          <KeyValueTableRenderer
            data={species}
            displayKeys={[
              'name',
              'color.name',
              'has_gender_differences',
              'is_legendary',
              'is_mythical',
              'is_baby',
              'base_happiness',
              'capture_rate'
            ]}
          />
        </SectionRenderer>

        <SectionRenderer title="Stats">
          <ListRenderer items={pokemon.stats} displayKeys={['stat.name', 'base_stat', 'effort']} />
        </SectionRenderer>
        <SectionRenderer title="Types">
          <ListRenderer items={pokemon.types} displayKeys={['type.name']} />
        </SectionRenderer>

        <SectionRenderer title="Moves">
          {pokemon.moves &&
            pokemon.moves.map(({ move, version_group_details: details }, i) => (
              <Box sx={{ marginTop: 3 }} key={JSON.stringify(i)}>
                <Typography component="h2" variant="h6" color="inherit" gutterBottom>
                  Type: {move.name}
                </Typography>
                <ListRenderer
                  items={details}
                  displayKeys={['level_learned_at', 'move_learn_method.name', 'version_group.name']}
                />
              </Box>
            ))}
        </SectionRenderer>
      </Container>
    </>
  );
};

Home.propTypes = {
  pokemon: PropTypes.object,
  species: PropTypes.object
};

Home.defaultProps = {
  pokemon: {},
  species: {}
};

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export const getStaticProps = async ({ params }) => {
  const { name } = params;
  try {
    const [pokemon, species] = await Promise.all([getSinglePokemon(name), getPokemonSpeciesByName(name)]);

    return { props: { pokemon, species }, revalidate: 10 };
  } catch (error) {
    return { notFound: true };
  }
};

export default Home;
