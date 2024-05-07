import React, { useEffect, useState } from 'react';
import { Modal, TextField, Button, Container, Grid, Typography, Slide, Box } from '@mui/material';
import { publishProduct } from '../../../../../../Backend/Actions/Set/publishProduct';
import { ref, set } from 'firebase/database';
import { db } from '../../../../../../Backend/Data/config';
import { productNbr } from '../../../../../../data-center/data';


const AddProduct = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [productImage, setProductImage] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      productPoster: user,
      productName: productName,
      productDescription: productDescription,
      productImage: productImage,
      productPrice: productPrice,
      productQuantity: productQuantity,
      pubDate: new Date(),
      
    };

    publishProduct(product, user.userId );
   
    set(ref(db, 'users/'+'parteners/'+user.userId+'/productsNbr'),
     productNbr(user.productsNbr)+1 )
    handleClose();
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
          <Container maxWidth="sm" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px' , marginTop: '50px' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Mettre un produit en ligne
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Nom du produit"
                    name="productName"
                    variant="outlined"
                    value={productName}
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Description du produit"
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
                    value={productPrice}
                    onChange={(e) => {
                      setProductPrice(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Quantité disponible"
                    name="productQuantity"
                    variant="outlined"
                    type="number"
                    value={productQuantity}
                    onChange={(e) => {
                      setProductQuantity(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Image du produit (URL)"
                    name="productImage"
                    variant="outlined"
                    value={productImage}
                    onChange={(e) => {
                      setProductImage(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Mettre en ligne
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Slide>
      </Modal>
    </Box>
  );
};

export default AddProduct;
