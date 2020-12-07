import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Skills from './Skills';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 500,
    maxHeight: 592,
    backgroundColor: theme.palette.background.paper,
    outline: 0,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "3px",
    overflow: "scroll"
    
    //border: '1px solid #ffffff',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
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