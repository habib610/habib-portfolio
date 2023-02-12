import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SkillBtn from "./SkillBtn";

const skillSets = [
    {
        id: 1,
        name: "JavaScript",
    },
    {
        id: 2,
        name: "Typescript",
    },
    {
        id: 3,
        name: "React.js",
    },
    {
        id: 4,
        name: "Redux Toolkit",
    },
    {
        id: 7,
        name: "React-Native",
    },
    {
        id: 8,
        name: "Java",
    },
    {
        id: 10,
        name: "Spring-Boot",
    },
    {
        id: 5,
        name: "Node.js",
    },

    {
        id: 9,
        name: "Material-UI",
    },

    {
        id: 11,
        name: "SQL",
    },
    {
        id: 6,
        name: "MongoDB",
    },

    {
        id: 13,
        name: "Bootstrap",
    },

    {
        id: 16,
        name: "Firebase",
    },
    {
        id: 17,
        name: "HTML5",
    },
    {
        id: 18,
        name: "CSS3",
    },

    {
        id: 22,
        name: "Git & Github",
    },
    {
        id: 23,
        name: "Intellij Idea",
    },
    {
        id: 24,
        name: "VS Code",
    },
    {
        id: 25,
        name: "Ubuntu",
    },
    {
        id: 29,
        name: "Figma",
    },
];

const useStyles = makeStyles({
    root: {
        padding: "50px 0px",
        "& .MuiTypography-h3": {
            fontWeight: "700",
            padding: "30px 0px",
            textAlign: "center",
            fontFamily: "Poppins",
        },
    },
});
const SkillsMain = () => {
    const classes = useStyles();
    const [skills] = useState(skillSets);
    return (
        <section>
            <Container className={classes.root}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h3" component="h5">
                            <motion.div
                                className=" custom-title title "
                                animate={{ fontSize: "60px" }}
                            >
                                My <span>Skills</span>{" "}
                            </motion.div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        {skills.map((skill) => (
                            <SkillBtn key={skill.id} skill={skill}></SkillBtn>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default SkillsMain;
