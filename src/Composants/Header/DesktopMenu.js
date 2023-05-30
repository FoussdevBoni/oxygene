import React, { useContext, useEffect, useState } from 'react';
import { services } from '../../data-center/data';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import MyContext from '../../Contextes/MyContext';
import { Button } from '@material-tailwind/react';
import BecomeWorker from '../Forms/BecomeWorker';

function DesktopMenu(props) {
  const {myVariable , setMyVariable}= useContext(MyContext)

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
if (myVariable.connected==false) {
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
            <NavLink to="/services" className= {`menu-title
            ${active2 ? 'desktop-menu-btn-active' : 'link-inactive'}
            ` 
            }>Services</NavLink>

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
            }
          }>
            <NavLink to="/connexion" className= {`menu-title
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
            }
          }>
            <NavLink to="/noscontacts"className= {`menu-title
            ${active5 ? 'desktop-menu-btn-active' : 'link-inactive'}
            ` 
            }>Nos contacts</NavLink>
          </li>

          <li className="menu-category">
            <NavLink to="/devenir-prestataire" className="menu-"
            onClick={
              ()=>{
                navigate(false, false , false , false , false  )
              }
            }
            >
              <Button
 
              className='bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded '
              color='blue'
              style={{padding:'30px', borderRadius:'20px'}}
              >
                mon compte professionnel
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
}

export default DesktopMenu;
