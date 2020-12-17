import { Box, Container, Grid, makeStyles, Typography,  } from '@material-ui/core';
import { EmailOutlined, GitHub, LinkedIn, PhoneInTalk, Twitter } from '@material-ui/icons';
import logo from '../../logo1.svg'
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const useStyles = makeStyles({
    root: {
        padding: '20px 0px 10px 0px',
        background: 'black',
        // color: '#ee076e'
        color: '#fff',
        '& .MuiTypography-h6':{
            color: '#dfdf26',
            marginBottom: '10px'
        }
    },
    logos: {
        height: '60px',
        marginBottom: '30px'
    }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={12}>
                        <Typography>
                            <img src={logo} className={classes.logos} alt="logo" />
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h6">
                            About Me
                    </Typography>
                        <Typography >
                            I build up awesome web front-end. Building  quality website is my specialty. I will make more interactive website for your business.
                    </Typography>
                        <Typography variant="h6" style={{ marginTop: '30px' }}>
                            Contact Me
                    </Typography>
                        <Box>
                            <Typography >
                                <EmailOutlined style={{ marginRight: '10px' }} /> habib54562@gmail.com
                    </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <PhoneInTalk style={{ marginRight: '10px' }} /> +8801955190797
                    </Typography>
                        </Box>
                    </Grid>

                    <Grid item md={4}>
                        <Typography variant="h6">
                            Information
                    </Typography>
                        <Box>
                            <Link className="footer-link" to="/about">About</Link>
                        </Box>
                        <Box>
                            <Link className="footer-link" to="/blog">Blogs</Link>
                        </Box>
                        <Box>
                            <Link className="footer-link" to="/contact">Contact</Link>
                        </Box>
                    </Grid>

<Grid item container md={12}>
<Grid  style={{ color: 'white', display: 'flex', textAlign: 'center' }} item md={8}>

<a className="footer-icon" href="https://github.com/habib610" ><GitHub /></a>
<a  className="footer-icon" href="https://www.linkedin.com/in/habib610/">< LinkedIn /></a>
<a  className="footer-icon" href="https://twitter.com/MdHabib17720334">  < Twitter /></a>
</Grid>
<Grid item md={4}>
<Typography >
    {new Date().getFullYear()} &copy; Habibur Rahman. All Right reserved
</Typography>
</Grid>
</Grid>
                  
                </Grid>


            </Container>
        </div>

    );
};

export default Footer;