import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import React from 'react';
import NavbarMain from '../../Home/Navbar/NavbarMain';
import ContactInfo from '../ContactInfo/ContactInfo';
import EmailForm from '../EmailForm/EmailForm';
import './ContactMain.css'


const ContactMain = () => {
    return (
        <div>
            
            <NavbarMain></NavbarMain>
               
            <Container>
            <Grid container  spacing={3} style={{height: '100vh', marginTop: '20px', background: ""}}>
           
                <Grid item md={12} style={{textAlign: 'center'}}>
                <Box textAlign="center">
                <h1 className="custom-title">Contact </h1>
                </Box>
                
                <div className="line" ></div>
                <Typography variant="p">
                I like to create interactive website with fun, Open minded people. Feel free to contact with me
              </Typography>
                </Grid>

            
                <Grid item md={12} >
                    <Typography variant="h5" style={{textAlign: 'center'}}>
                        I'd  <FavoriteBorderIcon/> to help you
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