import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  toolbarLogo: {
    float: 'left',
    width: '60px',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
  },
  activeLink: {
    textDecoration: 'underline',
    textDecorationColor: theme.palette.primary.dark,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <NavLink exact to="/" className={classes.toolbarTitle}>
            <img src={logo} alt="logo" className={classes.toolbarLogo} />
            <Typography variant="h6" color="textPrimary" noWrap>
              Barber shop
            </Typography>
          </NavLink>
          <nav>
            <NavLink exact to="/" className={classes.link} activeClassName={classes.activeLink}>
              <Typography variant="button" color="textPrimary">
                Home
              </Typography>
            </NavLink>
            <NavLink to="/services" className={classes.link} activeClassName={classes.activeLink}>
              <Typography variant="button" color="textPrimary">
                Services
              </Typography>
            </NavLink>
            <NavLink to="/profile" className={classes.link} activeClassName={classes.activeLink}>
              <Typography variant="button" color="textPrimary">
                Profile
              </Typography>
            </NavLink>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
