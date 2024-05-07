import React, { useContext, useEffect, useState } from 'react';
import { Modal, TextField, Button, Container, Grid, Typography, Slide, Box } from '@mui/material';
import { commandProduct } from '../../../Backend/Actions/Set/commandeProduct';
import MyContext from '../../../Contextes/MyContext';
import { push, ref, set } from 'firebase/database';
import { db } from '../../../Backend/Data/config';
import { sendMessage } from '../../../Backend/Actions/Set/sendMessage';
import { sendNotifs } from '../../../Backend/Actions/Set/sendNotifs';
import LocationsSelectForm from '../ServicesDemands/LocationSelectForm';



const BuyProduct = ({ user  , selected }) => {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [productImage, setProductImage] = useState('');
    const  {myVariable , setMyVariable} = useContext(MyContext)
  const [location, setLocation]  = useState([])


    const handleLocationChange = (location) => {
    // Utilisez la valeur de 'location' ici dans ServicesSelectForm
    setLocation(location)
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const  acheter = (   product)=>{
   
    const dataToSend = {
        product: product,
        seller: product.productPoster , 
        client: user , 
        locality: location,
        quantity: productQuantity,
        details: productDescription,
        date: new Date().toISOString()
    }
const clientDataRef = ref(db , 'commandes/clients/'+user.userId)
const sellerDataRef = ref(db , 'commandes/fournisseurs/'+product.productPoster.userId)
  push(clientDataRef , dataToSend).then(
    (res)=>{
        const notif = {
          text: 'Vous avez une nouvelle commande',
         date: new Date().toISOString() ,     
        link : 'http://localhost:3000/accounts/parteners/'+
       product.productPoster.email.replace(/[^A-Za-z0-9]/g, '')+'/Nouvelles-commandes'
      }
        sendNotifs(user , product.productPoster , notif)
       set(ref(db, 'commandes/clients/'+user.userId+'/'+res.key+'/cmdKey'), res.key)
       set(ref(db, 'commandes/fournisseurs/'+product.productPoster.userId+'/'+res.key), dataToSend).then(
        ()=>{
             set(ref(db, 'commandes/fournisseurs/'+product.productPoster.userId+'/'+res.key+'/cmdKey'), res.key)


            
        }
       )





          setMyVariable(prevState => ({
                     ...prevState,
               openForm: false 
 }))

    }
  )
     
  }
  const handleClose = () => {
    setOpen(false);
    setMyVariable(prevState => ({
                     ...prevState,
               openForm: false 
 }))
  };


  useEffect(()=>{
        setOpen(true);
  },[])
  return (
    <Box >
      <Button variant="contained" color="primary" 
               style={{ margin: '0 auto' }}

      onClick={handleOpen}>
        Ouvrir le formulaire
      </Button>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Slide direction="down" in={open} timeout={500}>
          <Container  maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '2px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
  }} className='container'>
            <Typography variant="h5" align="center" gutterBottom>
              Remplir ce formulaire
            </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Nom du produit"
                    name="productName"
                    variant="outlined"
                    value={selected.productName}
                  
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Ajouter des détails"
                    name="productDescription"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={productDescription}
                    onChange={(e) => {
                      setProductDescription(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Prix du produit"
                    name="productPrice"
                    variant="outlined"
                    type="number"
                    value={selected.productPrice}
                   
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Quantité voulue"
                    name="productQuantity"
                    variant="outlined"
                    type="number"
                    value={productQuantity}
                    onChange={(e) => {
                      setProductQuantity(e.target.value);
                    }}
                  />
                </Grid>
                   <LocationsSelectForm location={handleLocationChange}/>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth 
                  onClick={
                      ()=> {acheter(selected)}               

                  }
                  >
                    Commander le produit
                  </Button>
                </Grid>
              </Grid>
          </Container>
        </Slide>
      </Modal>
    </Box>
  );
};

export default BuyProduct;
