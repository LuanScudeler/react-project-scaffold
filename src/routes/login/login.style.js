import { mainTheme } from 'services/themeService';

export default {
  loginContainer: {
    [mainTheme.breakpoints.down('xs')]: {
      background: mainTheme.palette.grey[200],
    },
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& form': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  button: {
    width: '260px',
    alignSelf: 'center',
    marginTop: 10,
    height: 45,
  },
  spacing: {
    marginBottom: 16,
  },
};
