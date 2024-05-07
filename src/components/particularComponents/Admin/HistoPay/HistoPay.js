import { Box, Grid } from '@mui/material';
import { onValue } from 'firebase/database';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PayementItem from '../../../generalComponents/PayementItem';

function HistoPay({dataRef , user}) {
         const [payments, setPayements] = useState([

  ]);
 useEffect(()=>{
     
        onValue(dataRef, (snapshot) => {
          const payementsData = snapshot.val();
          
          if (payementsData) {

            // Convertir les données de la base de données en tableau
            const data = Object.entries(payementsData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setPayements(data)
          }
        });
},[])
 const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userType = parts[1];
    return (
        <Box>
    <Grid container spacing={2} marginTop={10} padding={2}>
        
      {payments.map((payement, index) =>{
        return(
             
        <Grid item xs={12} sm={6} md={4} key={index}>
             {
                userType!=='admin' ?  <Link to={'/capture-payement/'+payement.id}>
              <PayementItem payement={payement} index={index}/>
             </Link>:  <Link to={'/admin/capture-payement/'+payement.id}>
                <PayementItem payement={payement} index={index}/>
             </Link>
             }
        </Grid>
      
        )
      })}
    </Grid>
    </Box>
    );
}

export default HistoPay;