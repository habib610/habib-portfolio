import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import NavbarMain from '../../Home/Navbar/NavbarMain';
import ContactInfo from '../ContactInfo/ContactInfo';
import EmailForm from '../EmailForm/EmailForm';
import './ContactMain.css'
import { motion } from 'framer-motion';


const ContactMain = () => {
    return (
        <div>
            <NavbarMain></NavbarMain>
            <Container>
            <Grid container  spacing={3} style={{height: '100%', marginTop: '0px', background: ""}}>
           
                <Grid item md={12} style={{textAlign: 'center'}}>
                <Box textAlign="center">
                    
                <motion.h1 animate={{color: "#fe3e57", scale: 1.2, marginTop: "100px"}} className="custom-title">Contact </motion.h1>
                </Box>
                <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{duration: .5, delay: .5}}
                 className="line" ></motion.div>
                <Typography variant="p">
                I like to create interactive website with fun, Open minded people. Feel free to contact with me
              </Typography>
                </Grid>

                <Grid item md={12} >
                    <Typography variant="h5" style={{textAlign: 'center'}}>
                        I'd <motion.span 
                        initial={{color: "black"}}
                        animate={{color: "#f9004d", fontWeight: "800"}}
                        ><FavoriteBorderIcon/></motion.span>  to help you
                    </Typography>
                </Grid>
                <Grid item container justify="center" md={12} style={{background: 'black', marginTop: '60px'}}>
                <Grid  item md={4} >
                    <Typography style={{textAlign: 'center', marginBottom: '20px', color: '#ee076e'}} variant="h4">
                        Contact Info
                    </Typography>
            <ContactInfo/>
                </Grid>
                <Grid item md={6} >
                   <EmailForm></EmailForm>
                </Grid>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default ContactMain;