import React, { useContext, useEffect, useState } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, Button, Rating } from '@mui/material';
import img6 from '../../../../../../assets/img/portfolio/portfolio-6.jpg';
import { db } from '../../../../../../Backend/Data/config';
import { onValue, ref } from 'firebase/database';
import MyContext from '../../../../../../Contextes/MyContext';
import { useNavigate } from 'react-router-dom';

const ProductList = ({user}) => {
       const [products , setProducts] = useState([])
      const url = window.location.href
       const path = new URL(url).pathname;
      const parts = path.split('/'); // Diviser la chaîne en segments en utilisant '/'
     const userId = parts[3];
       const { myVariable , setMyVariable }= useContext(MyContext)
       const navigate = useNavigate()
useEffect(()=>{
     const dataRef = ref(db, 'products/'+user.userId);
       
       
        onValue(dataRef, (snapshot) => {
          const productsData = snapshot.val();
          
          if (productsData) {

            // Convertir les données de la base de données en tableau
            const data = Object.entries(productsData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setProducts(data)
          }
        });
},[])
  return (
    <Box>
         <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ ml: 2 }}>
          Nos produits en ligne
        </Typography>
      </Box>
      <Grid container spacing={2} marginTop={3}>
       {
        products.map((product)=>{
            return(
                 <Grid item xs={12} sm={6} md={4}>
          <Card sx={{borderTopLeftRadius: 10 , borderTopRightRadius:10}}>
            <CardMedia
              component="img"
              src={product.productImage}
              alt="Image du produit 2"
              sx={{maxHeight: '200px' }}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <Button variant="contained" size="small" color='primary'
                onClick={
                    ()=>{
                 navigate('/accounts/parteners/'+userId+
                 '/Nos-produits-en-ligne/'+product.productName)
                setMyVariable((prevState) => ({
                ...prevState,
                productSelected: product,
              }))
                    }
                }>Détails</Button>
              </Box>
              <Typography variant="h6" sx={{ marginBottom: '1px' }}>
                {product.productName}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1px' }}>
                Prix unitaire : {product.productPrice}€
              </Typography>
              <Typography variant="body1" sx={{  }}>Quantité disponible : {product.productQuantity}</Typography>
            </CardContent>
          </Card>
        </Grid>
            )
        })
       }
  
      </Grid>
    </Box>
  );
}

export default ProductList;
