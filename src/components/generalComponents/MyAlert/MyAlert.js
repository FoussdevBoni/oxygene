import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

function MyAlert({user , message , severity , val}) {
         const [open , setOpen ] = useState(val)
         useEffect(()=>{
            setOpen(val)
         },[])
      const handleClose = ()=>{
       setOpen(false)
        }
    return (
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
     {message}
  </Alert>
</Snackbar>
    );
}

export default MyAlert;