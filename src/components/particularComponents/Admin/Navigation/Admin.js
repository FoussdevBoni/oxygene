import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminRoutes from './AdminRoutes';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';


import PayementRoutes from './Payement/PayementRoutes';
import WorkersRoutes from './Workers/WorkersRoutes';
import { auth, db } from '../../../../Backend/Data/config';
import AdminDashBord from '../Dashbord/DashBord';

function Admin(props) {
    const [adminId , setAdminId] = useState('')
    const navigate = useNavigate()
      useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if (user) {
      const userRef = ref(db , 'users/clients/'+user.uid)
         onValue(userRef , (data)=>{
            console.log(data.val())
           if (data.exists()) {
              setAdminId('')
           }else{
              setAdminId(user.uid)
           }
         })
      
    }else{
      navigate('admin-login')
    }
  })
    },[])
    return (
        <Box>
            <AdminDashBord routes={<AdminRoutes />} adminId={adminId} />
            <PayementRoutes />
            <WorkersRoutes adminId={adminId}/>
        </Box>
    );
}

export default Admin;