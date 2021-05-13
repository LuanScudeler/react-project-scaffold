import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const customPalette = {
  primary: {
    light: '#657793',
    main: '#2B4061',
    dark: '#091934',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#657793',
    main: '#2B4061',
    dark: '#091934',
    contrastText: '#ffffff',
  },
};

export const mainTheme = createMuiTheme({
  overrides: {
    MuiCircularProgress: {
      root: {
        [defaultTheme.breakpoints.up('lg')]: {
          top: '80%',
        },
        left: '50%',
        top: '50%',
        position: 'fixed',
        height: '50px',
        width: '50px',
        zIndex: '999',
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: customPalette.primary,
    secondary: customPalette.secondary,
  },
  drawerWidth: 240,
  listPadding: 6,
});
