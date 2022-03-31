import { colors } from '@mui/material';

const white = '#FFFFFF';
const black = '#000000';

const palette = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#40A294',
    main: '#40A294',
    light: '#3f404e'
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  }
};

export default palette;
