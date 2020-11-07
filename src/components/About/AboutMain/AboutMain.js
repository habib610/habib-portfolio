import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import './AboutMain.css'
import { motion } from "framer-motion"


const useStyles = makeStyles({
    root:{
        marginTop: '40px',
        paddingBottom: '50px',
        '& .MuiTypography-h3':{
        fontWeight: '700',
        marginBottom: '20px',
        fontFamily: 'Poppins',
        },
        '& .MuiTypography-root':{
            marginBottom: '20px'
        },
        myName:{
            color: '',
            fontWeight: '800'
        }
    }
});

const AboutMain = () => {
    const classes = useStyles();
    return (
        <section className="about">
        <Container className={classes.root}>
        <Grid container alignItems="center" spacing={3} justify="center">
    
        <Grid item sm={12} md={5}>
            <img className="home-side-image" src="https://iili.io/3e0ian.md.jpg" alt=""/>
        </Grid>
        <Grid item sm={0} md={1}>
        </Grid>
            <Grid item sm={12} md={5} >
            <Typography variant="h3"   component="h5" >
             <motion.div animate={{color: "#fe3e57", fontSize: '60px'}}>About Me</motion.div>
            </Typography>

            <Typography variant="body1"  component="p">
            Hi, I am Md. Habibur Rahman. I am a Front-End Web Developer. I build up awesome web front-end. Building  quality website is my specialty.  I have a great passion to learn new technology and framework. I will make more interactive website by using web  animations.
            </Typography>
            <ul>
                <li><strong>Full Name</strong>Md. Habibur Rahman</li>
                <li><strong>Age</strong>21 Years</li>
                <li><strong>Nationality</strong>Bangladeshi</li>
                <li><strong>Languages</strong>Bengali, English</li>
                <li><strong>Address</strong>Dhaka, Bangladesh</li>
                <li><strong>Hiring</strong>Available</li>
                <li><strong>E-mail</strong>habib54562@gmail.com</li>
                <li><strong>Phone</strong>+8801955190797</li>
            </ul>
            <Button  variant="contained" download color="secondary" className="common-btn"  href="https://drive.google.com/file/d/1ziPyEjTbCi9RuQfuS21NbsqFCr3-SgON/view?usp=sharing">Download Resume</Button>
            </Grid>

            
        </Grid>
        
    </Container>
    </section>
    );
};

export default AboutMain;