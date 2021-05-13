import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Navigation from './Navigation/Navigation';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.drawerWidth,
    },
    flexGrow: 1,
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
  },
}));

const AppLayout = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerToggleClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Navigation
        mobileOpen={mobileOpen}
        handleDrawerToggleClose={handleDrawerToggleClose}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </>
  );
};

export default AppLayout;
