import { HomeIcon, ServerIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ClientBottomNavigation from './BottomNavigation';

function ClientMobileMenu({user}) {
 
    useEffect(()=>{
    },[])
 
  
return (
    <div>
     <div class="mobile-bottom-navigation" >
     <ClientBottomNavigation user={user}/>
      </div>

    </div>

    );
}

export default ClientMobileMenu;