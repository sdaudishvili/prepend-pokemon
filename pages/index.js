import { Container, Grid, Pagination, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { getPokemons } from '@/api';
import { PokemonCard } from '@/components/PokemonCard';
import { Search } from '@/components/Search';
import { HeaderTagsRenderer } from '@/components/HeaderTagsRenderer';

const PER_PAGE = 16;

const Home = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const totalRef = React.useRef(0);

  const router = useRouter();
  const page = +router.query.page || 1;

  const routerPush = (query) => {
    router.push({ pathname: router.pathname, query: { ...query } }, undefined, {
      scroll: true,
      shallow: true
    });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { count, results } = await getPokemons({ limit: PER_PAGE, offset: (page - 1) * PER_PAGE });
        totalRef.current = count;
        setPokemons(results);
      } catch (error) {
        totalRef.current = 0;
        setPokemons([]);
        console.log(error);
      }
    };
    fetchData();
  }, [router]);

  return (
    <>
      <HeaderTagsRenderer title="Pokemons App" />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Search value={router.query.q || ''} onSearch={(val) => routerPush({ q: val })} />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {pokemons.map((card) => (
            <Grid item key={card.name} xs={12} sm={6} md={3}>
              <PokemonCard data={card} />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} sx={{ marginTop: 3 }}>
          <Pagination
            page={page}
            sx={{ width: 'max-content', margin: 'auto' }}
            count={Math.floor(totalRef.current / PER_PAGE) + 1}
            onChange={(_e, page) => routerPush({ ...router.query, page })}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
