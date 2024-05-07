import React, { useContext } from 'react';

import { Avatar, Menu } from '@mui/material';
import { logo } from '../../../../data-center/data';
import MyContext from '../../../../Contextes/MyContext';

export const  oxyLogo = logo 
function ClientHeader({user}) {
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

        <div class="header-user-actions">

       

          <button class="action-btn">
            <ion-icon name="mail"></ion-icon>
            <span class="count">0</span>
          </button>

          <button class="action-btn">
            <ion-icon name="notifications"></ion-icon>
            <span class="count">0</span>
          </button>
             <button class="action-btn">
             <Avatar src={user.profile}/>
           </button>
        </div>

      </div>

    </div>
    );
  }


export default ClientHeader;