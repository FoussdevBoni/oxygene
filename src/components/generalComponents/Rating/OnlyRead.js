import { Star } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { ref, set } from 'firebase/database';
import React, { useState } from 'react';

function RatingNoEdit({driver , user}) {

    return (
      <Box>
     
           <Box>
             <IconButton
            >
               <Star className={driver.note.rating.star1}/>
            </IconButton>
            <IconButton 
            >
               <Star className={driver.note.rating.star2}/>

            </IconButton>
            <IconButton 
            >
               <Star className={driver.note.rating.star3}/>

            </IconButton>

            <IconButton 
            >
               <Star className={driver.note.rating.star4}/>

            </IconButton>
            <IconButton 
            >
               <Star className={driver.note.rating.star5}/>
            </IconButton>
        </Box>
        
      </Box>
    );
}

export default RatingNoEdit;