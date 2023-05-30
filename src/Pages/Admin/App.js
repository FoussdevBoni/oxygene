import React from 'react';
import Panel from './Sections/Panel';
import HeaderMain from './Sections/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/dashboard/home';
import AllUsers, { HealthWorkers } from './pages/Users/AllUsers';
import UserHome from './pages/Users/UserHome';
import { members_data } from './data/members-data';
const AdminDashboard = () => {

  return (
   <div>
      <div>
        <HeaderMain />
      </div>
         <div>
          <div style={{marginLeft:'30%', width:'70%'}}>
            <Routes>
           <Route path="admin/" exact Component={Home}>
           </Route>
           <Route path="admin/communauté" Component={UserHome}>
           </Route>
                {
                members_data.map((e)=>{
                    return(
                        <Route Component={e.render} path = {`admin/communauté/`+e.category.replace(/\s/g, '-')}>

                       </Route>
                    )
                })
            }
            </Routes>
        </div>
      </div>
     <Panel />
   </div>
  );
};

export default AdminDashboard ;
