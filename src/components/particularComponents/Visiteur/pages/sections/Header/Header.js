import React, { useContext } from 'react';
import { logo } from '../../../../../../data-center/data';
import MyContext from '../../../../../../Contextes/MyContext';
import { Menu } from '@mui/material';

export const  oxyLogo = logo 
function VisiteurHeader(props) {
  const {myVariable , setMyVariable} = useContext(MyContext)
      return (
         <div class="header-main">

      <div class="container">

        <a href="#" class="header-logo">
          <img src= {logo} alt="oxygene's logo" width="120" height="100%" />
        </a>
        <div class="header-search-container">

          <input type="search" name="search" class="search-field" placeholder="Que cherchez-vous ?.." />

          <button class="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

        </div>

        

      </div>

    </div>
    );
  }


export default VisiteurHeader;