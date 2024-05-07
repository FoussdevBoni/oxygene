import { Camera, PersonAdd } from '@mui/icons-material';
import { Autocomplete, Box, Button, CircularProgress, Container, Modal, Slide, TextField, Typography } from '@mui/material';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { db, storage } from '../../../../../Backend/Data/config';
import { push, ref, set } from 'firebase/database';



function NewWorker({adminId}) {
const [uploaded, setUploaded] =  useState(false)
   const [formData , setFormData]  = useState({
      firstName: '', lastName: '' , city: '' , phoneNumber: '' , profile:''  ,  
      
    })
const [image , setImage] = useState('')
const  handlePhotoChange = (driver , successAction) => {
       const userPhotoRef = storageRef(storage, `user_photos/${formData.phoneNumber}.jpg`);

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
             setFormData((prevState)=>({
              ...prevState, 
              profile: url
             }))
        }).catch(error => {
          console.log(error);
        });
      }).catch(error => {
        console.log(error);
      });
    });
    input.click();
  }




    const [open , setOpen ]= useState(false)

 
  
   const navigate = useNavigate()
    const handleCloseModal = ()=>{
      setOpen(false)
      navigate(-1)
    }
    useEffect(()=>{
        setOpen(true)
        
        
    },[])

  
    const addDriver = ()=>{
      const driver ={
      firstName: formData.firstName, 
      lastName: formData.lastName, 
      city: formData.city , 
      phoneNumber: formData.phoneNumber, 
      profile: formData.profile
    }
    const driverRef = ref(db ,'users/workers/')
    push(driverRef , driver).then(()=>{
      navigate(-1)
    })
    }
  
    return (
    
           <Box>
            <Typography variant='div' component={'h1'} sx={{textAlign:'center'}}>
               <PersonAdd /> <span> Ajouter un nouveau prestataire</span>
            </Typography>
            <br /><br/>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="Le nom du prestataire" variant="outlined" 
             type='text'
           value={formData.nom}
           onChange={(e)=>{
             setFormData((prevState)=>({
              ...prevState, 
              lastName: e.target.value
             }))
           }}
           />
           </Box>
   
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="Le prénom du prestataire" variant="outlined" 
           type='text'
           value={formData.firstName}
           onChange={(e)=>{
             setFormData((prevState)=>({
              ...prevState, 
              firstName: e.target.value
             }))
           }}
           />
           </Box> 
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="Le contact du prestataire" variant="outlined" 
           type='number'
           value={formData.phoneNumber}
           onChange={(e)=>{
             setFormData((prevState)=>({
              ...prevState, 
              phoneNumber: e.target.value
             }))
           }}
           />
           </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="L'adresse du prestataire" variant="outlined" 
           type='text'
           value={formData.city}
           onChange={(e)=>{
             setFormData((prevState)=>({
              ...prevState, 
              city: e.target.value
             }))
           }}
           />
           </Box>
                <Button sx={{ flex: 2, marginLeft: '0.5rem' , backgroundColor: 'white' , border:'1px solid rgba(0,0,0,0.5)' , color: 'black' , width:'100%'}}
                onClick={()=>{handlePhotoChange()}}  
          >
           <Camera /> {!uploaded ? ' Ajouter une photo du prestataire': <CircularProgress />}
          </Button>
             <br /><br/>
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ flex: 1, marginRight: '0.5rem' }} color ='primary'  variant='contained'
          onClick={()=>{addDriver()}}
          >
            Valider
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: 'rgba(0,0,0,0.5)'}} variant='contained'
            onClick={()=>{navigate(-1)}}
          >
            Fermer
          </Button>

        </Box>
     
      </Box>
          
    );
}

export default NewWorker;