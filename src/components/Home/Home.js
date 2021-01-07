
import React from "react";
import AboutMain from "../About/AboutMain/AboutMain";
import Blogs from "../Blogs/Blogs";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutMain></AboutMain>
      <Skills/>
      <Projects/>
      <Blogs/>
    </div>
  );
};

export default Home;
