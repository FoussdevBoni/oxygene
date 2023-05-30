import React from 'react';
import Banniere from '../../Composants/Bannierre/Banniere';
import { Avatar } from '@material-tailwind/react';
import MySheet from '../../Composants/Sheet';
import Separator from '../../Composants/Elements/Separator';

function Home(props) {
    return (
      <div className='main'>
         <Banniere />
         <Separator title={'Les services les plus demandés '}/>
      </div>
    );
}

export default Home;