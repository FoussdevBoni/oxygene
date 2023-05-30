import React, { useContext } from 'react';
import logo from '../../../src/assets/img/oxy-logo.png'
import MyContext from '../../Contextes/MyContext';
export const  oxyLogo = logo 
function HeaderMain(props) {
  const {myVariable , setMyVariable} = useContext(MyContext)

  if (myVariable.connected==false) {
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
            <ion-icon name="person-outline"></ion-icon>
          </button>

          <button class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span class="count">0</span>
          </button>

          <button class="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span class="count">0</span>
          </button>

        </div>

      </div>

    </div>
    );
  }
}

export default HeaderMain;