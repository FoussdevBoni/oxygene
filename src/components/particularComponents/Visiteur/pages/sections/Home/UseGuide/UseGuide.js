import { UserCircleIcon } from '@heroicons/react/24/outline';
import { AccountBox, AddCircle, Person, PersonAdd } from '@material-ui/icons';
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { isDesktop, isMobile, isTablet } from '../../../../../../../data-center/data';

function UseGuide(props) {
  return (
 <Grid spacing={2} container padding={5}>
     
   
        
        <Grid item xs={12} sm ={12} md={6} lg={4}>

  <Card sx={{minHeight: 200}}>
        <CardContent>
       
          <div className='flex'>
               <PersonAdd />
               <div className='ml-5 font-bold'>
                          Créer un compte

               </div>
          </div>
           <div className='p-2 text-gray opacity-75'>
            Si vous n'avez pas de compte vous devrez créer un compte en remplissant le formulaire d'inscription. 
             <Button color="primary" style={{textTransform:'none'}}> <NavLink to={'/inscription'}>S'inscrire</NavLink></Button>
           </div>

        </CardContent>
        
      </Card>
        </Grid>

      <Grid item xs={12} sm ={12} md={6} lg={4}>

  <Card sx={{minHeight: 200}}>
        <CardContent>
       
          <div className='flex'>
               <AccountBox  />
               <div className='ml-5 font-bold'>
                      Se  connecter

               </div>
          </div>
           <div className='p-2 text-gray opacity-75'>
           Pour se connecter  vous devrez avoir préalablement un compte sur Oxygene
             <Button color="primary" style={{textTransform:'none'}}> <NavLink to={'/connexion/client'}>S'identifier</NavLink></Button>
           </div>

        </CardContent>
        
      </Card>
      </Grid>

        <Grid item xs={12} sm ={12} md={6} lg={4}>
  <Card sx={{minHeight: 200}}>
        <CardContent>
       
          <div className='flex'>
               <AddCircle  />
               <div className='ml-5 font-bold'>
                      Demander  un service

               </div>
          </div>
           <div className='p-2 text-gray opacity-75'>
           Pour demander un service connecter vous à votre compte. A la page d'acceuil , vous cliquer sur le bouton "Faire une nouvelle demande"
             <Button color="primary" style={{textTransform:'none'}}> <NavLink to={'/connexion'}>Suivre en vidéo</NavLink></Button>
           </div>

        </CardContent>
        
      </Card>        
      </Grid>
      </Grid>
  );
}

export default UseGuide;