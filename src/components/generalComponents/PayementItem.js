import { AccountBalance, Description, History, Money, Person } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

function PayementItem({payement , index}) {
    return (
        <Card>
            <CardContent>
                   <List>
        <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Money />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Méthode de payement" secondary={payement.payMethod.nom} />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <History />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Date d'envoie " secondary={payement.date} />
      </ListItem>
       <ListItem>
     <ListItemAvatar>
           <Avatar>
             <Person />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Envoyeur'} secondary={payement.author.nomPrenom} />
      </ListItem>
      
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Person />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Chauffeur choisi'} secondary={payement.driver.firstName+'   '+payement.driver.lastName} />
      </ListItem>
      </List>
</CardContent>
<CardActions>
    <Typography>
        Payement {index+1}
    </Typography>
</CardActions>
 </Card>
    );
}

export default PayementItem;