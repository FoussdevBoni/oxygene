import React, { useContext } from 'react';
import MyContext from '../../Contextes/MyContext';
function HeaderTop(props) {
const {myVariable , setMyVariable} = useContext(MyContext)


  if (myVariable.connected) {
      return (
        <div>
     <div class="header-top">

      <div class="container">

        <ul class="header-social-container">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

        </ul>

        <div class="header-alert-news">
          <p>
            Donnez vie à votre quotidien
          </p>
        </div>

        <div class="header-top-actions">

          <select name="currency">

            <option value="usd">USD &dollar;</option>
            <option value="eur">EUR &euro;</option>

          </select>

          <select name="language">

            <option value="en-US">Parakou</option>
            <option value="es-ES">Cotonou</option>
            <option value="fr">Porto-novo</option>

          </select>

        </div>

      </div>

    </div>
        </div>
    );
  }
}

export default HeaderTop;