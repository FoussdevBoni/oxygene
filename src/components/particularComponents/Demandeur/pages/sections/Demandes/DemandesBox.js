import { AlarmOn, Description, Equalizer, Person, Room, Schedule, SignalCellular0Bar, Timer } from '@material-ui/icons';
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { timeFormat } from '../../../../../../Backend/Actions/Get/timeStamp';
import { useNavigate } from 'react-router-dom';

function DemandesBox({demande , user}) {
    const navigate = useNavigate()
    return (
        <Box sx={{minHeight: window.innerHeight}}>
            <br/><br/>
           <List>
                <ListItem>
                  <ListItemAvatar>
                   <Avatar>
                     <Person />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="Demandeur de services" secondary={user.email} />
               </ListItem>
               <ListItem>
                  <ListItemAvatar>
                   <Avatar>
                     <Room />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="Lieu de la demande" secondary={'Banikaani'} />
               </ListItem>
                <ListItem>
                  <ListItemAvatar>
                   <Avatar>
                     <Schedule />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="Date de la demande" secondary={timeFormat(demande.date)} />
               </ListItem>
               <ListItem>
                  <ListItemAvatar>
                   <Avatar>
                     <Equalizer />
                   </Avatar>
                 </ListItemAvatar>
                 {
                    demande.statut!==undefined ?  <ListItemText primary="Statut de la demande" secondary={demande.statut} />:  <ListItemText primary="Statut de la demande" secondary={'En attente'} />
                 }
               </ListItem>
                <ListItem>
                  <ListItemAvatar>
                   <Avatar>
                     <Description />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="description de ma demande" secondary={demande.details} />
                 
               </ListItem>
                <ListItem>
                  <ListItemAvatar>
                   <Avatar>
                     <Timer />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="Temps de travail estimé" secondary={demande.estimeTime} />
                 
               </ListItem>
                 <ListItem>
                  <ListItemAvatar>
                   <Avatar>
                     <AlarmOn />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary="Heure du travail" secondary={demande.hour} />
                 
               </ListItem>
           </List>
           <List>
            <ListItem>
                  <h2>
                    Les serices demandés
                  </h2>
            </ListItem>
            <ul>
               {
             demande.selectedServices.map((service)=>{
                return(
                  <li>
                    {service}
                  </li>  
                )
             })
            }
            </ul><br/>
            <ListItem>
                <h2>
               Montant à payer
               </h2>
               
            </ListItem>
             <ListItem>
                 <span>
                  ({parseFloat(demande.estimeTime)*1000} FCFA)
                 </span>
             </ListItem>
          
         </List>
           
            <br /><br />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button  color='primary' variant='contained' sx={{ flex: 1, marginRight: '0.5rem'}}  onClick={()=>{
            navigate('effectuer-le-payement')
        }} disabled={demande.statut!=='validée'}>
          Payer
        </Button>
        <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{ backgroundColor:'orangered' , color: 'white'}} variant='contained'
         disabled={demande.statut==='validée'}
        >
          Supprimer
        </Button>
      </Box>
        </Box>
    );
}

export default DemandesBox;