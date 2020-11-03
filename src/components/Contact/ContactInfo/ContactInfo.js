import { Container, Grid, Typography, Box, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import { EmailOutlined, GitHub, LinkedIn, Twitter } from '@material-ui/icons';
const useStyles = makeStyles({
    root:{
        color:'white'
    },
    contactInfo:{
        marginBottom: '20px'
    }
})
const ContactInfo = () => {
    const classes = useStyles();
    return (

        <Grid item container md={12} className={classes.root}>
            <Grid container alignItems="center" className={classes.contactInfo} justify="center" item md={12}>
                <Grid item md={1}><LocationOnIcon /></Grid>
                <Grid item md={6}>
                    <Typography variant="h6">Dhaka 1234</Typography>
                    <Box>
                        <Typography variant="h6">Bangladesh</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" className={classes.contactInfo} item md={12}>
                <Grid item md={1}><PhoneInTalkIcon /></Grid>
                <Grid item md={6}>
                    <Typography variant="h6">+8801955190797</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="center" className={classes.contactInfo} item md={12}>
                <Grid item md={1}><EmailOutlined /></Grid>
                <Grid item md={6}>
                    <Typography variant="h6">habib54562@gmail.com</Typography>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: '40%' }} justify="center" item md={12}>
                <Grid item md={6} style={{ display: 'flex' }}>
                    <Link className="footer-icon" href="https://github.com/habib610" target="_blank"><GitHub /></Link>
                    <Link target="_blank" className="footer-icon" href="https://www.linkedin.com/in/habib610/" style={{margin: '0px 10px '}}>< LinkedIn /></Link>
                    <Link target="_blank" className="footer-icon" href="https://twitter.com/MdHabib17720334">  < Twitter /></Link>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default ContactInfo;