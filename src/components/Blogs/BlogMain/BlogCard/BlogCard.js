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
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  root: {
    width: 300,
    marginTop: "40px",
    transition: 'all linear 1s',
    '&:hover': {
      boxShadow: '0 3px 3px 3px rgba(251, 232, 62, 0.5) !important',
    },

    '& .MuiButton-textSizeSmall': {
      borderWidth: "3px",
      borderStyle: "solid",
      borderImage: " linear-gradient(to bottom, #07c020 50%,#dfdf26) 1  100%;",
      transition: 'all linear .7s'
    },

  },
  media: {
    height: 140,
    overflow: 'hidden',
    transition: '1s',
    '&:hover':{
      // boxShadow: '0 3px 10px 5px rgba(255, 105, 135, .9)',
      transform: 'scale(1.2)',
    }
    
  },

});
const BlogCard = ({ article }) => {
  const classes = useStyles();
  const { img, name, link } = article;
  return (
    <Grid item md={4}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0,  opacity: 1, }}
        transition={{ }}
      >
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
            <Button size="small"  className="custom-link-btn" target="_blank" href={link}>
              Read Article
</Button>
          </CardActions>
        </Card>
      </motion.div>
    </Grid>
  );
};

export default BlogCard;