import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MovieIcon from '@material-ui/icons/Movie';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FeedbackIcon from '@material-ui/icons/Feedback';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import RowingIcon from '@material-ui/icons/Rowing';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Layout = ({ classes, children, container, logout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>

      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to='/dashboard'
          onClick={() => setMobileOpen(false)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='New Problems' />
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/dashboard/SolvedProblems'
          onClick={() => setMobileOpen(false)}
        >
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary='Solved Problems' />
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem
          button
          onClick={() => setMobileOpen(false)}
          component={Link}
          to='/dashboard/Profile'
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary='Your Account' />
        </ListItem>

        <ListItem
          button
          onClick={() => setMobileOpen(false)}
          component={Link}
          to='/dashboard/register'
        >
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary='Register New Account' />
        </ListItem>

        <ListItem button onClick={logout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary='logout' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position='absolute' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              B8 Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation='css'>
            <Drawer
              container={container}
              variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Layout);
