import { Box, Button, Fab, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { PersonAdd } from '@mui/icons-material';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../../../Backend/Data/config';
import WorkerItem from '../../../../generalComponents/WorkerItem/WorkerItem';
import MySnipper from '../../../../generalComponents/MySnipper/MySnipper';


function Workers({adminId}) {
  const [drivers , setDrivers] = useState([])
    const navigate = useNavigate()
 useEffect(()=>{
     const dataRef = ref(db, 'users/workers');
        onValue(dataRef, (snapshot) => {
          const usersData = snapshot.val();
          
          if (usersData) {

            // Convertir les données de la base de données en tableau
            const data = Object.entries(usersData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setDrivers(data)
          }
        });
},[])
      const ActionButton = ({driver})=>{
    return (
         <Button
                fullWidth
                sx={{ backgroundColor: '#F0853F' , color: 'white' }} 
           onClick={()=>{
             navigate(`/admin/${adminId}/${driver.id}`)
           }}
              >
               Voir le profile
              </Button>
    )
  }
   if (drivers.length>0) {
     return (
    <Box flex={1} padding={2} marginTop={3}>
               <Fab variant="extended" size="medium"  sx={{
            position:'fixed' ,  bottom: '20px',  right: '20px'
              }} onClick={()=>{
                 navigate(`/admin/${adminId}/Ajouter un chauffeur`)
            }} >
          <PersonAdd sx={{ mr: 1 }} />
      Ajouter un prestataire
     </Fab>
            <Typography component={'h4'} variant='h5' fontWeight={'bold'} textAlign={'center'}>
              Les prestataires
            </Typography>
           <Grid spacing={2} container marginTop={5}>
           {
            drivers.map((driver)=>{
                return (
                   <Grid item xs={12} sm={6} md={4} key={driver.id}>
                     <WorkerItem driver={driver} actionButton={<ActionButton driver={driver}/>}/> 
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

export default Workers;