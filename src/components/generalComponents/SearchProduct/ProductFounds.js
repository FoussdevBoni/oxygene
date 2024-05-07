import React, { useContext, useEffect, useState } from 'react';
import { Typography, Box, Grid, Breadcrumbs } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import { NavLink } from 'react-router-dom';
import Product from '../Product/Product';
import MyContext from '../../../Contextes/MyContext';
import { db } from '../../../Backend/Data/config';

const ProductList = ({ user, wordKey }) => {
  const [products, setProducts] = useState([]);
  const { myVariable, setMyVariable } = useContext(MyContext);

  useEffect(() => {
    const dataRef = ref(db, 'products/all');

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

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(wordKey.toLowerCase())
  );

  return (
    <Box>
      <Grid container spacing={2} marginTop={3} marginLeft={4}>
      

        {filteredProducts.length === 0 ? (
          <Typography variant="h6" sx={{ mt: 4, textAlign: 'center', p: 10 }}>
            Aucun produit correspondant n'a été trouvé.
          </Typography>
        ) : (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Product product={product} setMyVariable={setMyVariable} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
