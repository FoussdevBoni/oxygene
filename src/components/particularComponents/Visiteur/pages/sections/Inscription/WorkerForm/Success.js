import { Box } from '@mui/material';
import React from 'react';

function Success(props) {
    return (
        <Box minHeight={window.innerHeight} textAlign={'center'} sx={{justifyContent:'center' ,justifyItems:'center'}}>
          <h1 style={{color: 'green'}}>
            Votre canditature a été envoyée avec succès. 

          </h1>
          Nous vous contacterons pour un entretien. 
          
        </Box>
    );
}

export default Success;