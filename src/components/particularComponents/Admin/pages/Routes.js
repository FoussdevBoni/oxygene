import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminHome from './sections/Home/AdminHome';
import Demandes from './sections/DemandesServices/Demandes';
import Users from './sections/Users/Users';
import Discussions from './sections/Discussions/Discussions';
import Avis from './sections/Avis/Avis';
import AddServicesForm from './sections/AddService/AddServicesForm';
import AdminLogin from '../Login/Login';
  const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
      const connectedAS = localStorage.getItem('connectedAS')
       const userId =  parts[3]
       // Diviser la chaîne en segments en utilisant '/'
     const activeLabel = parts[4];
    
function AdminRoutes({adminRoutes , user}) {
  const navigate = useNavigate()
    useEffect(
    ()=>{
      if (user!==undefined&&connectedAS==='admin') {
                   navigate("/accounts/admin/"+user.userId+"/"+user.name+"/Dashboard")

      }
    },[]
   )
  const components = [
  <AdminHome user={user} />,
  <Demandes user={user} />,
  <Users user={user} />,
  <Discussions user={user} />,
  <Avis user={user} />,
  <AddServicesForm user={user} />, 
  
];
  return (
   <Routes>
    {
      adminRoutes.map((route, index)=>{
        return(
           <Route
                  path={"accounts/admin/"+user.userId+"/"+user.name+"/"+route.label.replace(/[^A-Za-z0-9]/g, '-')}
           element={components[index]}
          >
          </Route>
        )
      })
    }
   
   </Routes>
  );
}

export default AdminRoutes;