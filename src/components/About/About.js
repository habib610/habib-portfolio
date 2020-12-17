import React from 'react';
import NavbarMain from '../Home/Navbar/NavbarMain';
import Skills from '../Skills/Skills';
import AboutMain from './AboutMain/AboutMain';

const About = () => {
    return (
        <div style={{background: "#080726", padding: '0px 10px'}}>
              <NavbarMain></NavbarMain>
            <AboutMain></AboutMain>
            <Skills/>
        </div>
    );
};

export default About;