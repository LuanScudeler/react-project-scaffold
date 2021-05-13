import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { mainTheme } from '../services/themeService';

const styles = (theme) => ({
  error: {
    color: theme.palette.error.dark,
  },
  errorDiv: {
    padding: '45px',
  },
  button: {
    color: '#FFFFFF',
    background: mainTheme.palette.primary.main,
  },
});

const Unauthorized = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const navToHomePage = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className={classes.errorDiv}>
        <h2 className={classes.error}>
          Your session has expiried or you don't have sufficient permissions
        </h2>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="secondary"
          onClick={navToHomePage}
        >
          Back to sign in page
        </Button>
      </div>
    </>
  );
};

export default Unauthorized;
