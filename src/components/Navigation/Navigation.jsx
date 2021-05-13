import React, { useContext, useCallback, useMemo } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import { useLocation, useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { mainTheme } from 'services/themeService';
import { sessionContext } from 'services/contextService';
import { useAppIntl } from 'services/hooksService';
import styles from './navigation.style';

const useStyles = makeStyles(styles);

function LinkSeparator() {
  return (
    <Box display="flex" alignItems="center">
      <span> - </span>
    </Box>
  );
}

function Links(props) {
  const classes = useStyles();
  const { handleLanguageChange } = props;

  return (
    <Box
      marginTop="auto"
      marginBottom={1}
      display="flex"
      flexDirection="column"
      margin="8px"
      alignItems="center"
    >
      <Box display="flex">
        <Typography
          component="span"
          variant="subtitle2"
          className={classes.links}
          onClick={() => handleLanguageChange('pt')}
        >
          Português
        </Typography>
        <LinkSeparator />
        <Typography
          component="span"
          variant="subtitle2"
          className={classes.links}
          onClick={() => handleLanguageChange('en')}
        >
          English
        </Typography>
      </Box>
    </Box>
  );
}

const Navigation = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();
  const { formatMessage } = useAppIntl();
  const { setPersistedSession } = useContext(sessionContext);

  const { handleDrawerToggleClose, mobileOpen } = props;

  const handleNavigationItemClick = useCallback(
    (route) => {
      history.push(route);
      handleDrawerToggleClose();
    },
    [handleDrawerToggleClose, history],
  );

  const handleLanguageChange = useCallback(
    (locale) => {
      setPersistedSession({ locale });
    },
    [setPersistedSession],
  );

  const drawer = useMemo(
    () => (
      <>
        <List className={classes.list}>
          <ListItem
            button
            onClick={() => handleNavigationItemClick('/landing-page')}
            className={classNames({
              [classes.listItem]: true,
              [classes.listItemSelected]: location.pathname === '/landing-page',
            })}
          >
            <ListItemIcon>
              <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.itemText}
              primary={formatMessage({
                id: 'app.navigation.landingPage',
                defaultMessage: 'Landing Page',
              })}
            />
          </ListItem>
        </List>

        <Links handleLanguageChange={handleLanguageChange} />
      </>
    ),
    [
      classes.itemText,
      classes.list,
      classes.listItem,
      classes.listItemSelected,
      formatMessage,
      handleLanguageChange,
      handleNavigationItemClick,
      location.pathname,
    ],
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to 
      avoid SEO duplication of links. */}
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggleClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            style: { color: mainTheme.palette.primary.contrastText },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          PaperProps={{
            style: { color: mainTheme.palette.primary.contrastText },
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Navigation;
