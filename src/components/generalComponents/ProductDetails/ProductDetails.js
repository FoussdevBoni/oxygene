import React, { useContext, useEffect, useState } from 'react';
import { Modal, TextField, Button, Container, Grid, Typography, Slide, Box } from '@mui/material';
import { push, ref, set } from 'firebase/database';
import MyContext from '../../../Contextes/MyContext';
import { db } from '../../../Backend/Data/config';
import { sendNotifs } from '../../../Backend/Actions/Set/sendNotifs';


const ProductDetails = ({ user , child , setContentData  }) => {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [productImage, setProductImage] = useState('');
    const  {myVariable , setMyVariable} = useContext(MyContext)

  const handleOpen = () => {
    setOpen(true);
  };
  const  acheter = (   product)=>{
   
    const dataToSend = {
        product: product,
        seller: product.productPoster , 
        client: user , 
        locality: '',
        quantity: productQuantity,
        details: productDescription,
        date: new Date().toISOString()
    }
const clientDataRef = ref(db , 'commandes/clients/'+user.userId)
const sellerDataRef = ref(db , 'commandes/fournisseurs'+product.productPoster.userId)
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
    }
  )
    push(sellerDataRef , dataToSend).then(
    (res)=>{
        
       set(ref(db, 'commandes/fournisseurs/'+product.productPoster.userId+'/'+res.key+'/cmdKey'), res.key)
    }
  )   
  }
  const handleClose = () => {
    setOpen(false);
     setContentData()
  };


  useEffect(()=>{
        setOpen(true);
  },[])
  return (
    <Box >
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Slide direction="down" in={open} timeout={500}>
          <Container  maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '2px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
    width:'1020px'
  }} className='container'>
           {child}
          </Container>
        </Slide>
      </Modal>
    </Box>
  );
};

export default ProductDetails;
