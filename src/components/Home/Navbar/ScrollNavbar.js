import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import {  Button,  makeStyles } from '@material-ui/core';
import logo from '../../../logo_8.svg'
import { NavLink } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import './Navbar.css'
const useStyles = makeStyles(theme=>({

    sectionDesktop:{
        display: 'none',
        [theme.breakpoints.up("md")]:{
            display: 'flex'
        }
        
    },
    sectionMobile:{
        display: 'flex',
        [theme.breakpoints.up("md")]:{
            display: 'none',
        },
    },
    appBar:{
      background: '#290742'
    }
}))


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ScrollNavbar(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
        <Container disableGutters>
                <Toolbar >
                <Typography style={{flexGrow: '1'}} variant="h6">
                <img style={{height: '50px'}} src={logo} className={classes.logos} alt="logo"/>
                </Typography>
                <div className={classes.sectionDesktop}>
                <NavLink to="/" className="nav-list-normal" exact   activeClassName="nav-list-active">Home</NavLink>
          <NavLink to="/about"  className="nav-list-normal" activeClassName="nav-list-active">About</NavLink>

          <NavLink to="/projects" className="nav-list-normal"  activeClassName="nav-list-active">Projects</NavLink>
          <NavLink to="/blogs" className="nav-list-normal"  activeClassName="nav-list-active">Blogs</NavLink>
          <NavLink to="/contact" className="nav-list-normal"  activeClassName="nav-list-active">Contact</NavLink>
                </div>
                <div className={classes.sectionDesktop}>
                <Button  variant="contained" download color="secondary" className="common-btn"  href="https://drive.google.com/file/d/1IYLnzzYiePNWqzJLvw3REnp0mCGPvR7c/view?usp=sharing">Download Resume</Button>
          <Button size="small" ></Button>
                </div>

                <div className={classes.sectionMobile}>
                <NavDrawer></NavDrawer>
                </div>
                   
                </Toolbar>
            </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}