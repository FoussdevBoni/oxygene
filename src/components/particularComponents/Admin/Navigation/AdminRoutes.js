import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../../../Contextes/MyContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../../../Backend/Data/config';
import { onValue, ref } from 'firebase/database';
import { routesItems } from './routes';
import Clients from '../AdminPage/Clients/Clients';
import Workers from '../AdminPage/Workers/Workers';
import HistoriquePay from '../HistoriquePay';
import CenteredContentPage from '../../../generalComponents/Container/MyContainer';
import MyModal from '../../../generalComponents/MyModal/MyModal';
import NewWorker from '../AdminPage/Workers/NewWorker';
import Demandes from '../AdminPage/DemandesServices/Demandes';
import Avis from '../AdminPage/Avis/Avis';



function AdminRoutes(props) {
    const [adminId , setAdminId] = useState('')
    const {myVariable , setMyVariable} = useContext(MyContext)
    const navigate = useNavigate()
      useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if (user) {
      const userRef = ref(db , 'clients/'+user.uid)
         onValue(userRef , (data)=>{
            console.log(data.val())
           if (data.exists()) {
              setAdminId('')
           }else{
              setAdminId(user.uid)
              navigate('/admin/'+user.uid+'/'+routesItems[0].label)
             
              setMyVariable(prevState=>(
                  {
                      ...prevState, 
                      hidden: false
                  }
              ))

           }
         })
      
    }else{
        navigate('/admin')
    }
  })
    },[])
    const components = [
         <Demandes />,
         <Avis />,
          <Clients />,
         <Workers adminId={adminId}/>,
         <HistoriquePay  />,
    ]
    return (
        <Routes>
               
           {
            routesItems.map((route, index)=>{
                return(
                     <Route path={`admin/${adminId}/${route.label}`} element = {components[index]}></Route>
                )
            })
           }
          
       
           <Route path={`admin/${adminId}/Ajouter un chauffeur`} element={<MyModal children={<NewWorker />}/>}></Route>
        </Routes>
    );
}



export default AdminRoutes;