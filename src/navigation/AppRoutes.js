import { Box, Toolbar } from '@mui/material';
import React from 'react';
import DemandeurRoutes from '../components/particularComponents/Demandeur/pages/Routes';
import PartenerRoutes from '../components/particularComponents/Partener/pages/Routes';
import AdminRoutes from '../components/particularComponents/Admin/pages/Routes';
import WorkerRoutes from '../components/particularComponents/Worker/pages/Routes';
import { demandersItems } from '../components/particularComponents/Demandeur/itemsMenu';
import { partenersItems } from '../components/particularComponents/Partener/itemsMenu';
import { adminItems } from '../components/particularComponents/Admin/Admin';
import { workerItems } from '../components/particularComponents/Worker/itemsMenu';




function AppRoutes({user}) {
const demandeurRoutes = demandersItems
const partenerRoutes = partenersItems
const adminRoutes = adminItems 
const workerRoutes = workerItems
   const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
  
    return (
         <Box
        component="main"
       
         >
        <Toolbar/>
          <DemandeurRoutes demandeurRoutes={demandeurRoutes} user={user}/>
          <PartenerRoutes partenerRoutes={partenerRoutes} user={user}/>
          <AdminRoutes  adminRoutes={adminRoutes} user={user}/>
          <WorkerRoutes workerRoutes={workerRoutes} user={user}/>
      </Box>
    );
}
export const  clientRoutes = ()=>{
  
}
export default AppRoutes;



