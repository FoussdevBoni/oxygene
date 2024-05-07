import React from 'react';
import { makeStyles } from '@mui/styles';
import { Modal, Backdrop, CircularProgress } from '@mui/material';
import LinearIndeterminate from './ProgressBar';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
  },
  loader: {
    display: 'flex',
    alignItems: '',
    justifyContent: 'center',
    outline: 'none',
    color: 'white'
  },
}));

const LoaderModal = () => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
        <LinearIndeterminate />
    </Modal>
  );
};

export default LoaderModal;