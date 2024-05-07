import { Box, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyContext from '../../../../../../Contextes/MyContext';
import VentesList from './VentesList';
import VentesBox from './VentesBox';

function Commandes({user}) {
    const [clicked , setClicked] = useState(true)
    const {myVariable , setMyVariable} = React.useContext(MyContext)
    
    const showDetails = (value)=>{
       setClicked(value)
    }
    return (
       <Box sx={{ width: '100%' , mt:'20px' }}>

         <Slide direction="right" timeout={500} in={ myVariable.selected===null} mountOnEnter unmountOnExit>
     
         <div> 
             <VentesList user={user} 
            />
           
         </div>
         </Slide>
         <Slide direction="left" timeout={500} in={ myVariable.selected!==null} mountOnEnter unmountOnExit>
         <div>
            {
                myVariable.selected!==null ? 
                <VentesBox user={user} />: null
            }
          </div>
         </Slide>
        </Box>
    );
}

export default Commandes;