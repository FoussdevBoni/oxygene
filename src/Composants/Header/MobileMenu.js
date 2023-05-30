import { HomeIcon, ServerIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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

      <button class="action-btn" data-mobile-menu-open-btn onClick={
        openMenu
      }>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <button class="action-btn">
        <ion-icon name="bag-handle-outline"></ion-icon>

        <span class="count">0</span>
      </button>

      <button class="action-btn">
        <ion-icon name="home-outline"></ion-icon>
      </button>

      <button class="action-btn">
        <ion-icon name="heart-outline"></ion-icon>

        <span class="count">0</span>
      </button>

      <button class="action-btn" data-mobile-menu-open-btn>
        <ion-icon name="grid-outline"></ion-icon>
      </button>

    </div>
     <nav className= {`mobile-navigation-menu  has-scrollbar  ${isActive ? 'active' : ''}`} id='myMenu' data-mobile-menu
     
     >

      <div class="menu-top ">
        <h2 class="menu-title" style={{textAlign:'center'}}>Menu</h2>

        <button class="menu-close-btn" data-mobile-menu-close-btn
        onClick={closeMenu}
        >
          <ion-icon name="close-outline" ></ion-icon>
        </button>
      </div>

    <ul className="mb-1 flex flex-col gap-1">
      <NavLink
       onClick={
        ()=>{
          closeMenu()
        }
       }
        exact
        to="/"
        className="mx-3.5 mt-4 mb-2 flex side-menu-bouton text-lg text-black"
        activeClassName="is-active"
      >
        <HomeIcon strokeWidth={2.5} className="h-5 w-5 mt-1 mr-2" />
        <span className="ml-2">Accueil</span>
      </NavLink>
       <NavLink
         onClick={
        ()=>{
          closeMenu()
        }
       }
        to="/communaute"
        className="mx-3.5 mt-4 mb-2 flex text-lg side-menu-bouton text-black"
        activeClassName="is-active"
      >
        <ServerIcon strokeWidth={2.5} className="h-5 w-5 text-black mt-1 mr-2" />
        <span className="ml-2">Services</span>
      </NavLink>
      <NavLink
        onClick={
        ()=>{
          closeMenu()
        }
       }
        to="/connexion"
        className="mx-3.5 mt-4 mb-2 flex text-lg side-menu-bouton text-black"
        activeClassName="is-active"
      >
        <UserIcon strokeWidth={2.5} className="h-5 w-5 text-black mt-1 mr-2" />
        <span className="ml-2">Connexion</span>
      </NavLink>
       <NavLink
         onClick={
        ()=>{
          closeMenu()
        }
       }
        to="/a-propos"
        className="mx-3.5 mt-4 mb-2 flex text-lg side-menu-bouton text-black"
        activeClassName="is-active"
      >
        <InformationCircleIcon strokeWidth={2.5} className="h-5 w-5 text-black mt-1 mr-2" />
        <span className="ml-2">A propos </span>
      </NavLink>  
      <NavLink
        onClick={
        ()=>{
          closeMenu()
        }
       }
        to="/connexion"
        className="mx-3.5 mt-4 flex mb-2 text-lg side-menu-bouton text-black"
        activeClassName="is-active"
      >
        <PhoneIcon strokeWidth={2.5} className="h-5 w-5 text-black mt-1 mr-2" />
        <span className="ml-2">Contacter-nous</span>
      </NavLink>
      <NavLink
        className="mx-3.5 mt-4 mb-2 text-lg side-menu-bouton text-black"
        activeClassName="is-active"
      >
        <ion-icon name="chatbubble" style={{ color: 'white' }}></ion-icon>
        <span className="ml-2"></span>
      </NavLink>
       <NavLink to="/devenir-prestataire" className="menu-">
              <Button
                onClick={
        ()=>{
          closeMenu()
        }
       }
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              color='blue'
              style={{backgroundColor:'blue',padding:'30px', borderRadius:'20px'}}
              >
                mon compte professionnel
              </Button>
            </NavLink>
    
    </ul>

   

    </nav>
 </div>

    );
}

export default MobileMenu;