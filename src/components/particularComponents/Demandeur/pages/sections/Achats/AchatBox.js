import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Fab, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../../../../../../Contextes/MyContext';
import img6 from '../../../../../../assets/img/portfolio/portfolio-6.jpg';
import img7 from '../../../../../../assets/img/portfolio/portfolio-7.jpg';
import img8 from '../../../../../../assets/img/portfolio/portfolio-8.jpg';
import { ChatBubble } from '@material-ui/icons';
import BuyProduct from '../../../../../generalComponents/ShoppingForm/ShoppingForm';
import UpdateCommande from '../../../../../generalComponents/ShoppingForm/UpdateCommande';
import { timeFormat } from '../../../../../../Backend/Actions/Get/timeStamp';
import ProductDetails from '../../../../../generalComponents/ProductDetails/ProductDetails';
import PaymentForm from '../Payement/PayForm';
import ChatForm from '../../../../../generalComponents/Chat/ChatForm';

function CommandesBox({ user, showDetails, selected }) {
  const { myVariable, setMyVariable } = useContext(MyContext);
  const[ openChat , setOpenChat ]= useState(false)
    useEffect(()=>{


     return ()=>{
          setMyVariable((prevState) => ({
                ...prevState,
                achatSelected: null,
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
      <Fab  variant="extended" size="medium" color="primary" aria-label="add"
       onClick={()=>{
        setOpenChat(true)
       }}
      >
         Envoyer un message à {myVariable.achatSelected.product.productPoster.companyName}
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
                achatSelected: null,
              }));
            }}
          >
            Commandes
          </NavLink>
          <Typography color="text.primary">{myVariable.achatSelected.cmdId}</Typography>
        </Breadcrumbs>
      </div><br/><br/>
      
      <Box key={myVariable.achatSelected.cmdId} className="h-auto flex" sx={{ justifyContent: 'space-between' }}>
         {
      openChat && (<ProductDetails child={<ChatForm user={user} receiver={myVariable.achatSelected.product.productPoster}/>} setContentData={()=>{return false}}/>)
     }
        <Grid spacing={2} container>
          <Grid item xs={12}  md={6} sm={8}>
            <Card>
              <CardMedia
                component="img"
                alt=""
                height="200"
                image={myVariable.achatSelected.product.productImage}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Box>
        <List>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>ID de la commande:</b> {myVariable.achatSelected.id}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Date:</b> {timeFormat(myVariable.achatSelected.date)}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Produit:</b> {myVariable.achatSelected.product.productName}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Quantité:</b> {myVariable.achatSelected.quantity}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Prix unitaire:</b> {myVariable.achatSelected.product.productPrice} F CFA
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Montant total:</b> {myVariable.achatSelected.product.productPrice*myVariable.achatSelected.quantity} F CFA
          </ListItemText>
        </ListItem>
        {
            myVariable.achatSelected.statut!==undefined ? 
              <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Statut de la commande:</b> {myVariable.achatSelected.statut}
          </ListItemText>
        </ListItem>
            :   <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Statut de la commande:</b> En attente
          </ListItemText>
        </ListItem>
        }
      </List>
         <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 2 }}>
        {
             myVariable.achatSelected.statut===undefined ? 
            <Button variant="contained" color="primary"
        onClick={

            ()=>{
                 setMyVariable(prevState => ({
                     ...prevState,
                     openForm: true 
               }))
            }
        }
        >
          Modifier la commande
        </Button>:   <Button variant="contained" color="primary"
        onClick={

            ()=>{
                 setMyVariable(prevState => ({
                     ...prevState,
                     openForm: true 
               }))
            }
        }
        >
          Effectuer le payement 
        </Button> 
        }
        </Box>
            </Box>
          </Grid>
        </Grid>
          {
                        myVariable.openForm &&   myVariable.achatSelected.statut===undefined && (
                            <UpdateCommande user={user} commande={myVariable.achatSelected}/>
                        )
          }

          {
                        myVariable.openForm &&   myVariable.achatSelected.statut!==undefined && (
                            <ProductDetails user={user} setContentData={()=>{return null}} child={<PaymentForm user={user} commande={ myVariable.achatSelected}/>} se />
                        )
          }
      </Box>
    </Box>
  );
}

export default CommandesBox;
