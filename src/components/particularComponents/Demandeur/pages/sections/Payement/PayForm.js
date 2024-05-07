import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Box, Typography } from '@mui/material';
import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from "kkiapay";
function PaymentForm({user , commande}) {

  const [paymentMode, setPaymentMode] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState();
  
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handleSubmit = () => {
   
     openKkiapayWidget({
      amount: 4000,
      api_key: "5a569400253211eea9c487d625b373bf",
      sandbox: true,
      email: "randomgail@gmail.com",
      phone: "97000000",
    });
    // Ajoutez ici la logique pour traiter le formulaire (envoi de données, appel à l'API, etc.)
  };
  useEffect(() => {
    addKkiapayListener('success',()=>{

    })
  }, []);
  return (
    <Box  sx={{minHeight: window.innerHeight}}>
       <br/><br/>
       <Typography paragraph>
          Vous êtes sur le point d'effectuer votre payement 
          via Kkiapay. Cliquer sur le bouton " <b>Continuer</b>" pour 
          ouvrir le formulaire de payement
       </Typography>
      <Button variant="contained" 
      onClick={()=>{
          handleSubmit()
      }}
      >Continuer</Button>
    </Box>
  );
}

export default PaymentForm;
