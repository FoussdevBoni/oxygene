import React from 'react';
import { oxyLogo } from '../../../Composants/Header/HeaderMain';

function HeaderMain(props) {
    return (
 <div class="header-main" style={{backgroundColor:'white'}}>

      <div class="container">

        <a href="#" class="header-logo">
          <img src= {oxyLogo} alt="oxygene's logo" width="120" height="100%" />
        </a>

        <div class="header-search-container" style={{marginLeft:'50px'}}>

          <input type="search" name="search" class="search-field" placeholder="Que cherchez-vous ?.." />

          <button class="search-btn" style={{color:'black'}}>
            <ion-icon name="search-outline"
              style = {{color:'black'}}
            ></ion-icon>
          </button>

        </div>

        <div class="header-user-actions">


          <button class="action-btn">
            <ion-icon name="notifications-outline"
               style = {{color:'black'}}
            ></ion-icon>
            <span class="count">0</span>
          </button>

           

        

        </div>

      </div>

    </div>
    );
}

export default HeaderMain;