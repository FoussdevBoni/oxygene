import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { onValue, ref } from 'firebase/database';
import { db } from '../../../../../Backend/Data/config';
import MyModal from '../../../../generalComponents/MyModal/MyModal';
import WorkerDetails from '../../WorkerDetail/WorkerDetails';
import UpDateWorker from '../../AdminPage/Workers/UpdateWorker';
import UserDetails from '../../UserDetails/UserDetails';


function WorkersRoutes({adminId}) {
      const [users , setDrivers] = useState([])

 useEffect(()=>{
     const dataRef = ref(db, 'users/clients');
        onValue(dataRef, (snapshot) => {
          const usersData = snapshot.val();

                      console.log(usersData)

          if (usersData) {
          
            // Convertir les données de la base de données en tableau
            const data = Object.entries(usersData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
             console.log()

            setDrivers(data)
          }
        });     
},[])
    return (
        <Routes>
            {
                users.map((driver)=>{
                    return(
                        <Route path={`admin/${adminId}/${driver.id}`} element={<UserDetails driver={driver} />}></Route>
                    )
                })
            }
              {
                users.map((driver)=>{
                    return(
                        <Route path={`admin/${adminId}/${driver.id}/modifier-le-profile`} element={<MyModal children={<UpDateWorker driver={driver} />}/>}></Route>
                    )
                })
            }
    
        </Routes>
    );
}

export default WorkersRoutes;