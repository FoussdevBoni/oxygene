import { Box, Slide } from '@mui/material';
import React from 'react';

function MySlide({content , direction}) {
    return (
       <Slide in={true} direction={direction}timeout={500}>
           <Box>
            {content}
            </Box> 
        </Slide>
    );
}

export default MySlide;