import React, { useContext, useEffect, useState } from 'react';
import { ChatBubble } from '@material-ui/icons';
import { Box, Breadcrumbs, Button, Card, CardMedia, Fab, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ref, remove } from 'firebase/database';
import MyContext from '../../../../../../Contextes/MyContext';
import BuyProduct from '../../../../../generalComponents/ShoppingForm/ShoppingForm';
import ProductDetails from '../../../../../generalComponents/ProductDetails/ProductDetails';
import ChatForm from '../../../../../generalComponents/Chat/ChatForm';

function ProductsBox({user}) {
      const url = window.location.href
       const path = new URL(url).pathname;
      const parts = path.split('/'); // Diviser la chaîne en segments en utilisant '/'
     const userId = parts[3];
    const {myVariable , setMyVariable} = useContext(MyContext)
    const[ openChat , setOpenChat] = useState(false)
    useEffect(()=>{
      return ()=>{
          setMyVariable((prevState) => ({
                ...prevState,
                productSelected: null,
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
      <Fab color="primary" aria-label="add" onClick={()=>{
        setOpenChat(true)
      }}>
        <ChatBubble />
      </Fab>
    </Box>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink
            onClick={() => {
              setMyVariable((prevState) => ({
                ...prevState,
                productSelected: null,
              }));
            }}
          >
            Retour
          </NavLink>
          {
            myVariable.productSelected!==null &&(
            <Typography color="text.primary">{myVariable.productSelected.productName}</Typography>
            )
          }
        </Breadcrumbs>
      </div><br/><br/>
      
     {
        myVariable.productSelected!==null && (
             <Box key={myVariable.productSelected.productName} className="h-auto flex" sx={{ justifyContent: 'space-between' }}>
        <Grid spacing={2} container>
          <Grid item xs={12}  md={6} sm={8}>
            <Card>
              <CardMedia
                component="img"
                alt=""
                height="200"
                image={myVariable.productSelected.productImage}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Box>
        <List>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Nom du produit:</b> {myVariable.productSelected.productName}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Date de mise en vente:</b> {myVariable.productSelected.date}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Produit:</b> {myVariable.productSelected.product}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Quantité disponible:</b> {myVariable.productSelected.productQuantity}
          </ListItemText>
        </ListItem>
        <ListItem >
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            <b>Prix unitaire:</b> {myVariable.productSelected.productPrice} F CFA
          </ListItemText>
        </ListItem>
      </List>
         <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={

            ()=>{
                 setMyVariable(prevState => ({
                     ...prevState,
                     openForm: true 
               }))
            }
        }>
          Commander le produit
        </Button>
        </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
        )
     }
      {
                        myVariable.openForm && (
                            <BuyProduct user={user} selected={myVariable.productSelected}/>
                        )
     }
     {
      openChat && (
        <ProductDetails child={<ChatForm user={user} receiver={myVariable.productSelected.productPoster} />} />
      )
     }
    </Box>
    );
}

export default ProductsBox;