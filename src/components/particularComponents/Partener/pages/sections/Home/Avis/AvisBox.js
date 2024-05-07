import { Box } from '@mui/material';
import React from 'react';
    let drawerWidth = 340;

function AvisBox(props) {
    return (
         <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)`  } }}
         >

      </Box>
    );
}

export default AvisBox;