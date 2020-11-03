import { AppBar, Button, Container, Box, makeStyles, Toolbar, Typography } from '@material-ui/core';

import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import logo from '../../../logo.svg'
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
    }
}))

const NavbarMain = () => {
    const classes = useStyles();
    return (
            <Box  className={classes.root}>
        <AppBar position="static" color="transparent">
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
                <Button  variant="contained" download color="secondary" className="common-btn"  href="https://drive.google.com/file/d/1ziPyEjTbCi9RuQfuS21NbsqFCr3-SgON/view?usp=sharing">Download Resume</Button>
          <Button size="small" ></Button>
                </div>
               
                <div className={classes.sectionMobile}>
              
                <NavDrawer></NavDrawer>
    
                </div>
                   
                </Toolbar>
            </Container>
            </AppBar>
        </Box>
    );
};

export default NavbarMain;