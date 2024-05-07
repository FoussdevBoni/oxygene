import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Fab, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../../../../../../Contextes/MyContext';
import img6 from '../../../../../../assets/img/portfolio/portfolio-6.jpg';
import img7 from '../../../../../../assets/img/portfolio/portfolio-7.jpg';
import img8 from '../../../../../../assets/img/portfolio/portfolio-8.jpg';
import { ChatBubble } from '@material-ui/icons';
import Modal from '../../../../../generalComponents/Modal/Modal';

function VentesBox({ user, showDetails, selected }) {
  const { myVariable, setMyVariable } = useContext(MyContext);
   useEffect(()=>{


     return ()=>{
          setMyVariable((prevState) => ({
                ...prevState,
                selected: null,
              }))
     }   
    }, [])
  return (
    <Box sx={{ p: 3 }}>
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
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink
            underline="hover"
            color="inherit"
            href="/"
            onClick={() => {
              setMyVariable((prevState) => ({
                ...prevState,
                selected: null,
              }));
            }}
          >
            Ventes
          </NavLink>
          <Typography color="text.primary">{myVariable.selected.cmdId}</Typography>
        </Breadcrumbs>
      </div><br/><br/>
      
      <Box key={myVariable.selected.cmdId} className="h-auto flex" sx={{ justifyContent: 'space-between' }}>
        <Grid spacing={2} container>
          <Grid item xs={12}  md={6} sm={8}>
            <Card>
              <CardMedia
                component="img"
                alt=""
                height="200"
                image={img6}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Box>
        <List>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>ID de la commande:</b> {myVariable.selected.cmdId}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Date:</b> {myVariable.selected.date}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Produit:</b> {myVariable.selected.product}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Quantité:</b> {myVariable.selected.quantity}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Prix unitaire:</b> {myVariable.selected.price} F CFA
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Montant total:</b> {myVariable.selected.amount} F CFA
          </ListItemText>
        </ListItem>
      </List>
         <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 2 }}>
        <Button variant="contained" color="primary">
          Valider
        </Button>
        </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Modal />
    </Box>
  );
}

export default VentesBox;
