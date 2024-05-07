import React from 'react';
import AvisList from './AvisList';
const views = [
     {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    avis: 'Je suis très satisfait de votre prestation !',
  
  },
    {
    id: 1,
    firstName: 'Awa',
    lastName: 'Jol',
    avis: 'Top !',
  
  },
    {
    id: 1,
    firstName: 'Zidane',
    lastName: 'Uli',
    avis: 'Super service !',
  
  },
      {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    avis: 'Je suis très satisfait de votre prestation !',
  
  },
    {
    id: 1,
    firstName: 'Awa',
    lastName: 'Jol',
    avis: 'Top !',
  
  },
    {
    id: 1,
    firstName: 'Zidane',
    lastName: 'Uli',
    avis: 'Super service !',
  
  },    {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    avis: 'Je suis très satisfait de votre prestation !',
  
  },
    {
    id: 1,
    firstName: 'Awa',
    lastName: 'Jol',
    avis: 'Top !',
  
  },
    {
    id: 1,
    firstName: 'Zidane',
    lastName: 'Uli',
    avis: 'Super service !',
  
  },    {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    avis: 'Je suis très satisfait de votre prestation !',
  
  },
    {
    id: 1,
    firstName: 'Awa',
    lastName: 'Jol',
    avis: 'Top !',
  
  },
    {
    id: 1,
    firstName: 'Zidane',
    lastName: 'Uli',
    avis: 'Super service !',
  
  },    {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    avis: 'Je suis très satisfait de votre prestation !',
  
  },
    {
    id: 1,
    firstName: 'Awa',
    lastName: 'Jol',
    avis: 'Top !',
  
  },
    {
    id: 1,
    firstName: 'Zidane',
    lastName: 'Uli',
    avis: 'Super service !',
  
  },
]
function Avis(props) {
    return (
        <div className='bg-gray-200'>
            <AvisList data={views}/>
        </div>
    );
}

export default Avis;