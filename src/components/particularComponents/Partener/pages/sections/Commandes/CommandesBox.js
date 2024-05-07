import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Fab, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../../../../../../Contextes/MyContext';
import img6 from '../../../../../../assets/img/portfolio/portfolio-6.jpg';
import img7 from '../../../../../../assets/img/portfolio/portfolio-7.jpg';
import img8 from '../../../../../../assets/img/portfolio/portfolio-8.jpg';
import { ChatBubble } from '@material-ui/icons';
import { timeFormat } from '../../../../../../Backend/Actions/Get/timeStamp';
import { ref, set } from 'firebase/database';
import { db } from '../../../../../../Backend/Data/config';

function CommandesBox({ user, showDetails, selected }) {
  const { myVariable, setMyVariable } = useContext(MyContext);
  const valideCommande = (action)=>{
    const dataRef = ref(db, 'commandes/clients/'+myVariable.commandeSelected.client.userId+'/'+myVariable.commandeSelected.cmdKey+'/statut')

    set(dataRef , action).then(
      ()=>{
        set(ref(db, 'commandes/fournisseurs/'+myVariable.commandeSelected.product.
        productPoster.userId+'/'+myVariable.commandeSelected.cmdKey+'/statut') , action)
      }
    )
  }
    useEffect(()=>{


     return ()=>{
          setMyVariable((prevState) => ({
                ...prevState,
                commandeSelected: null,
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
                commandeSelected: null,
              }));
            }}
          >
            Commandes
          </NavLink>
          <Typography color="text.primary">{myVariable.commandeSelected.cmdId}</Typography>
        </Breadcrumbs>
      </div><br/><br/>
      
      <Box key={myVariable.commandeSelected.cmdId} className="h-auto flex" sx={{ justifyContent: 'space-between' }}>
        <Grid spacing={2} container>
          <Grid item xs={12}  md={6} sm={8}>
            <Card>
              <CardMedia
                component="img"
                alt=""
                height="200"
                image={myVariable.commandeSelected.product.productImage}
                sx={{ objectFit: 'cover' }}
              /><br/><br/>
              
            </Card><br/><br/>
             {
                myVariable.commandeSelected.details!=='' ?
                 <div>
                  <Typography variant='b'>
                       <b>
                        Les instructions du clients
                       </b>
                   </Typography><br></br>
                    <Typography variant='p'>
                     {myVariable.commandeSelected.details}
                   </Typography>
                 </div>:null
               }
               <Typography variant='b'>
                       <b>
                        Informations du client
                       </b>
                </Typography><br></br>
                   <List>
                   <ListItem >
                     <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
                     <b>Nom :</b> {myVariable.commandeSelected.client.lastName} {myVariable.commandeSelected.client.firstName}
                    </ListItemText>
                   </ListItem>

                   <ListItem >
                     <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
                     <b>Contact :</b> {myVariable.commandeSelected.client.phone} 
                    </ListItemText>
                   </ListItem>
                    {
                      typeof myVariable.commandeSelected.locality ==='object' ?
                      <ListItem >
                     <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
                     <b>Adresse du client</b> <br></br> {myVariable.commandeSelected.locality.dep}/ {myVariable.commandeSelected.locality.city} / {myVariable.commandeSelected.locality.arr}
                    </ListItemText>
                   </ListItem>: null
                    }
                  </List>

          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Box>
        <List>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>ID de la commande:</b> {myVariable.commandeSelected.cmdId}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Date:</b> {timeFormat(myVariable.commandeSelected.date)}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Produit:</b> {myVariable.commandeSelected.product.productName}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Quantité:</b> {myVariable.commandeSelected.quantity}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Prix unitaire:</b> {myVariable.commandeSelected.product.productPrice} F CFA
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Montant total:</b> {myVariable.commandeSelected.product.productPrice*myVariable.commandeSelected.quantity} F CFA
          </ListItemText>
        </ListItem>
      </List>
         <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 2 }}>
        <Box >
          <Button variant="contained" color="primary"
        onClick={()=>{
          valideCommande('validée')
        }}
        >
          Valider
        </Button>
        </Box>
        <Box sx={{marginLeft: '4px'}}>
          <Button variant="contained" color="secondary"
        onClick={
          ()=>{valideCommande('Rejetée')}
        }
        >
          Rejeter
        </Button>
        </Box>
        </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CommandesBox;
