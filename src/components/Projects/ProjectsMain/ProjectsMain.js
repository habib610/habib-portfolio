import { Box, Container, Grid, LinearProgress } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fireStore } from "../../../lib/firebase";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsMain = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    fireStore
      .collection("projects")
      .orderBy("createdAt", "desc")
      .get()
      .then((snap) => {
        const document = [];
        snap.docs.forEach((item) => {
          document.push({ ...item.data(), id: item.id });
        });
        setProjects(document);
      });
  }, []);
  return (
    <div>
      <Container>
        <Box textAlign="center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              scale: 1.1,
              opacity: 1,
              fontSize: "60px",
              marginBottom: "50px",
            }}
            transition={{ delay: 0.7 }}
            className="title custom-title"
          >
            {" "}
            My <span>Projects</span>{" "}
          </motion.h1>
        </Box>

        {!projects ? (
          <LinearProgress color="secondary" />
        ) : (
          <Grid container spacing={3} justify="center">
            {projects.map((details) => (
              <ProjectCard details={details} key={details.id}></ProjectCard>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default ProjectsMain;
