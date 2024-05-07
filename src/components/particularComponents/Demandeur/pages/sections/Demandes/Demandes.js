import { Box, Slide } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import DemandesList from './DemandesList';
import { onValue, ref } from 'firebase/database';
import MyContext from '../../../../../../Contextes/MyContext';
import DemandesBox from './DemandesBox';
import { db } from '../../../../../../Backend/Data/config';

function Demandes({user}) {
     const [demandes , setDemandes] = useState([])
    const {myVariable , setMyVariable }= useContext(MyContext)
 useEffect(()=>{
     const dataRef = ref(db, 'demandes/'+user.userId);
        onValue(dataRef, (snapshot) => {
          const demandesData = snapshot.val();
          
          if (demandesData) {

            // Convertir les données de la base de données en tableau
            const data = Object.entries(demandesData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setDemandes(data)
          }
        });
},[])


    return (
       <Slide direction="right" in={true} timeout={500}>
        <Box>
           {
            demandes!==undefined ?
              <Box>
                {
                  myVariable.demandeSelected===null&& <DemandesList data={demandes} user={user}/>
                }
              </Box>:
              <div>
                <h1>Vous n'avez aucune demande</h1>
              </div>
           }
              {
            myVariable.demandeSelected!==null &&
               <DemandesBox  user={user}/>
            
           }
        </Box>
    </Slide>
    );
}

export default Demandes;