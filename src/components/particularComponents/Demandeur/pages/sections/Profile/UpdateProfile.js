import React, { useEffect, useState } from 'react';
import { Alert, Autocomplete, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { db } from '../../../../../../Backend/Data/config';
import MyAlert from '../../../../../generalComponents/MyAlert/MyAlert';

function UpDateForm({user}) {
  const navigate = useNavigate();

  // États pour les valeurs des champs de saisie
   const [email, setEmail] = useState(user.email);
  const [lastName, setLastName] = useState(user.lastName);
    const [firstName, setFirstName] = useState(user.firstName);

  const [numeroTelephone, setNumeroTelephone] = useState(user.phone);
  const [wilaya, setWilaya] = useState(user.wilaya);

  // États pour les messages d'erreur
  const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
  const [numeroTelephoneError, setNumeroTelephoneError] = useState(null);
  const [error , setError] = useState('')
  const [open ,setOpen] = useState(false)
  // Gestionnaire de soumission du formulaire
 
  const update =()=>{
    let profile
     if (user.profile!==undefined) {
       profile = user.profile
    }else{
        profile = ''
    }
       const formData = {
      email: user.email ,
      firstName: firstName,
      lastName: lastName,
      phone: numeroTelephone ,
      userId:  user.userId, 
      profile: profile
    }
        const userRef = ref(db, 'clients/'+user.userId)
        set(userRef , formData).then(()=>{
            navigate(-1)
        })
    }

  
  const handleSubmit = () => {
   if (lastName==='') {
    setLastNameError('Veillez saisir votre nom et prénom')
   } else if (firstName==='') {
      setLastNameError('')
    setFirstNameError('Veillez saisir votre nom et prénom')
   } else if (numeroTelephone===null) {
        setFirstNameError('')
    setNumeroTelephoneError('Veillez saisir un numéro valide')
   }else{
        setFirstNameError('')
       update()
   }
  }



  return (
    <Box sx={{minHeight: window.innerHeight}}>
      {
        error!==''&& <Typography variant='div' component={'div'} sx={{ textAlign: 'center' }} color={'red'}>
         La modification du profile a échouée. Veillez réessayer
      </Typography>
      }
      <br /><br />  <br /><br />  <br /><br />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 0, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Adresse email" variant="outlined" value={email} />
      </Box>
     
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mt: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Votre nouveau nom" variant="outlined" type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        {lastNameError && <Typography color="error">{lastNameError}</Typography>}
      </Box>
      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mt: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Votre nouveau prénom" variant="outlined" type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        {firstNameError && <Typography color="error">{firstNameError}</Typography>}
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mt: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Votre numéro de téléphone" variant="outlined" type='tel' value={numeroTelephone} onChange={(e) => setNumeroTelephone(e.target.value)} />
        {numeroTelephoneError && <Typography color="error">{numeroTelephoneError}</Typography>}
      </Box>
     

      <br /><br />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button  color='primary' variant='contained' sx={{ flex: 1, marginRight: '0.5rem'}}  onClick={handleSubmit}>
          Modifier
        </Button>
        <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{ backgroundColor:'orangered' }} variant='contained' onClick={() => { navigate(-1) }}>
          Annuler
        </Button>
      </Box>
     
          <MyAlert message={'Modification du profile échouée'} val={open} severity={'error'}/>
    </Box>
  );
}

export default UpDateForm;
