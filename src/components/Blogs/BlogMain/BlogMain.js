import { Container, Grid, Box } from '@material-ui/core';
import React from 'react';
import BlogCard from './BlogCard/BlogCard';



const articles =[
    {
        id:1,
        name: '10 String Methods that every JavaScript Developer definitely need to know',
        img: 'https://iili.io/3evgnt.md.jpg',
        link: 'https://medium.com/@habibur4224287/10-string-methods-that-every-javascript-developer-definitely-need-to-know-8c8bc62a5c84'
    },
    {
        id:2,
        name: 'Coming Soon',
        img: 'https://iili.io/3evgnt.md.jpg',
        link: 'https://medium.com/@habibur4224287/10-string-methods-that-every-javascript-developer-definitely-need-to-know-8c8bc62a5c84'
    },
    {
        id:3,
        name: 'Coming Soon',
        img: 'https://iili.io/3evgnt.md.jpg',
        link: 'https://medium.com/@habibur4224287/10-string-methods-that-every-javascript-developer-definitely-need-to-know-8c8bc62a5c84'
    }
]

const BlogMain = () => {

    return (
        <Container style={{marginTop: '50px'}}>
            <Box textAlign="center">
                <h1 className="custom-title">Blogs</h1>
                </Box>
            <Grid container justify="center" spacing={3}>
                {
                    articles.map(article => <BlogCard article={article} key={article.id}>  </BlogCard>)
                }
            </Grid>
        </Container>
    );
};

export default BlogMain;