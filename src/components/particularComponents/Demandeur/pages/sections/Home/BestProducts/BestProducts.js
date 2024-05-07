import { Box } from '@mui/material';
import React from 'react';
import ProductList from './BestProductsList';

function BestProducts({user}) {
    return (
        <Box>
            <ProductList user={user}/>
            
        </Box>
    );
}

export default BestProducts;