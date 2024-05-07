import { Call, ConfirmationNumberSharp, Mail, Room, Star } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Modal, Slide, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ref, remove } from 'firebase/database';
import { db } from '../../../../Backend/Data/config';

function WorkerDetails({driver ,user}) {
  const [copied , setCopied] = useState(false)
  const [view , setView] = useState()
  const [confirmed , setConfirmed] = useState(false)
    const [open , setOpen] = useState(false)
   const driverRef = ref(db ,'users/workers/drivers/'+driver.id)

const deleteDriver = ()=>{
    remove(driverRef).then(()=>{
      setOpen(false)
    })
  }
  const navigate = useNavigate()
  const handleCloseModal = ()=>{
    setOpen(false)
  }
  const Confirm = ()=>{
    return(
       <Box>
             <Typography component={'div'} textAlign={'center'} fontWeight={'900'}>
              Voulez-vraiment supprimer  {driver.lastName} {driver.firstName} ?
             </Typography>
             <Button sx={{ flex: 1, marginLeft: '0.5rem' }}  style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{
              deleteDriver()
            }}
          >
           Oui
          </Button>
             <Button sx={{ flex: 1, marginLeft: '0.5rem' }}  style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{
               setOpen(false)
            }}
          >
           non
          </Button>
          </Box>
    )
  }
    return (
        <Box padding={10}>
           <Grid container marginTop={10}>
            <Grid item xs={12} md={6}>
                <Box>
                    <Avatar src={driver.profile} alt={`${driver.firstName} ${driver.lastName}`}   sx={{
                width: '100px', // Ajustez la largeur de l'Avatar selon vos besoins
                height: '100px', // Ajustez la hauteur de l'Avatar selon vos besoins
                margin: '0 auto', // Pour centrer l'Avatar horizontalement
                display: 'block',
                marginTop: 2 // Pour centrer l'Avatar horizontalement
              }}/>
                    <Typography component={'h3'} variant='h4' textAlign={'center'}>
                        {driver.firstName}                         {driver.lastName}

                    </Typography>
                </Box>
            </Grid>
              <Grid item xs={12} md={6}>
                   <List>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Call />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Numéro de téléphone" secondary={driver.phoneNumber} />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Room />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Wilaya du chauffeur" secondary={driver.city} />
      </ListItem>
     
      </List>
        </Grid>
     </Grid> 
    
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color='primary' variant='contained' sx={{ flex: 1, marginRight: '0.5rem' }} 
           onClick={()=>{
             navigate('modifier-le-profile')
           }}
          >
            Modifier  les informations du prestataire
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }}  style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{
              setOpen(true)
            }}
          >
            Supprimer le prestataire
          </Button>
           
        </Box>
     <Modal open={open} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Container  maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '20px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
   
  }} className='container'>
    <Confirm />
  </Container>
  </Slide>
  </Modal>
    </Box>
    );
}

export default WorkerDetails;