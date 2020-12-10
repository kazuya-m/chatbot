import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { getSelectedImage } from '../../assets/img/skills/index';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    maxHeight: 140,
  },
});

// keyに対応した画像を取得する
const getImage = id => {
  console.log(id);
  const image = getSelectedImage(id);
  return image;
}

const MediaCard = props => {
  const classes = useStyles();

  const selectedImage = getImage(props.id);
  console.log(selectedImage);


  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          src={selectedImage}
          title={props.key}
        />
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