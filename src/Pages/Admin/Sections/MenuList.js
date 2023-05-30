import React, { useContext, useEffect, useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Typography } from "@material-tailwind/react";
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";
import Home from "../pages/dashboard/home";
import MyContext from "../../../Contextes/MyContext";

const Sidebar = () => {
    const [active1 , setActive1 ]= useState(true)
     const [active2 , setActive2 ]= useState(false)
     const [active3 , setActive3 ]= useState(false)
       const [active4 , setActive4 ]= useState(false)
     const [active5 , setActive5 ]= useState(false)
     const [active6 , setActive6 ]= useState(false)

     const routerLink = useNavigate();
    useEffect(()=>{
        routerLink('/admin')
    },[])
    function navigate(p1 , p2 , p3 , p4 , p5 , p6) {
        setActive1(p1) 
        setActive2(p2)
        setActive3(p3)
        setActive4(p4)
        setActive5(p5)
        setActive6(p6)
        
    }
  return (
      <div style={{marginLeft:'-35px'}}>

      <ul className="mb-1 flex flex-col gap-1">
          <NavLink to="/admin/" className= {`mx-3.5 mt-4 mb-2  side-menu-bouton  ${active1 ? 'is-active' : ''}`} style={{display:'flex'}}
          onClick={
            ()=>{
                            navigate(true, false , false , false , false , false)

            }
          }
          
          >
               <HomeIcon strokeWidth={2.5} className="h-5 w-5 text-white" />

                <Typography
                  variant="small"
                  color= "white" 
                  className="font-black  opacity-75"
                >
               <span style={{marginLeft:'10px'}}>dashboard</span>
                </Typography>
           </NavLink>
          <NavLink to= 'admin/communauté'  className= {`mx-3.5 mt-4 mb-2  side-menu-bouton  ${active2 ? 'is-active' : ''}`} style={{display:'flex'}}
          onClick={
            ()=>{
                            navigate(false, true , false , false , false , false)

            }
          }>
             <ion-icon name="people" style = {{color:'white'}}></ion-icon>
                <Typography
                  variant="small"
                  color= "white" 
                  className="font-black  opacity-75"
                >
               <span style={{marginLeft:'10px'}}>La communauté</span>
                </Typography>
           </NavLink>

            <NavLink to ='/admin/demandes'  className= {`mx-3.5 mt-4 mb-2  side-menu-bouton  ${active3 ? 'is-active' : ''}`} style={{display:'flex'}}
          onClick={
            ()=>{
                            navigate(false, false , true , false , false , false)

            }
          }>
           <ion-icon name="server-outline" style = {{color:'white'}}></ion-icon>                <Typography
                  variant="small"
                  color= "white" 
                  className="font-black  opacity-75"
                >
               <span style={{marginLeft:'10px'}}>Les demandes</span>
                </Typography>
           </NavLink>
           
           <NavLink to = "/admin/discussions"  className= {`mx-3.5 mt-4 mb-2  side-menu-bouton  ${active4 ? 'is-active' : ''}`} style={{display:'flex'}}
          onClick={
            ()=>{
                            navigate(false, false , false , true , false , false)

            }
          }>
           <ion-icon name="chatbubble"
           style = {{color:'white'}}
           >
            </ion-icon>                <Typography
                  variant="small"
                  color= "white" 
                  className="font-black  opacity-75"
                >
               <span style={{marginLeft:'10px'}}>Les discussions </span>
           </Typography>
           </NavLink>
             <NavLink to = '/admin/paiements'  className= {`mx-3.5 mt-4 mb-2  side-menu-bouton  ${active5 ? 'is-active' : ''}`} style={{display:'flex'}}
          onClick={
            ()=>{
                            navigate(false, false , false , false , true , false)

            }
          }>
          <ion-icon name="cash"
          style = {{color:'white'}}
          ></ion-icon>             <Typography
                  variant="small"
                  color= "white" 
                  className="font-black  opacity-75"
                >
               <span style={{marginLeft:'10px'}}>Gestion des paiements </span>
           </Typography>
           </NavLink>
             <NavLink to = "/admin/avis"  className= {`mx-3.5 mt-4 mb-2  side-menu-bouton  ${active6 ? 'is-active' : ''}`} style={{display:'flex'}}
          onClick={
            ()=>{
                            navigate(false, false , false , false , false , true)

            }
          }>
           <ion-icon name="chatbox-ellipses"
           style = {{color:'white'}}
           ></ion-icon>              <Typography
                  variant="small"
                  color= "white" 
                  className="font-black  opacity-75"
                >
               <span style={{marginLeft:'10px'}}>Les avis des utilisateurs </span>
           </Typography>
           </NavLink>

           
            
    </ul>
  </div>
  );
};

export default Sidebar;
