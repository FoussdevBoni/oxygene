import React, { useContext, useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Stack,
  Box,
  Modal,
  Slide,
} from '@mui/material';
import { ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../../../../../Contextes/MyContext';
import { db } from '../../../../../../../Backend/Data/config';
import { register } from '../../../../../../../Backend/Actions/Set/auth';
import { logo } from '../../../../../../../data-center/data';
const PartenerForm = () => {
  // États des champs de formulaire
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [supplierCategory, setSupplierCategory] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [country , setCountry] = useState('')
  const [dep , setDep] = useState('')
  const [city , setCity] = useState('');
  const [hours , setHours] = useState('')
  // État pour suivre l'index du groupe actuel
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  // Groupe de champs de formulaire
  const formGroups = [
    [
      { label: "Nom de votre établissement", value: companyName, setValue: setCompanyName , placeholder: 'Pharmacie Campus' , errText: 'Ce champ est obligatoire'},
      { label: "Précisez vos horaires d'activités", value: hours, setValue: setHours , placeholder: "24h/24 et 7jours/7" , type: 'multiline',errText: 'Ce champ est obligatoire' },
    ],
     [
      { label: "Votre pays", value: country, setValue: setCountry , type: 'text' , placeholder:'Bénin' ,errText: 'Ce champ est obligatoire'},
      { label: "Votre département ou région", value: dep, setValue: setDep , placeholder:'Borgou'  , type: 'text',errText: 'Ce champ est obligatoire'},
    ],

     [
      { label: "Ville  de l'établissement", value: city, setValue: setCity , placeholder:'Parakou' , type: 'text' ,errText: 'Ce champ est obligatoire'},
     { label: "L'adresse de l'établisssement", value: companyAddress, setValue: setCompanyAddress , placeholder:'Rue 5 Qartier Zongo' ,errText: 'Ce champ est obligatoire' },
    ],
 [
      { label: 'Numéro de téléphone', value: phoneNumber, setValue: setPhoneNumber , placeholder: '+229 67 10 71 13' , type:'phone' ,errText: 'Ce champ est obligatoire'},
      { label: 'Adresse e-mail professionnel', value: email, setValue: setEmail , type: 'email' , placeholder:'pharmaciecampus@gmail.com' ,errText: 'Ce champ est obligatoire'},
    ],
     [
      { label: 'Créer un mot de passe', value: password, setValue: setPassword , type: 'password' ,errText: 'Ce champ est obligatoire'},
      { label: 'Catégorie de fournisseur', value: supplierCategory, setValue: setSupplierCategory , placeholder:'Santé' , type:'text' ,errText: 'Ce champ est obligatoire' },
    ],
      
    [
      { label: 'Description de l\'établissement', value: companyDescription, setValue: setCompanyDescription  ,type: 'multiline' ,errText: 'Ce champ est obligatoire'},
      { label: 'Conditions d\'utilisation', value: documents, setValue: setDocuments , type: 'file' ,errText: 'Ce champ est obligatoire'},
    ],
    // Ajoutez ici les autres groupes de champs
    // [...],
  ];

  // Fonction pour gérer le clic sur le bouton "Suivant"
  const handleNext = () => {
    if (currentGroupIndex < formGroups.length - 1) {
      setCurrentGroupIndex(currentGroupIndex + 1);
    }
  };

  // Fonction pour gérer le clic sur le bouton "Précédent"
  const handlePrevious = () => {
    if (currentGroupIndex > 0) {
      setCurrentGroupIndex(currentGroupIndex - 1);
    }
  };
 const navigate = useNavigate()


 const {myVariable , setMyVariable} = useContext(MyContext)
  // Fonction de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Effectuer les actions appropriées (envoyer les données au serveur, etc.)
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
      userType: 'partener'
    };

   
    register(formData , (userWithoutPassword ,  userData)=>{
          set(ref(db , '/users/parteners/'+userData.user.uid), userWithoutPassword).then(
         (data)=>{
             set(ref(db , '/users/parteners/'+userData.user.uid+'/userId'), userData.user.uid ).then(
                (response)=>{
                 navigate('/accounts/parteners/'+userWithoutPassword.email.replace(/[^A-Za-z0-9]/g, ''))
                  setMyVariable(prevState => ({
                 ...prevState,
                 connectedAS: 'partener'

              }))

      localStorage.setItem('connectedAS', 'partener')
          }
        )
      }

     )

    });
    // Réinitialiser les champs du formulaire
    setCompanyName('');
    setCompanyAddress('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setSupplierCategory('');
    setCompanyDescription('');
    setTermsAccepted(false);
    setDocuments([]);
  };

  // Récupérer le groupe de champs actuel
  const currentFormGroup = formGroups[currentGroupIndex];

  // Créer des animmations  Slide
const [openModal , setOpenModal] = useState(true)
 const handleCloseModal = ()=>{
   setOpenModal(false)
   navigate('/connexion/partener')
      setMyVariable(prevState => ({
                 ...prevState,
              hidden: true
               }));
 }
  useEffect(()=>{
    setOpenModal(true)
   setMyVariable(prevState => ({
                 ...prevState,
              hidden: true
               }));
      return ()=>{
    setOpenModal(false)
       setMyVariable(prevState => ({
                 ...prevState,
              hidden: true
     }));
  }
  },[])


  
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
    <Container maxWidth="sm"
      style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '2px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
  }} className='container'
    
     >
         <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
      <form onSubmit={handleSubmit}>
        <Card style={{padding:'5px'}} className='py-100'>
          <CardContent>
               <div className='font-bold text-center text-3xl py-2 flex'style={{display: 'flex', justifyContent: 'center' , alignItems:'center'}} >
              <img src={logo} alt='' style={{width:'180px'}}/>  
              </div> <br></br>
                <div className=' text-center text-2xl py-6'>
                Créer un compte pour votre établissement
              </div>

            <Stack spacing={2}>
              {currentFormGroup.map((field, index) => (
                <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '100%' },
  }}
  noValidate
  autoComplete="off"
>
 <TextField
                  key={index}
                  label={field.label}
                  placeholder= {'Ex: '+field.placeholder}
                  type={field.type || 'text'}
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  fullWidth
                  multiline = {field.type==='multiline'}
                  required
    />

    {
      field.value==='' ? <Typography style={{color: 'red'}}>
        {field.errText}
      </Typography>:null
    }

</Box>
               
              ))}
            </Stack>
          </CardContent>
          <CardActions>
            {currentGroupIndex > 0 && (
              <Button onClick={handlePrevious}>Précédent</Button>
            )}
            {currentGroupIndex < formGroups.length - 1 && (
              <Button onClick={handleNext} variant="contained" color="primary">
                Suivant
              </Button>
            )}
            {currentGroupIndex === formGroups.length - 1 && (
              <Button type="submit" variant="contained" color="primary">
                S'inscrire
              </Button>
            )}
             <Button onClick={handleCloseModal} variant="contained" 
              style={{backgroundColor: 'hsl(353, 100%, 78%)'}}
             color="primary">
              Annuler 
              </Button>
          </CardActions>
        </Card>
      </form>
      </Box>
    </Container>
    </Slide>
    </Modal>

  );
};

export default PartenerForm;
