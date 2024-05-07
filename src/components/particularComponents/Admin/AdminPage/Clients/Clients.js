import { Box, Button, Fab, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { PersonAdd } from '@mui/icons-material';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../../../Backend/Data/config';
import UserItem from '../../../../generalComponents/UserItem/UserItem';
import MySnipper from '../../../../generalComponents/MySnipper/MySnipper';
function Clients(props) {
    
    const navigate = useNavigate()
    const [users , setUsers]=useState([])
 useEffect(()=>{
     const dataRef = ref(db, 'users/clients');
        onValue(dataRef, (snapshot) => {
          const usersData = snapshot.val();
          
          if (usersData) {

            // Convertir les données de la base de données en tableau
            const data = Object.entries(usersData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setUsers(data)
          }
        });
},[])
      const ActionButton = ({user})=>{
    return (
         <Button
                fullWidth
                color='primary'
                variant='contained'
           onClick={()=>{}}
              >
               Voir le profile
              </Button>
    )
  }
  if (users.length>0) {
      return (
        <Box flex={1} padding={2}>
            
            <Typography component={'h4'} variant='h5' fontWeight={'bold'} textAlign={'center'}>
              Les utilisateurs
            </Typography>
           <Grid spacing={2} container marginTop={5}>
           {
            users.map((user)=>{
                return (
                   <Grid item xs={12} sm={6} md={4} key={user.id}>
                     <UserItem user={user} actionButton={<ActionButton user={user}/>}/> 
                    </Grid>
                )
            })
           }
            </Grid> 
        </Box>
    );
  }else{
    return(
        <MySnipper />
    )
  }
}

export default Clients;