import {
  Button, CircularProgress, Container,
  Grid,
  makeStyles, Typography
} from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fireStore } from "../../../lib/firebase";
import "./AboutMain.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    paddingBottom: "50px",
    "& .MuiTypography-h3": {
      fontWeight: "700",
      marginBottom: "20px",
      fontFamily: "Poppins",
    },
    "& .MuiTypography-root": {
      marginBottom: "20px",
    },
    myName: {
      color: "",
      fontWeight: "800",
    },
  },
}));

const AboutMain = () => {
  const classes = useStyles();
        const [resume, setResume] = useState(null);
        useEffect(() => {
        fireStore
            .collection('resume')
            .get()
            .then((snap) => {
                const document = [];
                snap.docs.forEach((item) => {
                    document.push({ ...item.data(), id: item.id });
                });
                setResume(document[0]);
            });
    }, []);
  return (
    <section className="about">
      <Container className={classes.root}>
        <Grid container alignItems="center" justify="center" spacing={3}>
          <Grid item md={1}></Grid>
          <Grid item md={5}>
            <img
              className="hero"
              src="https://iili.io/3e0ian.md.jpg"
              alt="My_Hero_Img"
            />
          </Grid>
          <Grid item md={5}>
            <Typography variant="h3" component="h5">
              <motion.div className=" custom-title title" animate={{ fontSize: "60px" }}>
                About <span>Me</span>{" "}
              </motion.div>
            </Typography>

            <Typography variant="body1" component="p">
              Hi, I am Md. Habibur Rahman. I am a Front-End Web Developer. I
              build up awesome web front-end. Building quality website is my
              specialty. I have a great passion to learn new technology and
              framework. I will make more interactive website by using web
              animations.
            </Typography>
            <ul>
              <li>
                <strong>Full Name</strong>Md. Habibur Rahman
              </li>
              <li>
                <strong>Age</strong>21 Years
              </li>
              <li>
                <strong>Nationality</strong>Bangladeshi
              </li>
              <li>
                <strong>Languages</strong>Bengali, English
              </li>
              <li>
                <strong>Address</strong>Dhaka, Bangladesh
              </li>
              <li>
                <strong>Hiring</strong>Available
              </li>
              <li>
                <strong>E-mail</strong>habib54562@gmail.com
              </li>
              <li>
                <strong>Phone</strong>+8801955190797
              </li>
            </ul>
            { !resume ? <CircularProgress color="secondary" size={40} /> : <Button
              variant="contained"
              
              color="secondary"
              className="common-btn"
              href={resume?.resume}
            >
              Download Resume
            </Button>}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutMain;
