import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DemandesPage from '../pages/client/demandes/Deamandes';
import ChatPage from '../pages/client/Chat/Chat';
import NewDemand from '../pages/client/NewDemand/NewDemand';
import Profile from '../pages/client/profile/Profile';
import MyContext from '../Contextes/MyContext';
import Settings from '../components/particularComponents/Demandeur/pages/sections/Settings/Settings';
import NewChat from '../components/generalComponents/Chat/NewChat';
import PaymentForm from '../components/particularComponents/Demandeur/pages/sections/Payement/PayForm';
import Avis from '../components/particularComponents/Demandeur/pages/sections/Avis/Avis';
import ProfilePage from '../components/particularComponents/Demandeur/pages/sections/Profile/ProfilePage';
import UpDateProfilePage from '../components/particularComponents/Demandeur/pages/sections/Profile/UpdateProfiilePage';
import { Box } from '@mui/material';
import DemandesRoutes from './DemandesRoutes';


function ClientsRoutes({demandeurRoutes , user}) {
    const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
     const {myVariable , setMyVariable} = useContext(MyContext)
     const connectedAS = localStorage.getItem('connectedAS')
     const navigate = useNavigate()
   useEffect(
    ()=>{
      if (user!==undefined&&connectedAS==='client') {
                   navigate("/accounts/clients/"+user.userId+"/"+user.lastName+"/Mes-demandes")

      }
    },[]
   )
  const components =   [
  <DemandesPage user={user}/> ,
   <NewDemand user={user}/>,
  <ChatPage user={user}/>,
  <Avis user={user}/> 
   ]
  return (
    <Box>
         <Routes>
    {
      demandeurRoutes.map((route , index)=>{
        return(
           <Route
                  path={"/accounts/clients/"+user.userId+"/"+user.lastName+"/"+route.label.replace(/[^A-Za-z0-9]/g, '-')}
           element={components[index]}
          >
          </Route>
        )
      })
    }
  
    <Route path={'/accounts/clients/'+userId+"/"+user.lastName+'/profile'} element={<ProfilePage user={user} />} >
      </Route>
      <Route path={'/accounts/clients/'+userId+"/"+user.lastName+'/Profile/modifier-mon-profile'} element={<UpDateProfilePage user={user} />} >
      </Route>
    <Route path={'/accounts/clients/'+userId+"/"+user.lastName+'/Mes-demandes/payer'} element={<PaymentForm user={user} />} >
      </Route> 

    
    <Route path={'/accounts/clients/'+userId+"/"+user.lastName+'/Nouvelle-Discussion'} element={<NewChat user={user} />} >
      </Route>    
     
   </Routes>
   <DemandesRoutes user={user} originPath={'/accounts/clients/'+userId+"/"+user.lastName+'/Mes-demandes'}/>
    </Box>
  );
}

export default ClientsRoutes;