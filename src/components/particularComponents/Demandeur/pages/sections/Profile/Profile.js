import { Call, Edit, Mail, PhotoCamera, Room } from '@mui/icons-material';
import { Avatar, Box, Button, CircularProgress, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { push, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../../../../../Backend/Data/config';

function Profile({user}) {
  const [uploaded , setUploaded] = useState(true)
  const  handlePhotoChange = (driver , successAction) => {
    setUploaded(true)
       const userPhotoRef = storageRef(storage, `user_photos/${user.userId}.jpg`);

    // Ouvrir l'explorateur de fichiers pour sélectionner une image
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => {
      const file = input.files[0];

      // Télécharger la nouvelle image dans le stockage Firebase
      uploadBytes(userPhotoRef, file).then(() => {
        // Récupérer l'URL de téléchargement de la nouvelle image
        getDownloadURL(userPhotoRef).then(url => {
           setUploaded(true)
           set(ref(db , 'users/clients/'+user.userId+'/profile') , url)
        }).catch(error => {
          console.log(error);
        });
      }).catch(error => {
        console.log(error);
      });
    });
    input.click();
  }
const navigate = useNavigate()
    return (
        <Box>
           <Grid container marginTop={10}>
            <Grid item xs={12} md={6}>
                <Box>
                    <Avatar src={user.profile} alt={''}   sx={{
                width: '100px', // Ajustez la largeur de l'Avatar selon vos besoins
                height: '100px', // Ajustez la hauteur de l'Avatar selon vos besoins
                margin: '0 auto', // Pour centrer l'Avatar horizontalement
                display: 'block',
                marginTop: 2 // Pour centrer l'Avatar horizontalement
              }}/>
                    <Typography component={'h3'} variant='h4' textAlign={'center'}>
                       {user.firstName}                    
                       {user.lastName}                    
                    </Typography>
                </Box>
            </Grid>
              <Grid item xs={12} md={6}>
     <List>
        <ListItem>
           <Typography>informations personnelles</Typography>
        </ListItem>
        <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Mail />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Adresse email" secondary={user.email} />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Call />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Numéro de téléphone" secondary={user.phone} />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Room />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mon wilaya" secondary={user.wilaya} />
      </ListItem>
     
      </List>
        </Grid>
     </Grid> 
     <Box padding={3}>
     
      
         <Button   fullWidth
                sx={{ backgroundColor: 'rgba(0,0,0,0.9)' , color: 'white' }} 
            onClick={()=>{
              handlePhotoChange()
            }}    
                   style={{borderRadius: 25}}

               >
       <PhotoCamera /> {uploaded ? ' Ajouter une photo' : <CircularProgress sx={{color: 'white'}}/>}
      </Button>
      
       <Typography paragraph fontSize={18} textAlign={'center'}>
        <br />
          OU
      </Typography>
      <Button   fullWidth
      onClick={()=>{
        navigate('modifier-mon-profile')
      }}
       style={{borderRadius: 25}}
           color='primary' variant='contained'     >
         <Edit />   Modifier mon profile
      </Button>
      
      
     </Box>
    

    
    </Box>
    );
}

export default Profile;