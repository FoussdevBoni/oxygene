import React, { useContext, useEffect, useState } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, Button, Rating, Breadcrumbs, Menu, Fab, ButtonBase } from '@mui/material';
import img6 from '../../../../../../assets/img/portfolio/portfolio-6.jpg';
import { db } from '../../../../../../Backend/Data/config';
import { onValue, ref } from 'firebase/database';
import MyContext from '../../../../../../Contextes/MyContext';
import { NavLink, useNavigate } from 'react-router-dom';
import ProductDetails from '../../../../../generalComponents/ProductDetails/ProductDetails';
import ProductsBox from './ProductsBox';

const ProductList = ({ user, company }) => {
  const [products, setProducts] = useState([]);
  const url = window.location.href;
  const path = new URL(url).pathname;
  const parts = path.split('/');
  const userId = parts[3];
  const { myVariable, setMyVariable } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const dataRef = ref(db, 'products/' + company.userId);

    onValue(dataRef, (snapshot) => {
      const productsData = snapshot.val();

      if (productsData) {
        const data = Object.entries(productsData).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setProducts(data);
      }
    });

    return () => {
      setMyVariable((prevState) => ({
        ...prevState,
        productSelected: null,
      }));
    };
  }, []);

  return (
    <Box>
      <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}
    >
      <Fab  variant="extended" size="medium" color="primary" aria-label="add"
       onClick={()=>{
                   navigate("/accounts/clients/"+userId+"/"+user.lastName+"/Faire-une-nouvelle-demande")

       }}
      >
         Donner un avis
      </Fab>
    </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {
            products.length !== 0 ? 
          <div role="presentation"
          style={{marginLeft: '5px'}}
          >
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink
          to={'/accounts/clients/'+userId+'/Mon-Dashboard'}
          >
            Retour à l'acceuil
          </NavLink>
          {
            company!==null &&(
            <Typography color="text.primary">
               {company.companyName}
            </Typography>
            )
          }
        </Breadcrumbs>
      </div>: null
            
        }
      </Box>
      <Grid container spacing={2} marginTop={3} marginLeft={4}>
        {myVariable.productSelected !== null && (
          <ProductDetails user={user} child={<ProductsBox user={user} />} />
        )}

        {products.length === 0 ? (
          <Typography variant="h6" sx={{ mt: 4, textAlign: 'center', p: 10 }}>
            Aucun produit n'est publié par  {company.companyName} .
          </Typography>
        ) : (
          products.map((product) => {
            if (products.length<3) {
              return(
                 <Grid item xs={12} sm={12} md={12} key={product.id}>
              <Card sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <CardMedia component="img" src={product.productImage} alt="Image du produit" sx={{ maxHeight: '200px' }} />
                <CardContent>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={() => {
                        setMyVariable((prevState) => ({
                          ...prevState,
                          productSelected: product,
                        }));
                      }}
                    >
                      Détails
                    </Button>
                  </Box>
                  <Typography variant="h6" sx={{ marginBottom: '1px' }}>
                    {product.productName}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '1px' }}>
                    Prix unitaire : {product.productPrice}€
                  </Typography>
                  <Typography variant="body1">Quantité disponible : {product.productQuantity}</Typography>
                </CardContent>
              </Card>
            </Grid>
              )
            }else
            return(
            
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <CardMedia component="img" src={product.productImage} alt="Image du produit" sx={{ maxHeight: '200px' }} />
                <CardContent>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={() => {
                        setMyVariable((prevState) => ({
                          ...prevState,
                          productSelected: product,
                        }));
                      }}
                    >
                      Détails
                    </Button>
                  </Box>
                  <Typography variant="h6" sx={{ marginBottom: '1px' }}>
                    {product.productName}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '1px' }}>
                    Prix unitaire : {product.productPrice}€
                  </Typography>
                  <Typography variant="body1">Quantité disponible : {product.productQuantity}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
          )
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
