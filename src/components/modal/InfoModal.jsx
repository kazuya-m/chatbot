import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Skills from './Skills';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppMap from '../../assets/img/chatbot.svg';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 900,
    maxHeight: 700,
    backgroundColor: "#fafafa",
    outline: 0,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "2px",
    overflow: "scroll"
  },
  map: {
    width: 900,
    height: 700
  }
}));

const InfoModal = props => {

  const classes = useStyles();

  let body;

  switch (props.modalId) {
    case 'skills':
      body = (
        <div className={classes.paper}>
          <Skills />
        </div>
      );    
      break;
    case 'map':
      body = (
        <div className={classes.paper}>
          <object
            className={classes.map}
            type="image/svg+xml" data={AppMap}
            aria-label="Application map" 
           />
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <Modal
      open={props.modalOpen}
      onClose={props.handleClickModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.modalOpen}>
        {body}
      </Fade>
    </Modal>
  );
}

export default InfoModal;