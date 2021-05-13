import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  error: {
    color: theme.palette.error.dark,
  },
});

const NoMatch = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const history = useHistory();

  const navToHomePage = () => {
    history.push('/');
  };

  return (
    <>
      <h2>Sorry, we can't find the page you're looking for.</h2>
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={navToHomePage}
      >
        Back to home page
      </Button>
    </>
  );
};

export default NoMatch;
