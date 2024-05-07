import * as React from 'react';
import { Modal, Box, Typography, Slide } from '@mui/material';
import Receivers from '../Chat/NewChat';

const ScrollableModal = ({ open, onClose , children , openNewChat}) => {
  return (
    <Modal open={open} onClose={onClose}>
   <Slide direction="up" in={open} mountOnEnter unmountOnExit timeout={500}>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          right: '25%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          minHeight: window.innerHeight,
          overflowY: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 1,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Nouvelle discussion
        </Typography>
        <Typography variant="body1" component="div">
          <Receivers openNewChat={openNewChat} />
        </Typography>
      </Box>
    </Slide>
    </Modal>
  );
};

export default ScrollableModal;
