import SearchIcon from '@mui/icons-material/Search';
import { Box, Input, Paper } from '@mui/material';
import { useDebounce } from '@/hooks/useDebounce';

const Search = (props) => {
  const { onSearch, value, ...rest } = props;

  const [q, setQ] = React.useState('');
  const [mounted, setMounted] = React.useState(false);

  const debouncedValue = useDebounce(q, 500);

  React.useEffect(() => {
    if (value !== q) setQ(value);
  }, [value]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (mounted && debouncedValue.length > 2) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <Box component="form" {...rest} sx={{ display: 'flex', alignItems: 'center' }}>
      <Paper sx={{ flexGrow: 1, height: 42, px: 2, display: 'flex', alignItems: 'center' }} elevation={1}>
        <SearchIcon sx={{ marginRight: 2 }} />
        <Input
          value={q}
          onChange={({ target: { value } }) => setQ(value)}
          sx={{ flexGrow: 1 }}
          disableUnderline
          placeholder="Search"
        />
      </Paper>
    </Box>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onSearch: PropTypes.func
};

Search.defaultProps = {
  className: '',
  value: '',
  onSearch: () => {}
};

export default Search;
