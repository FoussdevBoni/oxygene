import React from 'react';
import { aboutImage } from '../../../../../../data-center/data';
import Separator from '../../../../../generalComponents/Elements/Separator';

const About = () => {
  return (
   <div style={{marginTop:'30px',}} className='p-16 '>
    <Separator title= 'Qui somme-nous ?' />
     <div  style={{ justifyContent:'space-evenly'}}>
      <div className="w-full">
        <p>
Oxygen est une plateforme en ligne dédiée à simplifier votre quotidien. Nous vous proposons une solution pratique et efficace pour répondre à vos besoins en matière de services de maison, de santé et d'achats d'urgence. Que vous ayez besoin d'un coup de main pour le ménage, de soins infirmiers à domicile ou d'un service d'achat d'urgence, Oxygen est là pour vous faciliter la vie. Notre objectif est de connecter les utilisateurs résidentiels à des prestataires de services qualifiés, en offrant une expérience utilisateur fluide et des services de haute qualité. Découvrez dès maintenant notre plateforme et profitez de services fiables et pratiques, adaptés à vos besoins.


        </p>
      </div>
     <div className="h-64  flex items-center justify-center">
  <img src={aboutImage.img} className="h-full w-full object-cover" />
</div>

    </div>
    <br /> <br />  <br /> <br />
    <Separator  title='Nos services'/>
     <div className="flex" style={{ justifyContent:'space-evenly'}}>
      <div className="w-1/2 p-5">
      <h2>Nos services domestiques</h2>
        <p>
          Oxygen simplifie la recherche de prestataires de services pour toutes les tâches liées à votre maison. Que vous ayez besoin d'un service de ménage, de jardinage, de réparation ou de toute autre tâche domestique, nous vous offrons une solution pratique. Grâce à notre application conviviale, vous pouvez rechercher des prestataires de services basés sur leur emplacement, leurs compétences, leurs évaluations et leur disponibilité. Nous nous engageons à vous mettre en relation avec des professionnels qualifiés qui répondront à vos besoins de manière efficace et fiable.
        </p>
      </div>
      <div className="w-1/2 p-5 ">
     
                <img src= {aboutImage.img2}/>

      </div>
    </div>
        <Separator  title=''/>

    <div className="flex" style={{ justifyContent:'space-evenly'}}>
       <div className="w-1/2 p-5 ">
     
                <img src= {aboutImage.img1}/>

      </div>
      <div className="w-1/2 p-5">
      
      <h2>Nos services médicaux</h2>
        <p>
          La santé est une préoccupation majeure pour nous tous, et Oxygen vous accompagne dans vos besoins de soins de santé à domicile. Nous vous permettons de trouver des prestataires de services de santé qualifiés et expérimentés, tels que des infirmiers, des thérapeutes et des professionnels de la réadaptation. Que vous ayez besoin de soins réguliers, de suivis médicaux ou de services de rééducation, notre application vous offre une recherche simplifiée pour trouver les professionnels qui répondent à vos besoins spécifiques. Nous nous engageons à vous aider à accéder à des soins de santé de qualité, dans le confort de votre foyer.
        </p>
      </div>
     
    </div>
        <Separator  title=''/>
     <div className="flex" style={{ justifyContent:'space-evenly'}}>
      <div className="w-1/2 p-5">
      <h2>Nos services d'achat d'urgence</h2>
        <p>
           Dans les situations d'urgence, chaque minute compte. Oxygen vous aide à faire face aux situations imprévues en vous permettant de trouver et d'acheter rapidement les produits d'urgence dont vous avez besoin. Que ce soit des médicaments, des fournitures médicales spécifiques ou d'autres produits essentiels, notre application vous permet de parcourir une liste de produits disponibles, avec des descriptions détaillées, des prix transparents et des évaluations des utilisateurs. Nous nous assurons que les produits d'urgence vous parviennent rapidement et en toute sécurité, directement à votre porte.

        </p>
      </div>
      <div className="w-1/2 p-5 ">
     
                <img src= {aboutImage.img3}/>

      </div>
    </div>
   </div>
  );
};

export default About