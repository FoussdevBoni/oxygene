import { Camera, PersonAdd } from '@mui/icons-material';
import { Autocomplete, Box, Button, CircularProgress, Container, Modal, Slide, TextField, Typography } from '@mui/material';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { push, ref, remove, set } from 'firebase/database';
import { db, storage } from '../../../../../Backend/Data/config';



function UpDateWorker({adminId , driver}) {
const [uploaded, setUploaded] =  useState(false)
   const [formData , setFormData]  = useState({
      firstName: driver.firstName, lastName: driver.lastName , city: driver.city , phoneNumber: driver.phoneNumber , profile: driver.profile  ,  
      
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

      const driverRef = ref(db ,'users/workers/'+driver.id)

    const addDriver = ()=>{
      const newDriverData ={
      firstName: formData.firstName, 
      lastName: formData.lastName, 
      city: formData.city , 
      phoneNumber: formData.phoneNumber, 
      profile: formData.profile
    }
    set(driverRef , newDriverData).then(()=>{
      navigate(-1)
    })
    }
  
  
    return (
    
           <Box>
            <Typography variant='div' component={'h1'} sx={{textAlign:'center'}}>
               <PersonAdd /> <span> Modifier le profile du prestataire</span>
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
           <TextField id="outlined-basic" label="Le nom du chauffeur" variant="outlined" 
             type='text'
           value={formData.lastName}
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
           <TextField id="outlined-basic" label="Le prénom du chauffeur" variant="outlined" 
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
           <TextField id="outlined-basic" label="Le contact du chauffeur" variant="outlined" 
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
           <TextField id="outlined-basic" label="Le wilaya du chauffeur" variant="outlined" 
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
           <Camera /> {!uploaded ? ' Ajouter une photo du prestaire': <CircularProgress />}
          </Button>
             <br /><br/>
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ flex: 1, marginRight: '0.5rem' , backgroundColor: '#F0853F'}}  variant='contained'
          onClick={()=>{addDriver()}}
          >
            Modifier
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: 'rgba(0,0,0,0.5)'}} variant='contained'
            onClick={()=>{navigate(-1)}}
          >
            Annuler
          </Button>

        </Box>
     
           </Box>
          
    );
}

export default UpDateWorker;