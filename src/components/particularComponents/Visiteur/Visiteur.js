import React from 'react';
import VisiteurRoutes from './pages/Routes';
import { visiteurItems } from './itemsMenu';
import Header from './pages/sections/Header/Header';
import NavMenu from './pages/sections/Navigation/NavMenu';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './pages/sections/Connexion/LoginForm';
import DemandeurForm from './pages/sections/Inscription/DemandeurForm/DemandeurForm';
import About from './pages/sections/About/About';

import Footer from './pages/sections/Footer/Footer';
import Banniere from './pages/sections/Home/Banniere/Banniere';

function Visiteur(props) {
    return (
        <div>
          <Header   />
            <NavMenu /> 
          <main>
           <Banniere />
           
          </main>
          <Footer />
        </div>
    );
} 

export default Visiteur;