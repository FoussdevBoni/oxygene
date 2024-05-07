import { Autocomplete, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { residences } from '../../../../../../data-center/locations';
import LocationsSelectForm from '../../../../../generalComponents/ServicesDemands/LocationSelectForm';
import { ref, set } from 'firebase/database';
import { db } from '../../../../../../Backend/Data/config';

function ProfileUpdateForm({user}) {
  const [location, setLocation]  = useState([])
   const [companyName, setCompanyName] = useState(user.companyName);
  const [companyAddress, setCompanyAddress] = useState(user.companyAddress);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [supplierCategory, setSupplierCategory] = useState(user.supplierCategory);
  const [companyDescription, setCompanyDescription] = useState(user.companyDescription);
  const [documents, setDocuments] = useState([]);
  const [country , setCountry] = useState(user.country)
  const [dep , setDep] = useState(user.dep)
  const [city , setCity] = useState(user.city);
  const [hours , setHours] = useState(user.hours)
  const handleLocationChange = (location) => {
    // Utilisez la valeur de 'location' ici dans ServicesSelectForm
    setLocation(location)
    setDep(location.dep)
    setCity(location.city)
    
  };

  const updateProfile = ()=>{
    const formData =    {
      companyName: companyName,
      companyAddress: companyAddress,
      phone: phoneNumber,
      email: email,
      password: password,
      supplierCategory: supplierCategory,
      companyDescription: companyDescription,
      city: city,
      country: country,
      dep: dep,
      hours: hours,
      userId: user.userId,
      profile:  user.profile
    };

    const dataRef = ref(db , 'users/parteners/'+user.userId)

    set(dataRef , formData)
  }
    return (
        <Box>
                        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Votre email" variant="outlined" 
         value={email}
       
         /> 
    </Box>
                  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Nom de l'établissement" variant="outlined" 
         value={companyName}
         onChange={
            (e)=>{
                setCompanyName(e.target.value)
            }
         }
         /> 
    </Box>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Votre nouveau numéro de téléphone" variant="outlined" 
         value={phoneNumber}
          onChange={
            (e)=>{
                setPhoneNumber(e.target.value)
            }
         }
         /> 
    </Box>
                           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Catégorie de produit fournis" variant="outlined" 
                  onChange={(e)=>{setSupplierCategory(e.target.value)}}

         value={supplierCategory}/> 
    </Box>
                     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Description de votre établissement" variant="outlined" multiline
                  onChange={(e)=>{setCompanyDescription(e.target.value)}}

         value={companyDescription}/> 
    </Box>
               <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Les horaires d'ouvertures" variant="outlined" multiline
         onChange={(e)=>{setHours(e.target.value)}}
         value={hours}/> 
    </Box>
         <LocationsSelectForm location={handleLocationChange} />

                    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Adresse de votre établissement" variant="outlined" 
                  onChange={(e)=>{setCompanyAddress(e.target.value)}}

         value={companyAddress}/> 

    </Box>
    
                    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
    >
         
         <Button color='primary' variant= 'contained'
         onClick={
            ()=>{
                updateProfile()
            }
         }
         >
            Mettre à jour
         </Button>
    </Box>
        </Box>
    );
}

export default ProfileUpdateForm;