import { Container, Grid, Box } from "@material-ui/core";
import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    name: "10 String Methods that every JavaScript...",
    img: "https://iili.io/3evgnt.md.jpg",
    link:
      "https://medium.com/@habibur4224287/10-string-methods-that-every-javascript-developer-definitely-need-to-know-8c8bc62a5c84",
  },
  {
    id: 2,
    name: "10 JavaScript Most Important Array Method",
    img: "https://iili.io/FJFDRR.md.jpg",
    link:
      "https://habib610.medium.com/10-most-important-javascript-array-methods-29d19c1f415f",
  },
  {
    id: 3,
    name: "Boost Your JavaScript Jetpack Knowledge",
    img: "https://iili.io/FJz9FS.md.jpg",
    link:
      "https://habib610.medium.com/boost-your-javascript-jetpack-knowledge-3839fb35eb57",
  },
];

const BlogMain = () => {
  return (
    <Container style={{ height: "100%", padding: "80px 0px" }}>
      <Box textAlign="center">
        <motion.h1 animate={{ scale: 1.2 }} className="title custom-title">
   
          My <span>Blogs</span>
        </motion.h1>
      </Box>
      <Grid container justify="center" spacing={3}>
        {articles.map((article) => (
          <BlogCard article={article} key={article.id}>
       
          </BlogCard>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogMain;
