import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { motion } from "framer-motion"
const useStyles = makeStyles(theme=>({
    root:{
        paddingTop: ' 60px',
        fontFamily: 'Poppins',
        '& .MuiTypography-h2':{
        fontWeight: '700',
        fontSize: '60px',
        color: 'white',
        },
        '& .MuiTypography-h4':{
            fontWeight: '700',
            fontFamily: 'Poppins',
            marginBottom: '20px',
            color:"#fe3e57",
            [theme.breakpoints.down("sm")]:{
                fontSize: '30px',
            }
        },
        '& .MuiTypography-body2':{
            color: "white"
        }
    },
    hero:{
        width: 300,
        [theme.breakpoints.up("md")]:{
            width: 450,
        }
    }
}));

const HeaderMain = () => {
    const classes = useStyles();
    return (
         
        <div className={classes.root} >
 <Container style={{position: 'relative'}}>
            <Grid  container alignItems="center" spacing={2} justify="center">
            <Grid item md={1}>
            </Grid>
                <Grid item   md={6} >
                <Typography variant="body2" component="p">
                WELCOME TO MY WORLD
                </Typography>
                <Typography animate={{scale: 2}} variant="h2"  component="h5" className={classes.myself}>
                <motion.div animate={{fontSize: "3rem"}}>
                Hello, I'm <motion.span animate={{color: "#fe3e57"}} className="myName">Habib</motion.span>
                </motion.div>
                </Typography>
                
                <Typography variant="h4" color="secondary" component="h6">
                Front-End Developer
                </Typography>
                <Typography variant="body1" color="secondary" style={{color: "white"}} component="p">
                I love to create Awesome website with more cleaner code. I'm a  specialized in frontend for complex scalable web apps. I always provide error free, flat and creative design as user requirements.  Want to know how I may help your project?
                </Typography>
                </Grid>
                <Grid item   md={5}>
                <img  className={classes.hero} src="https://iili.io/3e7x3b.md.png" alt=""/>
            </Grid>
            </Grid>
        </Container>
        </div>
       
    );
};

export default HeaderMain;