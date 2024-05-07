import React, { useContext, useEffect } from "react";

import Statistics from "./Statistics/Statistics";
import { Box } from "@mui/material";
import { partener_data } from "../../data/d1";
import Separator from "../../../../../generalComponents/Elements/Separator";
const style = {
    fontSize:'25px'
}
export function AdminHome({user}) {

    useEffect(()=>{
    }, [])
  return (
    <Box>
        <h3 className="ml-10 mt-5">Bienvenu sur votre tableau de bord</h3> 
      <Statistics data={partener_data}/>

  
     <Separator title={'Avis des clients'} style={style}></Separator>
   

     {/*'Les derniers commentaires de client' */}


     {/*'Vos activités récentes' */}


       <br></br> <br></br>
     <Separator title={'Activités récentes'} style={style}></Separator>
    </Box>
  );
}



export default AdminHome;