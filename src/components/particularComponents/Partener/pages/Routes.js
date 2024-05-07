import React, { useContext, useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import PartenerHome from './sections/Home/Home';
import Commandes from './sections/Commandes/Commandes';
import Products from './sections/Products/Products';
import Discussions from './sections/Discussions/Discussions';
import Avis from './sections/Avis/Avis';
import AddProduct from './sections/AddProduct/AddProduct';
import Settings from './sections/Settings/Settings';
import Ventes from './sections/Ventes/Ventes';
import Clients from './sections/Clients/Clients';
import ProductsBox from './sections/Products/ProductsBox';
import MyContext from '../../../../Contextes/MyContext';
import ProfilePage from './sections/Profile/Profile';
import { onValue, ref, set } from 'firebase/database';
import { productNbr } from '../../../../data-center/data';
import { db } from '../../../../Backend/Data/config';
function PartenerRoutes({partenerRoutes , user}) {
const { myVariable , setMyVariable }= useContext(MyContext)
  const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
      const connectedAS = localStorage.getItem('connectedAS')
       const userId =  parts[3]
       // Diviser la chaîne en segments en utilisant '/'
     const activeLabel = parts[5];
     const navigate = useNavigate()
   useEffect(
    ()=>{
      if (user!==undefined&&connectedAS==='partener') {
                   navigate("/accounts/parteners/"+user.userId+"/"+user.companyName+"/Mon-Dashboard")
    
      }
       
     
    },[]
   )
const components = [
  <PartenerHome user={user} />,
  <Commandes user={user} />,
  <Products user={user} />,
  <Discussions user={user} />,
  <Avis user={user} />,
  <AddProduct user={user} />,
  <Settings user={user} />,
  <Ventes user={user} />,
  <Clients user={user} />
];

 if (user!==undefined&&connectedAS==='partener') {
   return (
   <Routes>
    {
      partenerRoutes.map((route , index)=>{
        return(
           <Route
                  path={"/accounts/parteners/"+user.userId+"/"+user.companyName+"/"+route.label.replace(/[^A-Za-z0-9]/g, '-')}
           element={components[index]}
          >
          </Route>
        )
      })
    }
      {
                    myVariable.selected!==null &&(
                   <Route path={`/accounts/parteners/${user.userId}/${user.companyName}/${activeLabel}/:selected`} element={<ProductsBox user={user}/>} />

                    )
                  }

      <Route path={'/accounts/parteners/'+userId+"/"+user.companyName+'/profile'} element={<ProfilePage user={user} />} >
      </Route>    
   </Routes>
  );
 }
}

export default PartenerRoutes;