import { Avatar, Box, Button, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

function UserItem({user , actionButton}) {
    return (
      <Card>
            <Avatar src={user.photoUrl} alt={`${user.firstName} ${user.lastName}`}   sx={{
                width: '100px', // Ajustez la largeur de l'Avatar selon vos besoins
                height: '100px', // Ajustez la hauteur de l'Avatar selon vos besoins
                margin: '0 auto', // Pour centrer l'Avatar horizontalement
                display: 'block',
                marginTop: 2 // Pour centrer l'Avatar horizontalement
              }}/>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {user.nomPrenom}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <b>Contact</b>: {user.phone}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <b>Wilaya</b>: {user.wilaya}
              </Typography>
            
              {actionButton}
            </CardContent>
          </Card>
    );
}

export default UserItem;