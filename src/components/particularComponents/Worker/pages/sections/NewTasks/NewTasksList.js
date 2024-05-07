import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Add, Send, ShoppingCart, Star, Work } from '@material-ui/icons';
import MyContext from '../../../../../../Contextes/MyContext';
import ProductDetails from '../../../../../generalComponents/ProductDetails/ProductDetails';
import CommandesBox from './AchatBox';
import { timeFormat } from '../../../../../../Backend/Actions/Get/timeStamp';

function TaskCard({ e ,index }) {
    const {myVariable , setMyVariable} = useContext(MyContext)
  return (
    <Card style={{ cursor: 'pointer' }} onClick={
                   ()=>{
                      setMyVariable(prevState => ({
                     ...prevState,
                     achatSelected: e 
                  }))}}>
                    
      <CardContent className="p-4 text-left">
        <Typography variant="body2" className="text-blue-gray-600">
          <div className="flex">
            <div
              style={{ fontSize: '40px', backgroundColor: '#f4f5f8' }}
              className="inline-block rounded-full overflow-hidden w-14 h-14 flex items-center justify-center"
            >
              <Work />
             
            </div>
            <div className="mt-2 ml-5">
              
                <Typography variant="h6" component="div" noWrap>
                Tâche {index}
              </Typography>

                
              
             {
              e.statut!==undefined ? <Typography variant="body2" noWrap>
                {e.statut}
              </Typography>: <Typography variant="body2" noWrap>En attente</Typography>
             }
            </div>
          </div>
        </Typography>
         <Typography variant="body2" className="text-blue-gray-600" sx={{ bottom: 0, left: 0 }}>
          {timeFormat(e.date)}
        </Typography>
      </CardContent>
    </Card>
  );
}

const NewTasksList = ({ data  ,  user }) => {
  let drawerWidth = 340;
      const {myVariable , setMyVariable} = useContext(MyContext)

  return (
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Box sx={{ display: 'flex', alignItems: 'center',  }}>
      <ShoppingCart />
        <Typography variant="h6" sx={{ ml: 2 }}>
         Nouvelles tâches 
        </Typography>
        <br/> <br/> <br/>
      </Box>
       {
                myVariable.achatSelected!==null && (
           <ProductDetails   user={user} child={<CommandesBox user={user} />}/> 
                      )  
            }
      {data.length === 0 ? (
        <Card>
          <CardContent className="p-4 text-center">
            <Typography variant="body2">
              Faire une nouvelle commande
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <>
          {data.length === 1 ? (
            <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12}>
            <TaskCard e={data[0]} user={user} index={1}/>
            </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
             {data.map((item , index) => (
          <Grid item xs={12} md={6} sm={12} key={item.id}>
            <TaskCard e={item} index={index+1} />
          </Grid>
        ))}
            </Grid>
          )}
        </>
      )}
    </Box>
  );
}

export default NewTasksList;
