import React from 'react';
import { NavLink } from 'react-router-dom';
function Footer(props) {
    return (
          <footer>
    <div class="footer-nav">

      <div class="container">
        <ul class="footer-nav-list">
        
          <li class="footer-nav-item">
            <h2 class="nav-title">Oxygene Benin</h2>
          </li>
        
         
        
          <li class="footer-nav-item">
            <NavLink to={'/politiques-confidentialite'} class="footer-nav-link">Politique de confidentialité</NavLink>
          </li>
        
          <li class="footer-nav-item">
            <NavLink to="/condtions-d'utilisation" class="footer-nav-link">Conditions d'utilisations</NavLink>
          </li>
        
          <li class="footer-nav-item">
            <NavLink to={'/apropos'} class="footer-nav-link">Qui sommes-nous ?</NavLink>
          </li>
        
       
        
        </ul>

        <ul class="footer-nav-list">
        
          <li class="footer-nav-item">
            <h2 class="nav-title">Nos services</h2>
          </li>
        
          <li class="footer-nav-item">
            <NavLink href="#" class="footer-nav-link"></NavLink>
          </li>
        
          <li class="footer-nav-item">
            <NavLink href="#" class="footer-nav-link">Services domestiques</NavLink>
          </li>
        
          <li class="footer-nav-item">
            <NavLink href="#" class="footer-nav-link">Services médicaux</NavLink>
          </li>
        
          <li class="footer-nav-item">
            <NavLink href="#" class="footer-nav-link">Achats d'urgence</NavLink>
          </li>
        
          <li class="footer-nav-item">
            <NavLink href="#" class="footer-nav-link">Autres ...</NavLink>
          </li>
        
        </ul>

        <ul class="footer-nav-list">

          <li class="footer-nav-item">
            <h2 class="nav-title">Nos contacts</h2>
          </li>

          <li class="footer-nav-item flex">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <address class="content">
              Parakou Bénin Rue du campus
             
            </address>
          </li>

          <li class="footer-nav-item flex">
            <div class="icon-box">
         <ion-icon name="logo-whatsapp"></ion-icon>               </div>

            <a href="https://wa.me/+22940333883" class="footer-nav-link">(+229) 40 33 38 83</a>
          </li>
          <li class="footer-nav-item flex">
            <div class="icon-box">
                 <ion-icon name="call-outline"></ion-icon>            </div>

            <NavLink href="tel:+22997304917" class="footer-nav-link">(+229) 97 30 49 17</NavLink>
          </li>

          <li class="footer-nav-item flex">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <NavLink href="mailto:oxygen@gmail.com"  class="footer-nav-link" >oxygen@gmail.com</NavLink>
          </li>

        </ul>

        <ul class="footer-nav-list">

          <li class="footer-nav-item">
            <h2 class="nav-title">Suivez nous</h2>
          </li>

          <li>
            <ul class="social-link">

              <li class="footer-nav-item">
                <a href="https://m.facebook.com/people/DARSAF-Tech/100084456649452/?locale2=hi_IN" class="footer-nav-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li class="footer-nav-item">
                <NavLink href="#" class="footer-nav-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </NavLink>
              </li>

              <li class="footer-nav-item">
                <NavLink href="#" class="footer-nav-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </NavLink>
              </li>

            </ul>
          </li>

        </ul>

      </div>

    </div>

    <div class="footer-bottom">

      <div class="container">

       

        <p class="copyright">
          Copyright &copy; <a href="#">OXYGENE BENIN</a> Tout droit réservé.
        </p>

      </div>

    </div>

  </footer>
    );
}

export default Footer;