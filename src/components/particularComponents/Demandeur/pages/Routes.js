import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DemandeurHome from './sections/Home/DemandeurHome';
import Demandes from './sections/Demandes/Demandes';
import Discussions from './sections/Discussions/Discussions';
import Avis from './sections/Avis/Avis';
import DemandForm from './sections/NewDemande/DemandForm';
import Settings from './sections/Settings/Settings';
import Achat from './sections/Achats/Achat';
import ProductList from './sections/Products/ProductsList';
import MyContext from '../../../../Contextes/MyContext';
import ProfilePage from './sections/Profile/Profile';
import SearchPage from '../../../generalComponents/SearchProduct/SearchProduct';


function DemandeurRoutes({demandeurRoutes , user}) {
    const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
     const {myVariable , setMyVariable} = useContext(MyContext)
     const connectedAS = localStorage.getItem('connectedAS')

 
       // Diviser la chaîne en segments en utilisant '/'
     const activeLabel = parts[4];
     const navigate = useNavigate()
   useEffect(
    ()=>{
      if (user!==undefined&&connectedAS==='client') {
                   navigate("/accounts/clients/"+user.userId+"/"+user.lastName+"/Mon-Dashboard")

      }
    },[]
   )
  const components =   [
  <DemandeurHome user={user}/> ,
  <Demandes user={user}/> ,
  <Achat user={user}/>,
  <Discussions user={user}/>,
   <DemandForm user={user}/>,
  <Avis user={user}/> 
   ]
  return (
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
   {
    myVariable.companySelected!==null && (
       <Route  path={"/accounts/clients/"+userId+"/produits/"+myVariable.companySelected.companyName.replace(/[^A-Za-z0-9]/g, '-')}
           element={<ProductList company={myVariable.companySelected} user={user}/>}>

    </Route>
    )
   }
    <Route path={'/accounts/clients/'+userId+"/"+user.lastName+'/profile'} element={<ProfilePage user={user} />} >
    </Route> 
       <Route path={'/accounts/clients/'+userId+'/recherche'} element={<SearchPage user={user} />} >
      </Route> 
       <Route path={'/accounts/clients/'+userId+'/recherche'} element={<SearchPage user={user} />} >
      </Route>

       <Route path={'/accounts/clients/'+userId+'/Avis'} element={<SearchPage user={user} />} >
      </Route> 
   </Routes>
  );
}

export default DemandeurRoutes;