import React from "react";
import AboutMain from "../About/AboutMain/AboutMain";
import Blogs from "../Blogs/Blogs";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Header from "./Header/Header";
import Slide from 'react-reveal/Slide';
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slide right>
      <AboutMain></AboutMain>
        </Slide>
      <Slide left>
      <Skills/>
        </Slide>
      <Projects/>
        <Slide right>
         < Blogs/>
        </Slide>
    </div>
  );
};

export default Home;
