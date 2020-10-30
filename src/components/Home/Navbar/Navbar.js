import { Box, Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../logo.svg'
import zIndex from '@material-ui/core/styles/zIndex';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
     '& .MuiTypography-h6': {
      lineHeight: 0.6,

  }},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logos:{
    height: 50,
    alignSelf: 'center',
    // marginTop: "20px",
    lineHeight: .6
}
}));


const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" color="transparent">
            <Container>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <img src={logo} className={classes.logos} alt="logo"/>
          </Typography>
          <Box>
          <NavLink to="/" className="nav-list-normal" exact   activeClassName="nav-list-active">Home</NavLink>
          <NavLink to="/about"  className="nav-list-normal" activeClassName="nav-list-active">About</NavLink>

          <NavLink to="/projects" className="nav-list-normal"  activeClassName="nav-list-active">Projects</NavLink>
          <NavLink to="/blogs" className="nav-list-normal"  activeClassName="nav-list-active">Blogs</NavLink>
          <NavLink to="/contact" className="nav-list-normal"  activeClassName="nav-list-active">Contact</NavLink>
          
          </Box>
          <Button  variant="contained" download color="secondary" className="common-btn"  href="https://drive.google.com/drive/u/1/folders/1XvKqNUL_m5xeqYju3JynEk8NleudWnXH">Download Resume</Button>
          <Button size="small" ></Button>
       
        </Toolbar>
        </Container>
      </AppBar>
    </div>
    );
};

export default Navbar;

            