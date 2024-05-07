import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/vendor/aos/aos.css';
import '../src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/vendor/boxicons/css/boxicons.min.css';
import '../src/assets/vendor/glightbox/css/glightbox.min.css';
import '../src/assets/vendor/remixicon/remixicon.css';
import '../src/assets/vendor/swiper/swiper-bundle.min.css';
import '../src/assets/css/css/style.css';
import Header from './Composants/Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyContext, { MyProvider } from './Contextes/MyContext';
import Home from './Pages/Main/Home';
import LoginScreen from './Composants/Forms/AccountsCreate/LoginScreen';
import RegisterScreen from './Composants/Forms/AccountsCreate/RegisterScreen';
import BecomeWorker from './Composants/Forms/AccountsCreate/BecomeWorker';
import About from './Pages/Main/About';
import AboutForMobile from './Pages/Main/AboutForMobile';
import { useContext, useEffect, useState } from 'react';
import Services from './Composants/Services/Services';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './Backend/Data/config';
import { onValue, ref } from 'firebase/database';
import Demandeur from './Composants/Demandeur/Demandeur';
import { DemandeurHome } from './Pages/Main/Demandeur/Demandeur';
import Admin from './Pages/Main/AdminPage/Admin';
import { PartenerHome } from './Pages/Main/Partener/Partener';
import { NewTaskList } from './Pages/Main/Worker/Worker';
import Partener from './Composants/Partener/Partener';
import Worker from './Composants/Worker/Worker';
import BecomePartener from './Composants/Forms/AccountsCreate/BecomePartener';

export const style = {
   header:{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '0px', 
  backgroundColor: 'white',
  zIndex: '999'
   },
   
}
    let userId ;

function App({}) {
   const redirige  = useNavigate()
   const [user , setUser] = useState('')
  const {myVariable , setMyVariable} = useContext(MyContext)
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const userId = user.email.replace(/[^A-Za-z0-9]/g, '');
     const connectedAS = localStorage.getItem('connectedAS')

       let userType = ''; // Variable pour stocker le type d'utilisateur

      // Déterminer le type d'utilisateur en fonction des données de l'utilisateur
      // Vous devez définir la logique pour déterminer le type d'utilisateur en fonction de vos besoins
      if (connectedAS==='client') {
        userType = 'clients';
      } else if (connectedAS==='partener') {
        userType = 'parteners';
      } else if (connectedAS==='admin') {
        userType = 'admin';
      } else if (connectedAS==='worker') {
        userType = 'workers';
      }
      // Utilisateur connecté, rediriger vers le tableau de bord
      redirige(`/accounts/${userType}/`+ userId);
      // Cacher le header de acceuil 
         setMyVariable(prevState => ({
              ...prevState,
              connectedAS: connectedAS

       }))

      // Récupérer les données Realtime Database de l'utilisateur
      const userRef = ref(db, 'users/'+userType+'/'+user.uid) 
      onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        console.log(userData)
        setUser(userData)
      setMyVariable(prevState => ({
              ...prevState,
              demandeur: snapshot.val()

       }))        // Convertir les données de la base de données en tableau
     user = userData
      }
    });
    } else {
      // Utilisateur non connecté
      // Vous pouvez ajouter d'autres logiques ici si nécessaire
    }
  });
  return () => unsubscribe();
}, [])






   
  return (
  
     <MyProvider>
         <div style={style.header}>
          <Header  />
          </div>
           {
            myVariable.connectedAS==='client'&& <Demandeur user={user}/>

           }
            {
           myVariable.connectedAS==='partener'&& <Partener user={user}/>

           }
           {
            myVariable.connectedAS==='worker'&& <Worker user={user}/>
           }
            {
            myVariable.connectedAS==='admin'&& <Worker user={user}/>
           }
         <div>
          <Routes>
           <Route path="/" exact Component={Home}>
           </Route>
           <Route path="/connexion/client" element={<LoginScreen userType={'client'}/>}>           
           </Route>
            <Route path="/connexion/partener" element={<LoginScreen userType={'partener'}/>}>           
           </Route>
            <Route path="/connexion/worker" element={<LoginScreen userType={'worker'}/>}>           
           </Route>
           <Route path="/inscription" Component={RegisterScreen}>
           </Route>     
           <Route path="/apropos" Component={About}>
           </Route>
            <Route path="/a-propos" Component={AboutForMobile}>
           </Route>
            <Route path="/devenir-prestataire" Component={BecomeWorker}>
            </Route> 
            <Route path="/devenir-fournisseur" Component={BecomePartener}>
            </Route> 
           <Route path= {"/services"}Component={Services}>
            
           </Route> 
              <Route
           path={"/accounts/clients/:userId/"}
           element={<DemandeurHome user={user}/>}
          ></Route>

           <Route path= {"/accounts/admin"}Component={Admin}>
            
           </Route> 
            <Route path= {"/accounts/parteners/:userId"}element={<PartenerHome 
            user={user}
            />}>
            
           </Route>
            <Route path= {"/accounts/workers/:userId"} element={<NewTaskList
            user={user}
             />}>
            
           </Route>
       </Routes>
         </div>
    



         {/*       <NotifToast ></NotifToast>
*/ }

     </MyProvider>
 
  )

}


export default App;
