import { Avatar, Box, Card, CardContent, Fab, Grid, Menu, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Add, HistoryOutlined, MenuOutlined, Send, Star, Storage } from '@material-ui/icons';
import MyContext from '../../../../../../Contextes/MyContext';
import { timeFormat } from '../../../../../../Backend/Actions/Get/timeStamp';
import { useNavigate } from 'react-router-dom';
 const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
function DemandesCard({ e ,index }) {
  const navigate = useNavigate()
  return (
    <Card style={{ cursor: 'pointer' }} onClick={
                 ()=>{
                  navigate(e.id)
                 }
                }>
      <CardContent className="p-4 text-left">
        <Typography variant="body2" className="text-blue-gray-600">
          <div className="flex">
            <div
              style={{ fontSize: '40px', backgroundColor: '#f4f5f8' }}
              className="inline-block rounded-full overflow-hidden w-14 h-14 flex items-center justify-center"
            >
              <Send />
             
            </div>
            <div className="mt-2 ml-5">
              
                <Typography variant="h6" component="div" noWrap>
                Demande {index}
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

const DemandesList = ({ data  ,  user }) => {
  const navigate = useNavigate ()
  let drawerWidth = 340;
  return (
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  
    <Box sx={{ display: 'flex', alignItems: 'center',  }}>
      <Storage />
        <Typography variant="h6" sx={{ ml: 2 }}>
         Mes demandes 
        </Typography>
        <br/> <br/> <br/>
      </Box>
      {data.length === 0 ? (
        <Card  onClick={()=>{
                   navigate("/accounts/clients/"+user.userId+"/"+user.lastName+"/Faire-une-nouvelle-demande")
          }}>
          <CardContent className="p-4 text-center">
            <Typography variant="body2">
              Effectuer votre première demande
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <>
          {data.length === 1 ? (
            <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12}>
            <DemandesCard e={data[0]} user={user} index={1}/>
            </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
             {data.map((item , index) => (
          <Grid item xs={12} md={4} sm={6} key={item.id}>
            <DemandesCard e={item} index={index+1} />
          </Grid>
        ))}
            </Grid>
          )}
        </>
      )}
    </Box>
  );
}

export default DemandesList;
