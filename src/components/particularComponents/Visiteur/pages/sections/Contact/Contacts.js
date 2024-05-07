import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Modal, Slide } from '@mui/material';
import { Call, Mail, Room } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { push, ref } from 'firebase/database';
import { db } from '../../../../../../Backend/Data/config';

const ContactForm = () => {
      const [open , setOpen ]= useState(false)
      const [email, setEmail] = useState('')
      const [phoneNumber , setPhoneNumber] = useState('')
      const [messageText , setMessageText] = useState('')
   const navigate = useNavigate()
    const handleCloseModal = ()=>{
      setOpen(false)
      navigate('/')
    }
    useEffect(()=>{
        setOpen(true)
       
    },[])

    const sendMessage = ()=>{
      const message = {
        email: email, 
        phoneNumber: phoneNumber,
        messageText: messageText
      }

      push(ref(db, 'contactsMessages') , message).then(()=>{
        alert('Votre message a été envoyé. Nous vous enverons la réponse sur votre adresse email')
      })
    }
    return (
      <Box>
        <Modal open={open} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Slide direction="up" in={open} mountOnEnter unmountOnExit timeout={500}>
        <Container  maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '10px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
   
  }} className='container'>
 
 
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Contactez-nous</Typography>
        </Grid>
        <Grid item xs={12}>
             <List>
     <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Mail />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="darsaftech@gmail.com" />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Call />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Numéro de téléphone" secondary="+229 40333883" />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Room />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Adresse" secondary="Quartier Arafat , Parakou" />
      </ListItem>
 </List>
        </Grid>
        <Grid item xs={12} >
          <TextField label="Email" fullWidth required onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Numéro de téléphone" fullWidth required onChange={(e)=>{
            setPhoneNumber(e.target.value)
          }} />
        </Grid>
        <Grid item xs={12}>
          <TextField
          nChange={(e)=>{
            setMessageText(e.target.value)
          }}
            label="Message"
            fullWidth
            multiline
            rows={4}
            required
          />
        </Grid>
       
      </Grid>
    </form>
     <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 4 }} >
          <Button sx={{ flex: 1, marginRight: '0.5rem'}}  variant='contained'
         color= 'primary'
         onClick={sendMessage}
          >
            Envoyer
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: 'red'}} variant='contained'
            onClick={()=>{navigate('/')}}
          >
            Fermer
          </Button>

        </Box>
    </Container>
    </Slide>
</Modal>
   </Box>
  );
};

export default ContactForm;
