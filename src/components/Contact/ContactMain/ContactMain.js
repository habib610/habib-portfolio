import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import EmailForm from '../EmailForm/EmailForm';



const ContactMain = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Container>
            <h1>Hire me</h1>
            <Grid container justify="center">
                <Grid item md={6}>
                   <EmailForm></EmailForm>
                </Grid>
                <Grid item md={6}>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default ContactMain;