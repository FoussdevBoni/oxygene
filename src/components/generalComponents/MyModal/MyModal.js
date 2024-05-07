import { Box, Container, Modal, Slide, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenTop from '../Header/ScreenTop';

function MyModal({user , children , title}) {

    const [open , setOpen] = useState(true)
    const navigate = useNavigate()
    const handleCloseModal = ()=>{
        setOpen(false)
         navigate(-1)
    }
    useEffect(()=>{
        setOpen(true)
        return ()=>{
            setOpen(false)
        }
    }, [])
    return (
        <Box>
             <Modal open={open} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Container  maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '0',
    marginTop: '0px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
   
  }} className='container'>
    <Box sx={{  display: { xs: 'block', sm: 'block', md: 'none', xl: 'none', lg: 'none' },}}>
      <ScreenTop title={title}/>
    </Box>
    <Typography sx={{  display: { xs: 'none', sm: 'none', md: 'block', xl: 'block', lg: 'block' }, textAlign: 'center'}}variant='div' component={'h1'}>
        {title}
    </Typography>
    
    {children}
  </Container>
  </Slide>
  </Modal>
</Box>
    );
}

export default MyModal;