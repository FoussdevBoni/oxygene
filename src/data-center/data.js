import image1 from '../assets/img/images-banniere/image (1).jpeg'
import image2 from '../assets/img/images-banniere/image (2).jpeg'
import image3 from '../assets/img/images-banniere/image (3).jpeg'
import oxylogo from '../assets/img/logos/logo1.jpeg'
import aboutImg1 from '../assets/img/about-image1.jpg'
import aboutImg2 from '../assets/img/about-image2.png'
import aboutImg3 from '../assets/img/about-image3.jpg'
import aboutImg from '../assets/img/about-image.jpg'
import favicon from '../assets/img/logos/logo.jpeg'
import logo1 from '../assets/img/home-task-removebg-preview.png'
import logo2 from '../assets/img/medico-task-removebg-preview.png'
import logo3 from '../assets/img/urgence-task-removebg-preview.png'
export const aboutImage = {
  img: aboutImg,
  img1: aboutImg1,
  img2: aboutImg2,
  img3: aboutImg3
}
export const logo  = oxylogo
export const logoFavicon = favicon
export const service_logo = {
  logo1: logo1,
  logo2: logo2, 
  logo3: logo3
}
export const banniere_content = [
        {
            image: image1,
            title: 'Services domestiques',
            subtitle: 'Foyer impeccable, services sur mesure ! '
        }, 
         {
            image: image2,
            title: 'Services médicaux',
            subtitle: 'Ensemble, sauver des vies à toute heure ! '
        },
         {
            image: image3,
            title: 'Achats d\'urgence',
            subtitle: ' L\'urgence de vos besoins, notre priorité d\'achat ! '
        },
    ]


export const services = [
  {
      logo: logo1,
    category: 'Services domestiques',
    services: [
      "Ménage",
      "Jardinage",
      "Nettoyage de vitres",
      "Entretien de piscine",
      "Pet-sitting",
      "Garde d'enfants",
      "Réparation et bricolage",
      "Livraison de courses",
      "Assistance informatique",
      "Gouvernante",
      "Lavage de voiture",
      "Gestion du linge",
      "Cuisine à domicile",
      "Soins aux personnes âgées",
      "Coaching de vie",
      "Décoration intérieure",
      "Organisation d'événements",
      "Service de repassage",
      "Services de conciergerie",
      "Services de garde-meubles",
      "Service de déménagement",
    ]
  },
  {
   logo: logo2,

    category: 'Services médicaux',
    services: [
      "Infirmière à domicile",
      "Aide-soignant",
      "Physiothérapeute",
      "Ergothérapeute",
      "Orthophoniste",
      "Psychologue",
      "Acupuncteur",
      "Nutritionniste",
      "Orthoptiste",
      "Médecin à domicile",
      "Soins palliatifs",
      "Préparation de médicaments",
      "Prise de sang à domicile",
      "Services de réadaptation",
      "Soins infirmiers spécialisés",
      "Services de soutien psychologique",
      "Massothérapie à domicile",
      "Soins aux personnes handicapées",
      "Services d'orthopédie",
      "Services de radiologie à domicile",
    ]
  },
  {
      logo: logo3,

    category: 'Achats urgents',
    services: [
      "Courses d'urgence",
      "Pharmacie à domicile",
      "Livraison de repas",
      "Livraison de médicaments",
      "Service de taxi",
      "Service de dépannage",
      "Service de plomberie",
      "Service d'électricien",
      "Service de serrurier",
      "Service de vitrier",
      "Service de climatisation",
      "Service de chauffage",
      "Service de réparation d'électroménagers",
      "Service de réparation de véhicules",
      "Service de déblocage de canalisations",
      "Service de désinsectisation",
      "Service de désinfection",
      "Service de ramonage de cheminée",
      "Service de remorquage automobile",
      "Service de déneigement",
    ]
  },
];


export const isMobile = window.innerWidth < 400;
export const isDesktop = window.innerWidth >= 1200;
 export const isTablet = window.innerWidth >= 800 && window.innerWidth < 1200;
export const companyDefaulLogo = 'https://img.freepik.com/vecteurs-libre/modele-conception-logo-immobilier-panier-vente-maison-silhouette-logotype-concept_126523-634.jpg'

export const userProfile =  `
https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png
`

 export const productNbr = (productNbr)=>{
      if (productNbr!==undefined) {
        return productNbr
      }else {
        return 0
      }
    }
