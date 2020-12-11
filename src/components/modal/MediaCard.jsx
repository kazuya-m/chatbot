import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { getSelectedImage } from '../../assets/img/skills/index';

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: "100%",
    height: '140px',
    margin: "auto",
    alignItems: "center"
  },
  img: {
    width: '80px',
    fontSize: "1em",
    margin: "0 auto",
    padding: "15px 0"
  },
});

const MediaCard = props => {
  const classes = useStyles();
  
  // idに対応した画像を取得する
  const selectedImage = getSelectedImage(props.id);

  return (
    <Card>
      <div className={classes.root}>
        <CardMedia
          component="img"
          className={classes.img}
          image={selectedImage}
          title={props.key}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.exp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;