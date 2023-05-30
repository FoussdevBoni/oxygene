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
import Services from './Pages/Main/Services';
import Header from './Composants/Header/Header';
import NotifToast from './Composants/Animations/NotifToast';
import SideMenu from './Composants/SideMenu/SideMenu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from './Pages/Main/Auth';
import MyContext, { MyProvider } from './Contextes/MyContext';
import AdminDashboard from './Pages/Admin/App';
import Example from './Pages/Main/About';
import Home from './Pages/Main/Home';
import Modal from './Composants/Modal';
import LoginScreen from './Composants/Forms/LoginScreen';
import RegisterScreen from './Composants/Forms/RegisterScreen';
import BecomeWorker from './Composants/Forms/BecomeWorker';
import About from './Pages/Main/About';
import AboutForMobile from './Pages/Main/AboutForMobile';
import { useContext } from 'react';
import LoadController from './Composants/Animations/Loader';
import Demandeur from './Pages/Main/Demandeur/Demandeur';
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

function App() {
   const redirige  = useNavigate()

if (localStorage.getItem('im')!==null) {


  return(
     <MyProvider>
       <div className="App">
      <AdminDashboard />

  </div>
     </MyProvider>
  )
  
}else{

   let user ;
 if (localStorage.getItem('connected')!==null) {
   user = localStorage.getItem('connected').replace(/[^\w\s]/gi, "")
 }

  return (
  
     <MyProvider>
       <div style={style.header}>
          <Header  />
       </div>
         <div >
       <Routes>
           <Route path="/" exact Component={Home}>
           </Route>
          
           <Route path="/connexion" Component={LoginScreen}>
            
           </Route>
        <Route path="/inscription" Component={RegisterScreen}>
            
           </Route>     
             <Route path="/apropos" Component={About}>
            
           </Route>
             <Route path="/a-propos" Component={AboutForMobile}>
            
           </Route>
            <Route path="/devenir-prestataire" Component={BecomeWorker}>
            
           </Route> 
            <Route path= {"/accounts/"+user}Component={Demandeur}>
            
           </Route> 
       </Routes>
         </div>
         {/*       <NotifToast ></NotifToast>
*/ }
       <SideMenu />

     </MyProvider>
 
  );
}
}

export default App;
