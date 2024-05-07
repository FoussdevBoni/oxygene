import React, { useContext, useEffect, useState } from 'react';
import { Box, LinearProgress, TextField, Button, Modal, Slide, Grid, Card, CardContent, Container, Stack } from '@mui/material';
import { push, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../../../../../Contextes/MyContext';
import { register } from '../../../../../../../Backend/Actions/Set/auth';
import { db } from '../../../../../../../Backend/Data/config';
import { logo } from '../../../../../../../data-center/data';

const DemandeurForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: null,
    userType: 'demandeur'

  });

  const { myVariable, setMyVariable } = useContext(MyContext);

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: null,
  });

  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();
const handleFirstNameChange = (e) => {
  const value = e.target.value;
  setFormData((prevData) => ({
    ...prevData,
    firstName: value,
  }));
  if (value.trim()!=='') {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      firstName: '',
    }));
  }else{
      setFormErrors((prevErrors) => ({
      ...prevErrors,
      firstName: 'Veuillez saisir votre prénom.',
    }));
  }
};

const handleLastNameChange = (e) => {
  const value = e.target.value;
  setFormData((prevData) => ({
    ...prevData,
    lastName: value,
  }));
  if (value.trim()!=='') {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      lastName: '',
    }));
  }else{
     setFormErrors((prevErrors) => ({
      ...prevErrors,
      lastName: 'Veuillez saisir votre nom.',
    }))
  }
};

const handleEmailChange = (e) => {
  const value = e.target.value;
  setFormData((prevData) => ({
    ...prevData,
    email: value,
  }));
  if (value.trim()!==''&&/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      email: '',
    }));
  }else
      {
      
       setFormErrors((prevErrors) => ({
      ...prevErrors,
      email: 'Veillez saisir une adresse e-mail ',
    }));
    }
  
};

const handlePasswordChange = (e) => {
  const value = e.target.value;
  setFormData((prevData) => ({
    ...prevData,
    password: value,
  }));
  if (value.trim().length>=6) {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      password: '',
    }));
  }else {
     setFormErrors((prevErrors) => ({
      ...prevErrors,
      password: 'Le mot de passe doit contenir au moins 6 caractères.',
    }));
  }
};

const handlePhoneChange = (e) => {
  const value = e.target.value;


   setFormData((prevData) => ({
    ...prevData,
    phone: value,
  }));
 
  if (/^\d{8}$/g.test(value)) {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      phone: '',
    }));
  }else{
     setFormErrors((prevErrors) => ({
      ...prevErrors,
      phone: 'Veuillez saisir un numéro de téléphone valide (8 chiffres).',
    }));
  }
};
const handleKeyDown = (event) => {
  const allowedKeyCodes = [8]; // Touche Backspace

  if (!/[0-9]/.test(event.key) && !allowedKeyCodes.includes(event.keyCode)) {
    event.preventDefault();
  }
};
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
    if (!/^\d{8}$/g.test(formData.phone)) {
      errors.phone = 'Veuillez saisir un numéro de téléphone valide (10 chiffres).';
    }

    setFormErrors(errors);

    // Vérification s'il y a des erreurs
    return Object.keys(errors).length === 0;
  };
 
  const handleRegistration = () => {
    if (validateForm()) {
      // Appeler la fonction register
      register(formData, (userWithoutPassword, userData) => {
        set(ref(db, '/users/clients/' + userData.user.uid), userWithoutPassword).then((data) => {
          set(ref(db, '/users/clients/' + userData.user.uid + '/userId'), userData.user.uid).then((response) => {
            setOpenModal(true);
            setTimeout(() => {
              navigate('/accounts/clients/' + userWithoutPassword.email.replace(/[^A-Za-z0-9]/g, ''));
              setOpenModal(false);
            }, 1000);

            setMyVariable((prevState) => ({
              ...prevState,
              connectedAS: 'client',
            }));
            window.location.reload();
            localStorage.setItem('connectedAS', 'client');
          });
        });
      });

      setMyVariable((prevState) => ({
        ...prevState,
        registered: true,
      }));
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setMyVariable((prevState) => ({
      ...prevState,
      hidden: true,
    }));
    navigate('/connexion/client');
  };
useEffect(()=>{
      setOpenModal(true);

     setMyVariable(prevState => ({
                 ...prevState,
              hidden: true
       }));

       return ()=>{

           setMyVariable(prevState => ({
                 ...prevState,
              hidden: false
       }));
       }
},[])
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
        <Container 
        
         maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '2px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
  }} className='container'
        >
        
            <Card style={{ padding: '5px', width: '100%' }} className="py-100">
              <CardContent>
                <div className="font-bold text-center text-3xl py-2 flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={logo} alt="" style={{ width: '180px' }} />
                </div>
                <br></br>
                <div className="text-center text-2xl py-6 font-bold">Créer votre compte</div>

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
  autoComplete="off"
>
  <TextField
    label="Prénom"
    value={formData.firstName}
    onChange={(e) => handleFirstNameChange(e)}
    InputProps={{ className: formErrors.firstName ? 'error-text' : '' }}
  />
  {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
</Box>

<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField
    label="Nom de famille"
    value={formData.lastName}
    onChange={(e) =>handleLastNameChange(e)}
    InputProps={{ className: formErrors.lastName ? 'error-text' : '' }}
  />
  {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
</Box>

<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField
    label="Adresse e-mail"
    value={formData.email}
    onChange={(e) =>handleEmailChange(e)}
    InputProps={{ className: formErrors.email ? 'error-text' : '' }}
  />
  {formErrors.email && <div className="error-message">{formErrors.email}</div>}
</Box>

<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField
    label="Mot de passe"
    type="password"
    value={formData.password}
    onChange={(e) => handlePasswordChange(e)}
    InputProps={{ className: formErrors.password ? 'error-text' : '' }}
  />
  {formErrors.password && <div className="error-message">{formErrors.password}</div>}
</Box>

<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField
    label="Numéro de téléphone"
    value={formData.phone}
    onKeyDown={handleKeyDown}
    onChange={(e) => {
     
       handlePhoneChange(e)
    
      

    }}
    InputProps={{ className: formErrors.phone ? 'error-text' : '' }}
  />
  {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
</Box>


                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ flex: 1, marginRight: '0.5rem'}} color='primary'  variant='contained'
           onClick={handleRegistration}
          >
            Valider
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{handleCloseModal()}}
          >
            Annuler
          </Button>

        </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          
        </Container>
      </Slide>
    </Modal>
  );
};

export default DemandeurForm;
