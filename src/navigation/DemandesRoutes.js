import { Box, Slide } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { Route, Routes } from 'react-router-dom';
import DemandesBoxPage from '../components/particularComponents/Demandeur/pages/sections/Demandes/DemandeBoxPage';
import { db } from '../Backend/Data/config';
import PaymentFormPage from '../components/particularComponents/Demandeur/pages/sections/Payement/PaymentFormPage';

function DemandesRoutes({user , originPath}) {
     const [demandes , setDemandes] = useState([])
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


  if (demandes.length > 0) {
      return (
       <Routes>
          {
            demandes.map((demande , index)=>{
                return (
                    <Route  path={originPath+'/'+demande.id} element={<DemandesBoxPage user={user} demande={demande}/>}>
                       
                    </Route>
                )
            })
          }

          {
            demandes.map((demande , index)=>{
                return (
                    <Route  path={originPath+'/'+demande.id+'/effectuer-le-payement'} element={<PaymentFormPage user={user} demande={demande}/>}>
                       
                    </Route>
                )
            })
          }
       </Routes>
    );
  }
}

export default DemandesRoutes;