import { Box, Fab, Paper, Slide } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MyContext from "./Contextes/MyContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Backend/Data/config";
import { onValue, ref } from "firebase/database";
import { demandersItems } from "./components/particularComponents/Demandeur/itemsMenu";
import { workerItems } from "./components/particularComponents/Worker/itemsMenu";
import LoaderModal from "./components/generalComponents/Loader/LoaderModal";
import VisiteurRoutes from "./components/particularComponents/Visiteur/pages/Routes";
import VisiteurHeader from "./components/particularComponents/Visiteur/pages/sections/Header/Header";
import Footer from "./components/particularComponents/Visiteur/pages/sections/Footer/Footer";
import NavMenu from "./components/particularComponents/Visiteur/pages/sections/Navigation/NavMenu";
import MobileMenu from "./components/particularComponents/Visiteur/pages/sections/Navigation/MobileMenu";
import { visiteurItems } from "./components/particularComponents/Visiteur/itemsMenu";
import MobileDrawer from "./components/particularComponents/Visiteur/MenuDrawer";
import NavBar from "./components/particularComponents/Client/H/ClientHeader";
import ClientsRoutes from "./navigation/ClientRoutes";
import ClientHeader from "./components/particularComponents/Client/H/ClientHeader";
import ClientNavMenu from "./components/particularComponents/Client/NavBar/NavMenu";
import ClientMobileMenu from "./components/particularComponents/Client/NavBar/MobileMenu";
import ClientMobileDrawer from "./components/particularComponents/Client/ClientDrawer/ClientDrawer";
import { WhatsApp } from "@material-ui/icons";

 const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
      const part1 = parts[1]
     const userId = parts[3];
     const label = parts[4] 
const Application = () => {
  
 
   const [user , setUser] = useState()
   const redirige  = useNavigate()
   const navigate = useNavigate()
  const {myVariable , setMyVariable} = useContext(MyContext)
     const connectedAS = localStorage.getItem('connectedAS')
     const [connected , setConnected] = useState(false)
  const [itemsMenu , setItemsMenu] = useState([])
   useEffect(() => {
     window.addEventListener('error' , ()=>{
     redirige('/');

  })
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    
    if (user) {
      const userId = user.email.replace(/[^A-Za-z0-9]/g, '');
       setConnected(true)
       let userType = ''; 
    if (connectedAS==='client') {
        userType = 'clients';
        setItemsMenu(demandersItems)
      } else  if (connectedAS==='worker') {
        userType = 'workers';
          setItemsMenu(workerItems)

      }else if (connectedAS===''){
          setItemsMenu(visiteurItems)
      }
      
      redirige(`/accounts/${userType}/`+user.userId+'/'+user.lastName);
         setMyVariable(prevState => ({
              ...prevState,
              connectedAS: connectedAS
       }))

      const userRef = ref(db, 'users/'+userType+'/'+user.uid) 
      onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        console.log(userData)
        setUser(userData)
        user = userData
      }
    });
    } else {
          setConnected(false)

   if (part1==='admin-oxybenin-darsaf') {
          redirige('/admin-login');

    }else{
           redirige('/');

    }
    }
  });
  return () => unsubscribe();
}, [])

  

 

  const logout = () => {
       auth.signOut().then(
        ()=>{
            window.location.reload()
            localStorage.setItem('connectedAS', '')
        }
       )
  };
   
if (connected) {
   return(
   <Box>
    {
      user!==undefined ? 
      
        <Box>
          {user.userType==='demandeur'&&(
              <Box >
                   <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 , zIndex: 2}} >
                     <ClientHeader user={user}/>
                    <ClientNavMenu user={user}/>
                   </Paper>
                    <ClientMobileMenu user={user} />
                       <ClientMobileDrawer user={user} />

                   <Box sx={{minHeight: window.innerHeight, marginTop: 30}} className='bg-gray-200'>
                        <ClientsRoutes user={user} demandeurRoutes={demandersItems}/>
                        <Box height={50}>

                        </Box>
                    <Box sx={{
                      position: 'fixed',
                      bottom: '60px',
                      right: '20px', 
                      zIndex: '10000'
                    }}>
                       <Fab style={{backgroundColor:'green'}} aria-label="add">
                         <a href="https://wa.me/+22940333883">
                             <WhatsApp style={{color: 'white'}}/>
                         </a>
                       </Fab>
                    </Box>
                   </Box>
              </Box> 
          )}    

          {user.userType==='worker'&&(
              <Box>
                <NavBar />
                   <ClientsRoutes user={user} demandeurRoutes={demandersItems}/>
              </Box> 
          )}   
        </Box>: 
        
        <LoaderModal />
    }
   </Box>
   )
}else{
   return (
    <div>
        {
         !myVariable.hidden ?
            <header>
                <VisiteurHeader />
                 <NavMenu />
                 <MobileMenu />
            </header>:
            null
        }
         <MobileDrawer />
        <VisiteurRoutes />
        {
         !myVariable.hidden ?
        <Footer />:
       null

        }
       </div>
   )
}
 


};

export default Application;
