/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MyContext from '../../../../../../Contextes/MyContext';
import { services } from '../../../../../../data-center/data';
import FixedBottomNavigation from './BottomNavigation';

function NavMenu(props) {
  const {myVariable , setMyVariable}= useContext(MyContext)
const [isDrawerOpen, setDrawerOpen] = useState(false);

   const [active1 , setActive1 ]= useState(true)
     const [active2 , setActive2 ]= useState(false)
     const [active3 , setActive3 ]= useState(false)
       const [active4 , setActive4 ]= useState(false)
     const [active5 , setActive5 ]= useState(false)
     const [active6 , setActive6 ]= useState(false)

     const routerLink = useNavigate();
     const openDrawer = () => {
       setDrawerOpen(true);

       };
    useEffect(()=>{
        routerLink('/')
    },[])


  const openModal = () => {
    setMyVariable(prevState => ({
      ...prevState,
      isOpen: true
  }));  }
    function navigate(p1 , p2 , p3 , p4 , p5 , p6) {
        setActive1(p1) 
        setActive2(p2)
        setActive3(p3)
        setActive4(p4)
        setActive5(p5)
        setActive6(p6)
        
    }

    

    return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list  overflow-visible">

          <li className="menu-category" onClick={
            ()=>{
              navigate(true, false , false , false , false  )
            }
          }>
            <NavLink exact to="/" className= {`menu-title
            ${active1 ? 'desktop-menu-btn-active' : 'link-inactive'}
            ` 
            }>Acceuil</NavLink>
          </li>

          <li className="menu-category"onClick={
            ()=>{
              navigate(false, true , false , false , false  )
            }
          }>
            <div className= {`menu-title cursor-pointer
            ${active2 ? 'desktop-menu-btn-active' : 'link-inactive'}
            ` 
            }>Services</div>

            <div className="dropdown-panel">
              {services.map((element) => {
                return (
                  <ul className="dropdown-panel-list" key={element.category}>
                    <li className="menu-title">
                      <NavLink href="#">{element.category}</NavLink>
                    </li>
                    {element.services.map((e) => {
                      return (
                        <li className="panel-list-item" key={e}>
                          <a href="#">{e}</a>
                        </li>
                      )
                    })}
                  </ul>
                )
              })}
            </div>
          </li>

          <li className="menu-category" onClick={
            ()=>{
              navigate(false, false , true , false , false  )
               setMyVariable(prevState => ({
                 ...prevState,
              hidden: true
               }));
            }
          }>
            <NavLink to="/connexion/client" className= {`menu-title
            ${active3 ? 'desktop-menu-btn-active' : 'link-inactive'}
            ` 
            }>Connexion</NavLink>
        
          </li>

          <li className="menu-category"
          onClick={
            ()=>{
              openModal()
              navigate(false, false , false , true , false  )
            }
          }
          >
            <NavLink to="/apropos"className= {`menu-title
            ${active4 ? 'desktop-menu-btn-active' : 'link-inactive'}
            ` 
            }>A propos</NavLink>
             
               
          </li>

          <li className="menu-category" onClick={
            ()=>{
              navigate(false, false , false , false , true  )
                setMyVariable(prevState => ({
                 ...prevState,
              hidden: true
               }));
            }
          }>
            <NavLink to="/noscontacts" className= {`menu-title
            ${active5 ? 'desktop-menu-btn-active' : 'link-inactive'}
            ` 
            }>Nos contacts</NavLink>
          </li>

          <li className="menu-category">
            <a  className="menu-"

            >
              <Button
               onClick={()=>{
                 routerLink('/connexion/worker')
               }}
              className=' text-white shadow-sm hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded '
              color='blue'
              style={{padding:'30px', borderRadius:'20px' ,   background: 'hsl(353, 100%, 78%)'
            }}
              >
             Devenir prestataire            
             
               </Button>
            </a>

  
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavMenu;
