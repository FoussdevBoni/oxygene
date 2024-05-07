import React, { useEffect, useState } from 'react';
import Chat from '../../../../../generalComponents/Chat/Chat';
import { Box , Container, Modal, Slide} from '@mui/material';

function Discussions({user}) {
    const [open , setOpen] = useState(true)
   const  handleClose=()=>{
    setOpen(false)
   }
   useEffect(()=>{
    setOpen(true)

    return ()=>{
        setOpen(false)
    }
   },[])


    return (


        <Box>
            <Chat user={user}/>
        </Box>
   
    );
}

export default Discussions;