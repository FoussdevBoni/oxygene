import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewTasks from './sections/NewTasks/NewTasks';
import DonesTasks from './sections/DonesTasks/DonesTasks';
import Discussions from './sections/Discussions/Discussions';
import AddForm from './sections/AddDoneTasks/AddForm';
import MyContext from '../../../../Contextes/MyContext';
import ProfilePage from './sections/Profile/Profile';

function WorkerRoutes({workerRoutes , user}) {

  const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
     const {myVariable , setMyVariable} = useContext(MyContext)
     const connectedAS = localStorage.getItem('connectedAS')

 
const components = [
  <NewTasks user={user} />,
  <DonesTasks user={user} />,
  <Discussions user={user} />,
  <AddForm user={user} />
];
  return (
   <Routes>
    {
      workerRoutes.map((route , index)=>{
        return(
           <Route
                  path={"/accounts/workers/:userId/"+route.label.replace(/[^A-Za-z0-9]/g, '-')}
           element={components[index]}
          >
          </Route>
        )
      })
    }
    <Route path={'/accounts/workers/'+userId+'/profile'} element={<ProfilePage user={user} />} >          
    </Route>


   </Routes>
  );
}

export default WorkerRoutes;