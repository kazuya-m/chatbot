import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Skills from './Skills';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 432,
    maxHeight: 432,
    backgroundColor: theme.palette.background.paper,
    outline: 0
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
        <div
         style={getModalStyle()}
         className={classes.paper}>
           <Skills />
        </div>
      );    
      break;
    default:
      break;
  }

  return (
    <div>
      <Modal
        open={props.modalOpen}
        onClose={props.handleClickModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default InfoModal;