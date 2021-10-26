import { Box, Container, Grid, LinearProgress } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fireStore } from "../../../lib/firebase";
import BlogCard from "./BlogCard/BlogCard";

const BlogMain = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fireStore
      .collection("blogs")
      .orderBy("createdAt", "desc")
      .get()
      .then((snap) => {
        const document = [];
        snap.docs.forEach((item) => {
          document.push({ ...item.data(), id: item.id });
        });
        setBlogs(document);
      });
  }, []);
  return (
    <Container style={{ height: "100%", padding: "80px 0px" }}>
      <Box textAlign="center">
        <motion.h1 animate={{ scale: 1.2 }} className="title custom-title">
          My <span>Blogs</span>
        </motion.h1>
      </Box>
      {!blogs ? (
        <LinearProgress color="secondary" />
      ) : (
        <Grid container justify="center" spacing={3}>
          {blogs.map((article) => (
            <BlogCard article={article} key={article.id}></BlogCard>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BlogMain;
