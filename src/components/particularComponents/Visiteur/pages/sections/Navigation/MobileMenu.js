import { HomeIcon, ServerIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import FixedBottomNavigation from './BottomNavigation';

function MobileMenu(props) {
   const [isActive, setIsActive] = useState(false);
  const [active1 , setActive1 ]= useState(true)
     const [active2 , setActive2 ]= useState(false)
     const [active3 , setActive3 ]= useState(false)
       const [active4 , setActive4 ]= useState(false)
     const [active5 , setActive5 ]= useState(false)
     const [active6 , setActive6 ]= useState(false)

     const routerLink = useNavigate();
    useEffect(()=>{
        routerLink('/')
    },[])
    function navigate(p1 , p2 , p3 , p4 , p5 , p6) {
        setActive1(p1) 
        setActive2(p2)
        setActive3(p3)
        setActive4(p4)
        setActive5(p5)
        setActive6(p6)
        
    }
  const openMenu = () => {
    setIsActive(!isActive);
  };
  const closeMenu = () => {
    setIsActive(false);
  };
return (
    <div>
     <div class="mobile-bottom-navigation" >
     <FixedBottomNavigation />
      </div>

    </div>

    );
}

export default MobileMenu;