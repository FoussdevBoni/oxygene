import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Modal, Slide } from '@mui/material';
import { Call, Mail, Room } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { push , ref } from 'firebase/database';
import { db } from '../../../../../../../Backend/Data/config';

const ContactForm = () => {
      const [formData , setFormData] = useState()
      const [open , setOpen ]= useState(false)
      const submit = ()=>{
         const canditaturesRef = ref(db, 'canditatures')
         push(canditaturesRef , formData).then(
          (data)=>{
            navigate('/canditature-envoyee?ref='+data.key)
          }
         )
      }
   const navigate = useNavigate()
    const handleCloseModal = ()=>{
      setOpen(false)
      navigate('/')
    }
    useEffect(()=>{
        setOpen(true)
       
    },[])
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
          <Typography variant="h6">Envoyez votre canditature</Typography>
        </Grid>
        <Grid item xs={12}>
    
        </Grid>
        <Grid item xs={12}>
          <TextField label="Votre  adresse mail" fullWidth required 
          onChange={(e)=>{
            setFormData({...formData, email: e.target.value})
          }}
          />
        </Grid>
         <Grid item xs={12}>
          <TextField label="Votre numéro de téléphone" fullWidth 
            onChange={(e)=>{
            setFormData({...formData, phoneNumber: e.target.value})
          }}
          required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Votre  nom" fullWidth required
           onChange={(e)=>{
            setFormData({...formData, lastName: e.target.value})
          }}
           />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Votre  prénom" fullWidth required 
           onChange={(e)=>{
            setFormData({...formData, firstName: e.target.value})
          }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Votre  âge" fullWidth required 
           onChange={(e)=>{
            setFormData({...formData, age: e.target.value})
          }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Le numéro de votre CNI" fullWidth required 
           onChange={(e)=>{
            setFormData({...formData, cniNumber: e.target.value})
          }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Saisir votre NPI" fullWidth required 
           onChange={(e)=>{
            setFormData({...formData, npiNumber: e.target.value})
          }}
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            label="Descrivez vos compétences"
            fullWidth
            multiline
            rows={4}
            required
             onChange={(e)=>{
            setFormData({...formData, aboutMe: e.target.value})
          }}
          />
        </Grid>
       
      </Grid>
    </form>
     <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 4 }} >
          <Button sx={{ flex: 1, marginRight: '0.5rem'}}  variant='contained'
         color= 'primary' onClick={()=>{submit()}}
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
