import { Box, Card, CardContent, Typography ,Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../../../../Backend/Data/config';
import AchatList from './AchatList';
import { Add } from '@material-ui/icons';
import CommandesList from './AchatList';

function Achat({user}) {
         const [commandes , setCommandes] = useState([])

 useEffect(()=>{
     const dataRef = ref(db, 'commandes/clients/'+user.userId);
        onValue(dataRef, (snapshot) => {
          const commandesData = snapshot.val();
          
          if (commandesData) {

            // Convertir les données de la base de données en tableau
            const data = Object.entries(commandesData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setCommandes(data)
            console.log(data)
          }
        });
},[])

    return (
      <Slide direction="right" in={true} timeout={500}>
        <Box>
           {
            commandes!==undefined ? 
               <CommandesList data={commandes} user={user}/>:
             null
          }
        </Box>
       </Slide>
    );
}

export default Achat;