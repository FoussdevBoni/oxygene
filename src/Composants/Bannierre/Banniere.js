import React from 'react';
import { banniere_content } from '../../data-center/data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banniere(props) {
  
  const city = localStorage.getItem('city')
    return (
  <div>
     <div class="banner">
      
      <div class="">
      <div
     
          
      >
        <div class="slider-container ">

          {
            banniere_content.map((element)=>{
                return(
        <div class="slider-item">

            <img src=  {element.image} alt="women's latest fashion sale" class="banner-img" />

            <div class="banner-content">


              <h2 class="banner-title">
                {element.title}
              </h2>

              <p class="banner-text">
                  {element.subtitle}
              </p>

              <a href="#" class="banner-btn">Demander</a>

            </div>

          </div>
                )
            })
          }

         

        </div>
   </div>

      </div>
    </div>
  </div>
    );
}

export default Banniere;