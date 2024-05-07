import { Box, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';

import DemandesList from './DemandesList';
import MyContext from '../../../../../Contextes/MyContext';


function Demandes({user}) {
    const [clicked , setClicked] = useState(true)
    const {myVariable , setMyVariable} = React.useContext(MyContext)
    
    const showDetails = (value)=>{
       setClicked(value)
    }
    return (
       <Box sx={{ width: '100%' , mt:'20px' }} className='bg-gray-200'>

         <Slide direction="right" timeout={500} in={true} mountOnEnter unmountOnExit>
     
         <div> 
             <DemandesList user={user} 
            />
           
         </div>
         </Slide>
           
        </Box>
    );
}

export default Demandes;