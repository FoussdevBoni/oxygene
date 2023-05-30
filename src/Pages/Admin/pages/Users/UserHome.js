import React, { useContext, useEffect, useState } from 'react';
import AllUsers, { HealthWorkers } from './AllUsers';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Categories from './Categories';
import { members_data } from '../../data/members-data';
import UsersContext, { UsersProvider } from './UsersContext';

const AppSection = ()=>{
      const [isClicked , setIsClicked] = useState(false)
   const {usersVariables , setUsersVariables} = useContext(UsersContext)
    const navigate = useNavigate()
    useEffect(
        ()=>{
            
        }, []
    )

    return (
          <div>
            
             <Categories/> 
       
            
         
        </div>
    );
}

function UserHome(props) {
return(
    
 <UsersProvider>
    <AppSection />
 </UsersProvider>
)
}

export default UserHome;