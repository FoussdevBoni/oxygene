import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
 const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
function ActionsBtn({user}) {
  const [openSearchPage , setOpenSearchPage ]= useState(false)
  const navigate = useNavigate()
  return (
    <Box style={{ cursor: 'pointer' }}>
     <List>
        <ListItem>
            <Button color='primary' variant='contained'
             onClick={
              ()=>{navigate('/accounts/clients/'+user.userId+'/'+user.lastName+'/Faire-une-nouvelle-demande')}
             }
            >
                  <Add />
                  Faire une demande de service
            </Button>
        </ListItem>
     </List>

       


    </Box>
  );
}

export default ActionsBtn;
