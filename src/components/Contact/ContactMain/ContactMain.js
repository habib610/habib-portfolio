import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import EmailForm from '../EmailForm/EmailForm';
import './ContactMain.css'
import { motion } from 'framer-motion';


const ContactMain = () => {
    return (
        <div>
            <Box>
            <Grid container  spacing={3} style={{ marginTop: '0px', padding:"50px 0px", background: ""}}>
           <Container>
                <Grid item md={12} style={{textAlign: 'center'}}>
                <Box textAlign="center">
                    
                <motion.h1 animate={{ scale: 1.1}} className=" custom-title title">Contact <span>Me</span> </motion.h1>
                </Box>
                <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{duration: .5, delay: .5}}
                 className="line" ></motion.div>
                <Typography>
                I like to create interactive website with fun, Open minded people. Feel free to contact with me
              </Typography>
                </Grid>
                </Container>
                <Grid item xs={12} sm={12} md={12} >
                    <div style={{textAlign: 'center'}}>
                        I'd <motion.span 
                        initial={{color: "#000", fontWeight: "400"}}
                        animate={{color: "#f9004d", fontWeight: "800"}}
                        ><FavoriteBorderIcon/></motion.span>  to help you
                    </div>
                </Grid>

                <Grid item container justify="center" md={12} style={{background: '', marginTop: '60px'}}>
                <Grid  item md={4} >
                    <Typography style={{textAlign: 'center', marginBottom: '20px', color: '#dfdf26'}} variant="h4">
                        Contact Info
                    </Typography>
            <ContactInfo/>
                </Grid>
                <Grid item md={6} >
                   <EmailForm></EmailForm>
                </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
};

export default ContactMain;