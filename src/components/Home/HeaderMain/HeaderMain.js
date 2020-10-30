import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root:{
        '& .MuiTypography-h2':{
        color: '#ee076e',
        fontWeight: '800'
        },
        myName:{
            fontWeight: '800'
        }
    }
});

const HeaderMain = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            
            <Grid container alignItems="center" spacing={2} justify="center">
            <Grid item md={1}>
            </Grid>
                <Grid item md={6} >
                <Typography variant="body2" color="secondary" component="p">
                WELCOME TO MY WORLD
                </Typography>
                <Typography variant="h2"  component="h5" className={classes.myself}>
                Hello, I'm <span className="myName">Habib</span>
                </Typography>
                <Typography variant="h4" color="secondary" component="h6">
                Front-End Developer
                </Typography>
                <Typography variant="body1" color="secondary" component="p">
                I love to create Awesome website with more cleaner code. I'm a  specialized in frontend for complex scalable web apps. I always provide error free, flat and creative design as user requirements.  Want to know how I may help your project?
                </Typography>
                </Grid>

                <Grid item md={5}>
                <img className="home-side-image" src="https://iili.io/3e7x3b.md.png" alt=""/>
            </Grid>
            </Grid>
            
        </Container>
    );
};

export default HeaderMain;