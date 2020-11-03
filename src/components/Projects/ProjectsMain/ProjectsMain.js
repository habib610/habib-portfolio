import { Container, Grid, Box } from '@material-ui/core';
import React from 'react';
import NavbarMain from '../../Home/Navbar/NavbarMain';
import ProjectCard from '../ProjectCard/ProjectCard';
const projecdata=[
    {
        id: 1,
        img: 'https://iili.io/3eeuHl.md.jpg',
        description: 'A full-stack and one-page agency website where authentic customer can buy the services and sellers can manage their services',
        name: 'Creative Agency',
        used: ["Javascript", "Node", "MongoDB", "React", "Bootstrap", "Firebase"], 
        github:'https://github.com/habib610/client-list',
        live: 'https://creative-agency-b13d4.web.app/'
    },
    {
        id: 2,
        img: 'https://iili.io/3eezlf.md.jpg',
        description: 'A full-stack website to interacts with the Doctors and Patients where patients can fix various types of appointment and doctors can see the appointment list of the patients.',
        name: 'Doctors Portal',
        used: ["Javascript", "Node", "MongoDB", "React", "Bootstrap", "Firebase", "Heroku"],
        github:'https://github.com/habib610/doctors-portal',
        live: 'https://doctorsportal-one.web.app/'
    },
    {
        id: 3,
        img: 'https://iili.io/3eeWOB.md.jpg',
        description: 'A social network website where people can take various part of servicing the human, nature and others creations.',
        name: 'Volunteer Network',
        used: ["Javascript", "Node", "MongoDB", "React", "Bootstrap", "Firebase", "Heroku"],
        github:'https://github.com/habib610/volunteer-network',
        live: 'https://volunter-network-ccc70.web.app/'
    },
    {
        id: 4,
        img: 'https://iili.io/3eeRNS.md.jpg',
        description: 'A Hotel Booking website where people can book different types of rooms in  different places for various purpose based on their needs.',
        name: 'Travel Guru',
        used: ["Javascript",  "React", "Bootstrap", "Firebase", "Heroku"],
        github:'',
        live: 'https://loving-goldberg-22e986.netlify.app/'
    },
    {
        id: 5,
        img: 'https://iili.io/3eeIS4.md.jpg',
        description: 'An Gadgets website where different types of product are displayed in different categories which is designed by bootstrap components',
        name: 'Hot Gadgets',
        used: ["Javascript",  "React", "Bootstrap", "Firebase", "Heroku"],
        github:'https://github.com/habib610/my-hot-gadgets',
        live: 'https://habib610.github.io/my-hot-gadgets/'
    },
    {
        id: 6 ,
        img: 'https://iili.io/3eeAR2.md.jpg',
        description: 'A gorgeous personal portfolio website designed by HTML5 and CSS3',
        name: 'Personal Portfolio',
        used: ["HTML5",  "CSS3", "Bootstrap", "Firebase", "Heroku"],
        github:'https://github.com/habib610/PersonalPortfolio',
        live: 'https://habib610.github.io/PersonalPortfolio/'

    },
]

const ProjectsMain = () => {
    return (
        <div>
             <NavbarMain></NavbarMain>
            <Container style={{marginTop: '100px'}}>
                <Box textAlign="center">
                <h1 className="custom-title">Projects</h1>
                </Box>
            <Grid container spacing={3} justify="center" >
                {
                    projecdata.map( details=><ProjectCard details={details} key={details.id}></ProjectCard>)
                }
            </Grid>
            </Container>
        </div>
    );
};

export default ProjectsMain;