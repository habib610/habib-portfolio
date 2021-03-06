import { Container, Grid, Box } from '@material-ui/core';
import React from 'react';
import { motion } from "framer-motion"
import ProjectCard from '../ProjectCard/ProjectCard';
const projectData=[
    {
        id: 1,
        img: 'https://iili.io/KrFnR4.jpg',
        description: 'One page ',
        name: 'Cart Gear',
        used: ["Javascript", "Node.Js", "MongoDB", "React.Js","Redux", "Mongoose", "Express.js", "Heroku"], 
        github:'https://github.com/habib610/client-list',
        live: 'https://creative-agency-b13d4.web.app/'
    }, 
    {
        id: 2,
        img: 'https://iili.io/KrFZI2.jpg',
        description: 'A full-stack and one-page agency website where authentic customer can buy the services and sellers can manage their services',
        name: 'Creative Agency',
        used: ["Javascript", "Node.Js", "MongoDB", "React.Js", "Bootstrap", "Firebase", "Express.js"], 
        github:'https://github.com/habib610/client-list',
        live: 'https://creative-agency-b13d4.web.app/'
    },
    {
        id: 3,
        img: 'https://iili.io/KrfF8G.jpg',
        description: 'One page E-commerce website for restaurant where you can order your favorite foods. Three catagories of food like Breakfast, Lunch, Dinner are available for you.',
        name: 'Red Onion',
        used: ["Javascript", "React.Js","HTML5", "Material-UI", "Bootstrap", "Firebase", "Context API",  "CSS3"],
        github:'https://github.com/habib610/red-onion',
        live: 'https://red-onion-5071e.web.app/'
    },
    {
        id: 4,
        img: 'https://iili.io/KrqCJa.jpg',
        description: 'A full-stack website to interacts with the Doctors and Patients where patients can fix various types of appointment and doctors can see the appointment list of the patients.',
        name: 'Doctors Portal',
        used: ["Javascript", "Node.Js", "MongoDB", "React.Js", "Bootstrap", "Firebase", "Heroku"],
        github:'https://github.com/habib610/doctors-portal',
        live: 'https://doctorsportal-one.web.app/'
    },
    {
        id: 5,
        img: 'https://iili.io/Krq7gn.jpg',
        description: 'A social network website where people can take various part of servicing the human, nature and others creations.',
        name: 'Volunteer Network',
        used: ["Javascript", "Node.Js", "MongoDB", "React.Js", "Bootstrap", "Firebase", "Heroku"],
        github:'https://github.com/habib610/volunteer-network',
        live: 'https://volunter-network-ccc70.web.app/'
    },
    {
        id: 6,
        img: 'https://iili.io/KrqaJs.jpg',
        description: 'A Hotel Booking website where people can book different types of rooms in  different places for various purpose based on their needs.',
        name: 'Travel Guru',
        used: ["Javascript",  "React", "Bootstrap", "Firebase", "Heroku"],
        github:'https://github.com/habib610/travel-guru',
        live: 'https://fervent-cori-ebf0c0.netlify.app/'
    },
    {
        id: 7,
        img: 'https://iili.io/KrqqUg.jpg',
        description: 'An Gadgets website where different types of product are displayed in different categories which is designed by bootstrap components',
        name: 'Hot Gadgets',
        used: ["Bootstrap", "HTML5", "CSS3"],
        github:'https://github.com/habib610/my-hot-gadgets',
        live: 'https://habib610.github.io/my-hot-gadgets/'
    },
]

const ProjectsMain = () => {
    return (
        <div>
            <Container>
                <Box textAlign="center">
                <motion.h1 
                initial={{opacity: 0,}}
                animate={{scale: 1.1, opacity: 1, fontSize: '60px', marginBottom: '50px'}}
                transition={{delay: .7}}
                className="title custom-title"> My <span>Projects</span> </motion.h1>
                </Box>
            <Grid container spacing={3} justify="center" >
                {
                    projectData.map( details=><ProjectCard details={details} key={details.id}></ProjectCard>)
                }
            </Grid>
            </Container>
        </div>
    );
};

export default ProjectsMain;