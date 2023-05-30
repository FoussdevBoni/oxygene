import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes ,  } from 'react-router-dom';

import 'framework7/components/messagebar'
import HeaderMain from '../Header/HeaderMain';
import DesktopMenu from '../Header/DesktopMenu';
import MobileMenu from '../Header/MobileMenu';
import HeaderTop from '../Header/HeaderTop';
const Header = (props)=> {
   const [name , setName] = useState()


 useEffect(()=>{
    setName('Alain')
    console.log(name)
 }, 
 
 
 [])
    return (
   
  <header className='header-static'>

    <div  >
   <HeaderMain />

    </div>
      <DesktopMenu />
      <MobileMenu />
  </header>


  );
}

export default Header;