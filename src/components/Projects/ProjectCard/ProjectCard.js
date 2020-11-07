import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ProjectCard.css'
import { motion } from 'framer-motion';
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 500,
    margin: ' 30px 0px',
    transition: 'all linear .4s',
    '&:hover': {
      boxShadow: '0 3px 10px 5px rgba(255, 105, 135, .9)',
      transform: 'scale(1.02)',
    },
    '& .MuiButton-textSizeSmall': {
      borderWidth: "3px",
      borderStyle: "solid",
      borderImage: " linear-gradient(to bottom, #f81f01, #ee076e) 1  100%;",
      transition: 'all linear .7s'
    }
  },
  media: {
    height: 280,
  },
});
const ProjectCard = ({ details }) => {

  const { name,  img, description, github, live } = details;

  const classes = useStyles();
  return (
    <Grid item md={4}>
      <motion.div 
      initial={{ y: -200, opacity: .5,  rotateY: 156}}
        animate={{ x: 0, y: 0, opacity: 1, rotateY: 0 }}
        transition={{ duration: .6 }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" className="custom-link-btn" target="_blank" href={live}>
              Live Site
        </Button>
            <Button size="small" className="custom-link-btn" target="_blank" href={github}>
              Github
        </Button>
          </CardActions>
        </Card>

      </motion.div>
    </Grid>
  );
};

export default ProjectCard;