import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import MyContext from '../../../../Contextes/MyContext';
import { auth } from '../../../../Backend/Data/config';
import CenteredContentPage from '../../../generalComponents/Container/MyContainer';


function Register(props) {
    const navigate = useNavigate()
    const [email , setEmail] = useState('')
      const [password , setPassWord] = useState('')
      const [open , setOpen ] = useState(false)
      const [error , setError] = useState(false)
      const {myVariable , setMyVariable }= useContext(MyContext)

const handleClose = ()=>{
  setOpen(false)
}
    const register = ()=>{
      if(email==='oxygenebenin@gmail.com'){
         createUserWithEmailAndPassword(auth , email , password).then((user)=>{
         navigate(`/admin-login`)
      }).catch((err)=>{
        navigate(``)
        console.log(err)
        setError(true)
        setOpen(true)
      })
      }else{
         navigate(`sign-in`)

      }
    }
 
  useEffect(()=>{
          setMyVariable((prevState) => ({
      ...prevState,
      hidden: true,
    }));

    return ()=>{
             setMyVariable((prevState) => ({
      ...prevState,
      hidden: false,
    }));
    }
    },[])
    return (
        <Box>
            <Typography variant='div' component={'h1'} sx={{textAlign:'center'}}>
                S'inscrire en tant qu'administrateur
            </Typography>
            <br /><br/>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="Adresse email" variant="outlined" 
           type='email'
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           value={email}
           />
           </Box>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="Votre mot de passe" variant="outlined" 
           value={password}
           onChange={(e)=>{setPassWord(e.target.value)}}
           type='password'
           />
           </Box> 
        

             <br /><br/>
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color='primary' variant='contained' sx={{ flex: 1, marginRight: '0.5rem'}} 
           onClick={()=>{
            register()
           }}
          >
            S'inscrire
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }}  style={{backgroundColor: 'hsl(353, 100%, 78%)'}} variant='contained'
            onClick={()=>{navigate('/')}}
          >
            Annuler
          </Button>

        </Box>
        <Typography variant="body2" sx={{display:'flex'}} mt={4}>
          Vous avez  un compte administrateur ?
            <NavLink
             
              to="/admin-login"
              underline="hover"
              sx={{ color: 'indigo.600', ':hover': { color: 'indigo.500' } , ml:2}}
             
            >
            Connectez-vous 
            </NavLink>
          </Typography>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
    Connexion échouée. Veillez réessayer
  </Alert>
</Snackbar>
           </Box>
    );
}
const AdminRegister = ()=>{
   return(
         <Box>
            <CenteredContentPage content={<Register />}/>
        </Box>
       )
}
export default AdminRegister;