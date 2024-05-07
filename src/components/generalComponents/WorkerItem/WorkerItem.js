import { Avatar, Box, Button, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import RatingNoEdit from '../Rating/OnlyRead';

function WorkerItem({driver , actionButton , adminId , user}) {
    return (
      <Card>
            <Avatar src={driver.profile} alt={`${driver.firstName} ${driver.lastName}`}   sx={{
                width: '100px', // Ajustez la largeur de l'Avatar selon vos besoins
                height: '100px', // Ajustez la hauteur de l'Avatar selon vos besoins
                margin: '0 auto', // Pour centrer l'Avatar horizontalement
                display: 'block',
                marginTop: 2 // Pour centrer l'Avatar horizontalement
              }}/>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {`${driver.firstName} ${driver.lastName}`}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <b>Contact</b>: {driver.phoneNumber}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <b>Localisation</b>: {driver.city}
              </Typography>
               
              {actionButton}
            </CardContent>
          </Card>
    );
}

export default WorkerItem;