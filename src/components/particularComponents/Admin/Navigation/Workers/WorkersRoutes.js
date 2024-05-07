import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { onValue, ref } from 'firebase/database';
import { db } from '../../../../../Backend/Data/config';
import WorkerDetails from '../../WorkerDetail/WorkerDetails';
import UpDateWorker from '../../AdminPage/Workers/UpdateWorker';
import MyModal from '../../../../generalComponents/MyModal/MyModal';


function WorkersRoutes({adminId}) {
      const [drivers , setDrivers] = useState([])
     const [payMethods , setPayMethods] = useState([])

 useEffect(()=>{
     const dataRef = ref(db, 'clients/workers');
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
                drivers.map((driver)=>{
                    return(
                        <Route path={`admin/${adminId}/${driver.id}`} element={<WorkerDetails driver={driver} />}></Route>
                    )
                })
            }
              {
                drivers.map((driver)=>{
                    return(
                        <Route path={`admin/${adminId}/${driver.id}/modifier-le-profile`} element={<MyModal children={<UpDateWorker driver={driver} />}/>}></Route>
                    )
                })
            }
    
        </Routes>
    );
}

export default WorkersRoutes;