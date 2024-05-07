import React, { useEffect, useState } from 'react';
import { MyProvider } from './Contextes/MyContext';
import Application from './Application';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/vendor/aos/aos.css';
import '../src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/vendor/boxicons/css/boxicons.min.css';
import '../src/assets/vendor/glightbox/css/glightbox.min.css';
import '../src/assets/vendor/remixicon/remixicon.css';
import '../src/assets/vendor/swiper/swiper-bundle.min.css';
import '../src/assets/css/css/style.css';
import './App.css'
import { useNavigate } from 'react-router-dom';
import Admin from './components/particularComponents/Admin/Navigation/Admin';
 const url = window.location.href
 const path = new URL(url).pathname;
      const parts = path.split('/');
     const part = parts[1];
    

function App() {
  const navigate = useNavigate()
  const [isAdmin , setIsAdmin] = useState(false)
   useEffect(()=>{
    if (part==='admin') {
       setIsAdmin(true)
   }
   }, [])
  return (
   <MyProvider>
     {
      isAdmin ? <Admin />: <Application />
     }
    
   </MyProvider>
  );
}

export default App;