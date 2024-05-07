import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Star } from '@material-ui/icons';
import MyContext from '../../../../../../Contextes/MyContext';

function AvisCard({ e }) {
    const {myVariable , setMyVariable} = useContext(MyContext)
  return (
    <Card style={{ cursor: 'pointer' }} onClick={
                   ()=>{
                      setMyVariable(prevState => ({
                     ...prevState,
                     avisSelected: e 
                  }))}}>
      <CardContent className="p-4 text-left">
        <Typography variant="body2" className="text-blue-gray-600">
          <div className="flex">
            <div
              style={{ fontSize: '40px', backgroundColor: '#f4f5f8' }}
              className="inline-block rounded-full overflow-hidden w-14 h-14 flex items-center justify-center"
            >
              <Avatar />
            </div>
            <div className="mt-2 ml-5">
              <Typography variant="h6" component="div" noWrap>
                {e.firstName} {e.lastName}
              </Typography>
              <Typography variant="body2" noWrap>{e.avis}</Typography>
              <Typography variant="body2" noWrap>
                <Star style={{color: 'orangered'}}/>
               <Star style={{color: 'orangered'}}/>
                <Star style={{color: 'orangered'}}/>
                <Star style={{color: 'orangered'}}/>
                <Star style={{color: 'orangered'}}/>
              </Typography>

            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

const AvisList = ({ data }) => {
  let drawerWidth = 340;
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} md={6} sm={12} key={item.id}>
            <AvisCard e={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AvisList;
