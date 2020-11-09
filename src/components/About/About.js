import React from 'react';
import NavbarMain from '../Home/Navbar/NavbarMain';
import AboutMain from './AboutMain/AboutMain';

const About = () => {
    return (
        <div style={{background: "#201e43", padding: '0px 10px'}}>
              <NavbarMain></NavbarMain>
            <AboutMain></AboutMain>
        </div>
    );
};

export default About;