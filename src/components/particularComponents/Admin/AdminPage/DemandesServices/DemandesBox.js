import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Box, ListItemButton, ListItemIcon, Fab } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import { ArrowBack, ChatBubble, ChevronLeft, ChevronRight, Person } from '@material-ui/icons';
import { ref, set } from 'firebase/database';
import { db } from '../../../../../Backend/Data/config';

const ScrollableList = styled(List)({
  display: 'flex',
  overflowX: 'auto',
  minWidth: '100%',
  flexDirection: 'row', // Ajout de la propriété pour aligner horizontalement les profils
  position: 'relative', // Ajout de la position relative pour positionner les boutons de défilement
});

const ProfileItem = styled(ListItem)({
  flex: '0 0 200px',
  marginRight: '10px',
  scrollSnapAlign: 'start',
});

const profiles = [
  {
    name: 'Jane Smith',
    zone: 'Zone 1',
    avatar: 'avatar1.jpg',
  },
  {
    name: 'Robert Johnson',
    zone: 'Zone 2',
    avatar: 'avatar2.jpg',
  },
  {
    name: 'Emily Davis',
    zone: 'Zone 3',
    avatar: 'avatar3.jpg',
  },
  // Ajoutez ici d'autres profils
];

const DemandesBox = ({demandeSelected}) => {
    const validate = (action)=>{
const dataRef1 = ref(db, 'demandes/'+demandeSelected.sender.userId+'/'+
demandeSelected.dmdKey+'/statut')
const dataRef2 = ref(db, 'demandes/all/'+
demandeSelected.dmdKey+'/statut')

set(dataRef1 , action)
set(dataRef2 , action)

}
     const renderProfileItems = () => {
    return profiles.map((profile, index) => (
      <ProfileItem key={index}>
        <Card>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={profile.name} src={profile.avatar} />
            </ListItemAvatar>
            <ListItemText primary={profile.name} secondary={profile.zone} />
          </ListItem>
        </Card>
      </ProfileItem>
    ));
  };

  return (
    <Grid container spacing={2}>
     <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}
    >
      <Fab color="primary" aria-label="add">
        <ChatBubble />
      </Fab>
    </Box>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt="Avatar" src={demandeSelected.sender.profile} />
              </Grid>
              <Grid item>
                <Typography variant="h6">{demandeSelected.sender.firstName} {demandeSelected.sender.lastName} </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br /><br />
        <Card>
          <CardContent>
            <Typography variant="subtitle1">
                <List>
            <ListItem key={''} disablePadding>
              <ListItemIcon style={{color:'white'}}>
               <Avatar />
              </ListItemIcon>
              <ListItemText primary={<b>Profile du demandeur</b>} />
          </ListItem>
                </List>
             </Typography> 
            <Typography>
              <strong>Nom:</strong> {demandeSelected.sender.lastName}
            </Typography>
            <Typography>
              <strong>Prénom:</strong> {demandeSelected.sender.firstName} 
            </Typography>
            <Typography>
              <strong>Email:</strong> {demandeSelected.sender.email} 
            </Typography>
            <Typography>
              <strong>Téléphone:</strong> {demandeSelected.sender.phone} 
            </Typography>
            
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1">Informations de la demande</Typography>
            <Typography>
              <strong>Services demandés</strong> <br />
             {
                demandeSelected.selectedServices.map((service)=>{
                    return <div>
                        {service}
                    </div>
                })
             }
            </Typography>
              <Typography>
              <strong>Lieu de la demande</strong><br/>
              {demandeSelected.location.dep} /  {demandeSelected.location.city}  /  {demandeSelected.location.arr} 
            </Typography>
            <Typography>
              <strong>Détails de la demande</strong><br/>
              {demandeSelected.details}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <Button variant="contained" color="primary"
                onClick={()=>{
                    validate('validée')
                }}
                >
                  Valider
                </Button>
              </Box>
              <Box sx={{ marginLeft: '4px' }}>
                <Button variant="contained" color="secondary"  onClick={()=>{
                    validate('refusée')
                }}
                >
                  Refuser
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <ScrollableList className='container'>
          <Button
            sx={{
              position: 'absolute',
              left: '5px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
            onClick={() => {
              const scrollContainer = document.querySelector('#scrollContainer');
              scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
            }}
          >
            <ChevronLeft></ChevronLeft>
          </Button>
          <div id="scrollContainer" style={{ overflowX: 'auto', display: 'flex' }}>
            {renderProfileItems()}
          </div>
          <Button
            sx={{
              position: 'absolute',
              right: '5px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
            onClick={() => {
              const scrollContainer = document.querySelector('#scrollContainer');
              scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
            }}
          >
            <ChevronRight />
          </Button>
        </ScrollableList>
      </Grid>
    </Grid>
  );
 
};

export default DemandesBox;
