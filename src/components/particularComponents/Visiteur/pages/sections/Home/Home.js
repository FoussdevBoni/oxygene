import React, { useContext, useEffect } from 'react';
import Banniere from './Banniere/Banniere';
import DemandesZone from './DemandesZone/DemandesZone';
import UseGuide from './UseGuide/UseGuide';
import Separator from '../../../../../generalComponents/Elements/Separator';
import MyContext from '../../../../../../Contextes/MyContext';

function Home(props) {

    const {myVariable, setMyVariable }= useContext(MyContext)

    useEffect(()=>{
           setMyVariable(prevState => ({
                 ...prevState,
              hidden: false
         }));
    },[])
    return (
        <div>
           <Banniere />
           <br/>
           <Separator style={{fontSize: '24px'}}
           title={'Les services les plus demandés dans votre zone'}/> <br/>
           <DemandesZone />   <br/>
            <Separator style={{fontSize: '24px'}}
           title={'Comment utiliser notre application'}/>    <br/>
           <UseGuide />   <br/>    <br/>
        </div>
    );
}

export default Home;