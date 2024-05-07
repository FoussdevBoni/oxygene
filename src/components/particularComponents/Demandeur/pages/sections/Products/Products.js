import React, { useContext, useState } from 'react';
import ProductList from './ProductsList';
import { Box, Slide } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MyContext from '../../../../../../Contextes/MyContext';
import ProductsBox from './ProductsBox';

function Products({user}) {
    const [isVisible , setIsVisible ]= useState(true)
      
     
    return (

        <Box>
        <Slide direction="right" timeout={500} in={isVisible} mountOnEnter     unmountOnExit>
                <Box 
                        component="main"
                     sx={{ flexGrow: 1, p: 3 }}
                >
                                <ProductList user={user}/>

                </Box>
          </Slide>

          
               
        </Box>
    );
}

export default Products;