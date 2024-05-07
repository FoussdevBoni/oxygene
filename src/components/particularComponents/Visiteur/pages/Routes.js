import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './sections/Connexion/LoginForm';
import DemandeurForm from './sections/Inscription/DemandeurForm/DemandeurForm';
import About from './sections/About/About';
import WorkerForm from './sections/Inscription/WorkerForm/WorkerForm';
import PartenerForm from './sections/Inscription/PartenerForm/PartenerForm';
import Home from './sections/Home/Home';
import AboutForMobile from './sections/About/AboutForMobile';
import Politics from './sections/Politics/Politics';
import Contacts from './sections/Contact/Contacts'
import Success from './sections/Inscription/WorkerForm/Success';
import ConditionsUtilisation from './sections/useWays/UseWays';
import Services from './sections/Services/Services';
import AdminLogin from '../../Admin/Login/Login';
import AdminRegister from '../../Admin/Register/Register';
function VisiteurRoutes(props) {
    return (
        <div>
             <Routes>
                   <Route path="/" element={<Home />}>           
           </Route>
 <Route path="/politiques-confidentialite" element={<Politics />}>           
           </Route>
            <Route path="/condtions-d'utilisation" element={<ConditionsUtilisation />}>           
           </Route>
             <Route path="/service" element={<Services />}>           
           </Route>
                 <Route path="/connexion/client" element={<LoginForm userType={'client'}/>}>           
           </Route>
        
            <Route path="/connexion/worker" element={<WorkerForm userType={'worker'}/>}>           
           </Route>
            <Route path="/canditature-envoyee" element={<Success />}>           
           </Route>
              <Route path="/noscontacts" element={<Contacts />}>           
           </Route>
           <Route path="/inscription" Component={DemandeurForm}>
           </Route>     
           <Route path="/apropos" Component={About}>
           </Route>
           <Route path="/a-propos" Component={AboutForMobile}>
           </Route>
           { /*<Route path="/a-propos" Component={AboutForMobile}>
           </Route>**/}
            <Route path="/devenir-prestataire" Component={WorkerForm}>
            </Route> 
            <Route path="/devenir-fournisseur" Component={PartenerForm}>
            </Route> 
            
            <Route path="admin-login" element={<AdminLogin />}>

     </Route>
      <Route path="admin-register" element={<AdminRegister />}>

     </Route>
         </Routes>
        </div>
    );
}

export default  VisiteurRoutes
;