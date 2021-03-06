
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import SkillBtn from './SkillBtn';

const skillSets = [
    {
        id: 1,
        name: "JavaScript",
    },
    {
        id: 2,
        name: "ES6",
    },
    {
        id: 3,
        name: "React.js",
    },
    {
        id: 4,
        name: "Redux.js",
    },
    {
        id: 5,
        name: "Node.js",
    },
    {
        id: 6,
        name: "MongoDB",
    },
    {
        id: 7,
        name: "Material-UI",
    },
    {
        id: 8,
        name: "Heroku",
    },
    {
        id: 9,
        name: "SASS",
    },
    {
        id: 10,
        name: "REST API",
    },
    {
        id: 11,
        name: "Bootstrap",
    },
    {
        id: 12,
        name: "C",
    },
    {
        id: 13,
        name: "React-Bootstrap",
    },
    {
        id: 14,
        name: "Firebase",
    },
    {
        id: 15,
        name: "HTML5",
    },
    {
        id: 16,
        name: "CSS3",
    },
    {
        id: 17,
        name: "Typescript",
    },
    {
        id: 18,
        name: "Framer Motion",
    },
    {
        id: 19,
        name: "Three.js",
    },
    
    {
        id: 20,
        name: "Git & Github",
    },
    {
        id: 21,
        name: "Jira",
    },
    {
        id: 22,
        name: "VS Code",
    },
    {
        id: 23,
        name: "Ubuntu",
    },
    {
        id: 24,
        name: "Illustrator",
    },
    {
        id: 25,
        name: "Photoshop",
    },
    {
        id: 26,
        name: "XD",
    },
    {
        id: 27,
        name: "Figma",
    },
   
]

const useStyles = makeStyles({
    root: {
        padding: '50px 0px',
        '& .MuiTypography-h3':{
            fontWeight: '700',
            padding: '30px 0px',
            textAlign: 'center',
            fontFamily: 'Poppins',
            },
    }
})
const SkillsMain = () => {
    const classes = useStyles();
    const [skills] = useState(skillSets)
    return (
        <section>
            
            <Container className={classes.root}  >
                <Grid container justify="center" alignItems="center" >
                    <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h3"   component="h5" >
             <motion.div className=" custom-title title " animate={{fontSize: '60px'}}>My <span>Skills</span> </motion.div>
            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
               {
                   skills.map(skill =>  <SkillBtn key={skill.id} skill={skill}></SkillBtn> )
               }
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
};

export default SkillsMain;