export default (theme) => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: theme.drawerWidth,
      flexShrink: 0,
    },
  },
  list: {
    paddingLeft: theme.listPadding,
    color: '#fff',
  },
  listItem: {
    '& svg': {
      color: '#ffffff',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    width: 'auto',
    margin: '10px 15px 0',
    padding: '10px 15px',
    position: 'relative',
    transition: 'all 300ms linear',
    fontWeight: 300,
    lineHeight: '1.5em',
    borderRadius: 3,
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#FFF',
    margin: 0,
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 30,
  },
  listItemSelected: {
    backgroundColor: '#FFF',
    '& svg': {
      color: theme.palette.primary.main,
    },
    '& $itemText': {
      color: theme.palette.primary.main,
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    textAlign: 'center',
    padding: 20,
    lineHeight: 0,
  },
  drawerPaper: {
    background: `linear-gradient(0deg, #415778, ${theme.palette.primary.main})`,
    width: theme.drawerWidth,
    overflowY: 'unset',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  links: {
    textDecoration: 'none',
    color: theme.palette.background.paper,
    cursor: 'pointer',
    margin: '8px',
  },
});
