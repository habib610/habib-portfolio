import React from 'react';
import NavbarMain from '../Home/Navbar/NavbarMain';
import BlogMain from './BlogMain/BlogMain';

const Blogs = () => {
    return (
        <div style={{background:'#080726', color: 'white'}}>
          <NavbarMain></NavbarMain>
        <BlogMain></BlogMain>
        </div>
    );
};

export default Blogs;