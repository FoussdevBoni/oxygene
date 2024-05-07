import { Box, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommandesList from './CommandesList';
import CommandesBox from './CommandesBox';
import MyContext from '../../../../../../Contextes/MyContext';

function Commandes({user}) {
    const [clicked , setClicked] = useState(true)
    const {myVariable , setMyVariable} = React.useContext(MyContext)
    
    const showDetails = (value)=>{
       setClicked(value)
    }
    return (
       <Box sx={{ width: '100%' , mt:'20px' }} className='bg-gray-200'>

         <Slide direction="right" timeout={500} in={ myVariable.selected===null} mountOnEnter unmountOnExit>
     
         <div> 
             <CommandesList user={user} 
            />
           
         </div>
         </Slide>
         <Slide direction="left" timeout={500} in={ myVariable.selected!==null} mountOnEnter unmountOnExit>
         <div>
            {
                myVariable.selected!==null ? 
                <CommandesBox user={user} />: null
            }
          </div>
         </Slide>
        </Box>
    );
}

export default Commandes;