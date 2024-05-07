import React, { useContext, useEffect, useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, Button, TextField, Container, Typography, Box, Autocomplete, Slide, Modal } from '@mui/material';
import ProductDetails from '../../../../../../generalComponents/ProductDetails/ProductDetails';
import { services } from '../../../../../../../data-center/data';
import LocationsSelectForm from '../../../../../../generalComponents/ServicesDemands/LocationSelectForm';
import { register } from '../../../../../../../Backend/Actions/Set/auth';
import { ref, set } from 'firebase/database';
import { db } from '../../../../../../../Backend/Data/config';
import MyContext from '../../../../../../../Contextes/MyContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [location, setLocation] = useState([]);
  const [openModal, setOpenModal] = useState();
  const { myVariable, setMyVariable } = useContext(MyContext);
 const navigate  = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    work: '',
    useeType: 'worker'
  });
  const [user, setUser] = useState();
 const handleCloseModal = () => {
    setOpenModal(false);
    setMyVariable((prevState) => ({
      ...prevState,
      hidden: false,
    }));
    navigate('/');
  };
  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4);
    // Logique de soumission du formulaire
    console.log('Formulaire soumis');
  };   
  const sendData = ()=>{
    const formDataWithLocation = {
    ...formData,
    location: location
  };
  register(formDataWithLocation, (userWithoutPassword, userData) => {
      set(ref(db, '/users/workers/' + userData.user.uid), userWithoutPassword).then(() => {
        set(ref(db, '/users/workers/' + userData.user.uid + '/userId'), userData.user.uid).then(() => {
          setUser(userData.user);
          setTimeout(() => {
            localStorage.setItem('connectedAS', 'worker');
          }, 1000);
        });
      });
    });

  }
  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep1 = () => (
    <Container maxWidth="sm" sx={{ marginTop: '10px', padding: '30px' }}>
      <Typography variant="h5" fontWeight="bold" mb={4}>Quels services voulez-vous fournir ?</Typography>
      <RadioGroup name="serviceType" value={serviceType} onChange={handleServiceTypeChange}>
        <FormControlLabel
          value="tache-domestique"
          control={<Radio color="primary" />}
          label="Je veux faire des tâches domestiques"
        />
        <FormControlLabel
          value="professionnel-sante"
          control={<Radio color="primary" />}
          label="Je suis un professionnel de santé"
        />
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={() => setStep(2)} sx={{ marginTop: '20px', marginRight: '10px' }}>
        Suivant
      </Button>
    </Container>
  );

  const renderStep2 = () => {
    let options = [];

    if (serviceType === 'tache-domestique') {
      options = services[0].services;
    } else if (serviceType === 'professionnel-sante') {
      options = services[1].services;
    }

    return (
      <Container maxWidth="sm" sx={{ marginTop: '10px', padding: '30px' }}>
        <Typography variant="h5" fontWeight="bold" mb={4}>Choisissez le service que vous souhaitez fournir :</Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                value={formData.work}
                onChange={(event, newValue) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    work: newValue
                  }));
                }}
                label="Choisissez une heure pour le travail"
              />
            )}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={() => setStep(1)} sx={{ marginTop: '20px', marginRight: '10px' }}>
          Précédent
        </Button>
        <Button variant="contained" color="primary" onClick={() => setStep(3)} sx={{ marginTop: '20px' }}>
          Suivant
        </Button>
      </Container>
    );
  };

 

  const RenderStep4 = () => {

    const handleLocationChange = (location) => {
      // Utilisez la valeur de 'location' ici dans ServicesSelectForm
      setLocation(location);
    };

    return (
       <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      disableBackdropClick
      disableEscapeKeyDown
    >
      <Slide direction="up" in={openModal}></Slide>
            <Container maxWidth="sm" sx={{ marginTop: '10px', padding: '30px' }}>
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Où habitez-vous ?
        </Typography>
        <LocationsSelectForm location={handleLocationChange} />
        <Button variant="contained" color="primary" onClick={handlePrevious} sx={{ marginRight: '10px' }}>
          Précédent
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => {
           sendData()
          }}
        >
          Soumettre
        </Button>
      </Container>
      </Modal>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
     
      case 3:
        return RenderStep4();
      default:
        return null;
    }
  };

  return (
    <div>
      {renderCurrentStep()}
    </div>
  );
};

const WorkerForm = () => {
   const { myVariable, setMyVariable } = useContext(MyContext);
 const [openModal, setOpenModal] = useState(true);
 const navigate  = useNavigate()
  const setContentData = () => {
    return null;
  };
   const handleCloseModal = () => {
    setOpenModal(false);
    setMyVariable((prevState) => ({
      ...prevState,
      hidden: false,
    }));
    navigate('/');
  };
useEffect(()=>{
  setOpenModal(true)
     setMyVariable(prevState => ({
                 ...prevState,
              hidden: true
               }));
})
  return (
     <Modal
      open={openModal}
      onClose={handleCloseModal}
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
    marginTop: '20px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
  }} className='container'
        >
                  <Form />

        </Container>
      </Slide>
  </Modal>
  );
};

export default WorkerForm;
