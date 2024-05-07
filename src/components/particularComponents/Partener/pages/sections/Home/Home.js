import React, { useContext, useEffect, useState } from "react";

import Statistics from "./Statistics/Statistics";
import { Box } from "@mui/material";
import { partener_data } from "../../../../Admin/pages/data/d1";
import Separator from "../../../../../generalComponents/Elements/Separator";
import { db } from "../../../../../../Backend/Data/config";
import { dataSize } from "../../../../../../Backend/Actions/Get/getData";
import { ref } from "firebase/database";
const style = {
    fontSize:'25px'
}


export function PartenerHome({user}) {
  
const [data, setData] = useState({
  commandeNbr: 0 , 
  clientNbr: 0 , 
  avisNbr: 0 , 
  publishedNbr: 0, 
  saleNbr: 0, 
})
const [ statistics  , setStatistics] = useState([])
  useEffect(() => {
  const commandeRef = ref(db, 'commandes/fournisseurs/' + user.userId);
  dataSize(commandeRef).then((size) => {
    setData((prevState) => ({
      ...prevState,
      commandeNbr: size
    }));
  });

  const productRef = ref(db, 'products/' + user.userId);
  dataSize(productRef).then((size) => {
    setData((prevState) => ({
      ...prevState,
      publishedNbr: size
    }));
  });
  
  const clientsRef = ref(db, 'users/parteners/' + user.userId+'/visiteurs');
  dataSize(clientsRef).then((size) => {
    setData((prevState) => ({
      ...prevState,
      clientNbr: size
    }));
  });
}, [data.commandeNbr, data.publishedNbr]); // Utilisez les dépendances appropriées

useEffect(() => {
  setStatistics([
    {
      activity: 'Nouvelles commandes',
      number: data.commandeNbr,
      icon: 'cart',
      color: 'blue'
    },
    {
      activity: 'Clients',
      number: data.clientNbr,
      icon: 'people',
      color: 'green'
    },
    {
      activity: 'Avis',
      number: data.avisNbr,
      icon: 'star',
      color: 'orange'
    },
    {
      activity: 'Produits publiés',
      number: data.publishedNbr,
      icon: 'walk',
      color: 'green'
    },
    {
      activity: 'Produits vendus',
      number: data.saleNbr,
      icon: 'store',
      color: 'orangered'
    }
  ]);
}, [data.commandeNbr, data.publishedNbr]);
  return (
    <Box>
        <h3 className="ml-10 mt-5">Bienvenu sur votre tableau de bord</h3> 
      <Statistics data={statistics}/>

  
     <Separator title={'Avis des clients'} style={style}></Separator>
   

     {/*'Les derniers commentaires de client' */}


     {/*'Vos activités récentes' */}


       <br></br> <br></br>
     <Separator title={'Activités récentes'} style={style}></Separator>
    </Box>
  );
}



export default PartenerHome;