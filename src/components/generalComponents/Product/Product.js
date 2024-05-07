import React from 'react';
import { Card, CardMedia, CardContent, Box, Button, Typography } from '@mui/material';

const Product = ({ product, setMyVariable }) => {
  return (
    <Card sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
      <CardMedia component="img" src={product.productImage} alt="Image du produit" sx={{ maxHeight: '200px' }} />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
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
  );
};

export default Product;
