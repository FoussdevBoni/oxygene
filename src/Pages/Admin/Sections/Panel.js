import React, { useEffect, useState } from 'react';
import { oxyLogo } from '../../../Composants/Header/HeaderMain';
import Sidebar from './MenuList';
const pi = 3.14;

function Panel(props) {
   const [isActive, setIsActive] = useState(true);

useEffect(()=>{
    setIsActive(true)
},[])
  return(
     <nav className= 'mobile-navigation-menu  has-scrollbar active' id='myMenu' data-mobile-menu style={{backgroundColor:'black', color:'white'}}>

      <div class="">
        <div style={{textAlign:'center'}} class="menu-title">
         <img src= {oxyLogo} alt="oxygene's logo" width="120" height="100%" />

        </div>
       
       
      </div>
        <div style={{backgroundColor:'#7d7d7d', height:'0.2px', marginTop:'10px', width:'100%'}}></div>
        <Sidebar />
       <div style={{backgroundColor:'#7d7d7d', height:'0.2px', marginTop:'10px', width:'100%'}}></div>
      
      



    </nav>
  )
}

export default Panel;