import { Star } from '@material-ui/icons';
import React from 'react';
import { isMobile, isTablet , isDesktop } from '../../../../../../data-center/data';
import { images } from '../Home/DemandesZone/image';
const services = [
  { id: 1, name: 'Courses', number: 500, image: images.im1 },
  { id: 2, name: 'Etude à domicile', number: 548, image: images.im4 },
  { id: 3, name: "Garde d'enfants", number: "123", image: images.im3},
  { id: 4, name: "Cuisine", number: 500, image: images.im6 },
  { id: 5, name: "Ménage", number: 548, image: images.im2 },
  { id: 6, name: 'Massage', number: "12", image: images.im5 },
  { id: 7, name: "Lavage auto", number: 125, image: images.im7 },
  { id: 8, name: 'Service de depannage', number: "300", image: images.im8 },
  // Ajoutez d'autres produits ici
];
const Services = () => {
  ;
  return (
    <div className=" mx-auto py-8 mt-60" style={{marginTop:'20px'}}>
        <h1 style={{textAlign: 'center'}}>
            Nos services
        </h1>
      <div className={`
           ${isMobile ? 'px-8':''}
          ${isDesktop ? 'px-16 gap-4 grid-cols-4 grid':''}
           ${isTablet ? 'px-12  gap-4 grid-cols-2 grid':''}
      `}>
        {services.map((item) => (
          <div key={item.id} className="bg-white w-full  shadow rounded cursor-pointer mt-2" style={{borderRadius:'30px'}}>
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-4 rounded" />
             <div className=' overflow-hidden px-3 py-2'>
               

                <h3 className="text-lg font-bold mb-2 truncate line-clamp-2">{item.name}
                </h3>
                <div className='text-gray opacity-50  mb-2 truncate line-clamp-2'>
                 Près {item.number} personnes en demandent
                </div>
                 <div className='flex'>
                    <div className='flex'>
                      <Star style={{color:'orangered'}}/>
                      <Star style={{color:'orangered'}}/>
                      <Star style={{color:'orangered'}}/>
                      <Star style={{color:'orangered'}}/>
                      <Star style={{color:'orangered'}}/>
                    </div>
                    
                 </div>
                   <div className='text-gray opacity-75  mb-2 truncate'>
                      1,5 millions d'avis
                    </div>
                </div>
              
            </div>
        ))}
        
      </div>
    </div>
  );
};

export default Services;
