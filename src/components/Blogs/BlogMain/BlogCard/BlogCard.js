import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: 345,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .9)',
        transition: 'all linear .4s',
        '&:hover':{
          transform: 'scale(1.1)'
        },
      '& .MuiButton-textSizeSmall':{
        borderWidth: "3px",
        borderStyle: "solid",
      borderImage: " linear-gradient(to bottom, #f81f01, #ee076e) 1  100%;",
      transition: 'all linear .7s'
    },
    
    },
    media: {
      height: 140,
    },
    cardContent:{
      '&:hover':{
        background:"linear-gradient(45deg, #f81f01 30%, #ee076e 90%) ;",
        color: 'white'
      },
    }
  });
const BlogCard = ({article}) => {
    const classes = useStyles();
    const {img, name, link} = article;
    return (
        <Grid item md={4}>
        <Card className={classes.root}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image={img}
  title={name}
/>
<CardContent className={classes.cardContent}>
  <Typography gutterBottom variant="h5" component="h2">
  {name}
  </Typography>
</CardContent>
</CardActionArea>
<CardActions>

<Button size="small" className="custom-link-btn" target="_blank" href={link}>
Read Article
</Button>
</CardActions>
</Card>
        </Grid>
    );
};

export default BlogCard;