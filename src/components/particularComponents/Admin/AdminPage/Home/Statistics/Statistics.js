import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function StatisticsCard({e}) {
      const { number } = e;
  const [currentNumber, setCurrentNumber] = useState(0);
  const maxNumber = Math.min(number, 1000); // Limite maximale de l'animation

    useEffect(() => {
    const incrementDuration = Math.ceil(5000 / maxNumber); // Durée totale de 5 secondes

    const intervalId = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber >= maxNumber) {
          clearInterval(intervalId);
          return number;
        }
        return prevNumber + 1;
      });
    }, 0);

    return () => {
      clearInterval(intervalId);
    };
  }, [maxNumber, number]);
    return (
      <Box>
         <Card  style={{cursor:'pointer'}}>
      <CardContent className="p-4 text-left">
    <Typography variant="small" className="font-normal text-blue-gray-600">
           <div className="flex">
             <h6 className="font-bold px-2" style={{
                borderRight:'2px solid #92949c'
             }}>
              {e.activity}
            </h6>
            <span className="ml-2">Aujourd'hui</span>
           </div><br/>
           <div className="flex">
             <div style={{fontSize:'40px', backgroundColor:'#f4f5f8', color: e.color}} className="inline-block rounded-full overflow-hidden w-14 h-14  flex items-center justify-center ">
            <ion-icon name= {e.icon+'-outline'}></ion-icon>
            </div>
             <div className="font-bold mt-2 ml-5 text-3xl">
            {currentNumber}
             </div>
           </div>
        </Typography>
    </CardContent>
    </Card>
      </Box>
    );
}

const Statistics = ({data}) =>{
    let  drawerWidth = 340
   return (
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
         >         <Grid container spacing={2}>
           {
             data.map((item)=>{
                return(
                    <Grid item xs={12} md={6} sm= {6}>
                        <StatisticsCard  e={item}/>
                    </Grid>
                )
             })
           } 
         </Grid>

    </Box>
   )
}
export default Statistics;