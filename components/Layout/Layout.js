import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RouterLink } from '../RouterLink';

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <RouterLink href="/">
            <Typography variant="h6" color="inherit" noWrap>
              Pokemons
            </Typography>
          </RouterLink>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flex: '1' }}>
        {children}
      </Box>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
