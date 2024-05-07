import React, { useContext, useState } from 'react';
import { Box, LinearProgress, TextField, Button, Modal, Slide, Grid, Card, CardContent, Container, Stack } from '@mui/material';
import { push, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../../../../Contextes/MyContext';
import { db } from '../../../../../../Backend/Data/config';
import { userProfile } from '../../../../../../data-center/data';


const profile = (profile)=>{
    if(profile!==undefined){
        return profile
    }else{
        return userProfile
    }
}
const UpdateProfile = ({user}) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
    userId: user.userId,
    profile: profile(user.profile)
  });

  const { myVariable, setMyVariable } = useContext(MyContext);

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',

  });

  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};

    // Validation du champ firstName
    if (formData.firstName.trim() === '') {
      errors.firstName = 'Veuillez saisir votre prénom.';
    }

    // Validation du champ lastName
    if (formData.lastName.trim() === '') {
      errors.lastName = 'Veuillez saisir votre nom de famille.';
    }

    // Validation du champ email
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      errors.email = 'Veuillez saisir une adresse e-mail valide.';
    }

    // Validation du champ password
    if (formData.password.length < 6) {
      errors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
    }

    // Validation du champ phone
    if (!/^\d{10}$/g.test(formData.phone)) {
      errors.phone = 'Veuillez saisir un numéro de téléphone valide (10 chiffres).';
    }

    setFormErrors(errors);

    // Vérification s'il y a des erreurs
    return Object.keys(errors).length === 0;
  };

  const updateProfile = () => {
    if (validateForm()) {
      // Appeler la fonction register
      const dataRef = ref(db , 'users/clients/'+user.userId)
     set(dataRef , formData).then(
        ()=>{
            setOpenModal(false);

        }
     )
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const InputClassName =
    'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none';

  return (
    <Modal
      open={openModal}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      disableBackdropClick
      disableEscapeKeyDown
    >
      <Slide direction="up" in={openModal}>
          <Container width="100%" >
         <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
         <Card style={{padding:'5px', width:'100%'}} className='py-100'>
          <CardContent>
              <div className='font-bold text-center text-3xl py-6'>
                Oxygen
              </div> <br></br>
                <div className=' text-center text-2xl py-6'>
                   Modifier votre profile
              </div>

            {myVariable.registered ? (
              <Box>
                <div>
                  <Box
                    sx={{
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <LinearProgress />
                  </Box>
                </div>
              </Box>
            ) : (
                 <Box>
                             <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Votre email" variant="outlined" 
         value={formData.email}
       
         /> 
    </Box>
                  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Votre prénom" variant="outlined" 
         value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
         /> 
    </Box>
                     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Votre nom" variant="outlined" 
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
         value={formData.lastName}/> 
    </Box>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
    >
         <TextField id="outlined-basic" label="Votre nouveau numéro de téléphone" variant="outlined" 
         value={formData.phone}
           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
         /> 
    </Box>
   
    
        <Box sx={{display: 'flex' }}>
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
                <Box
      sx={{
        '& .MuiTextField-root': { ml: 1, width: '100%' },
        marginLeft: '10px'
      }}
    >
         
         <Button color='secondary' variant= 'contained'
         onClick={
            ()=>{
               setOpenModal(false)
            }
         }
         >
            Annuler
         </Button>

        </Box>
            </Box>

        </Box>  
            )}
          </CardContent>
        </Card>
        </Box>
      </Container>
      </Slide>
    </Modal>
  );
};

export default UpdateProfile;
