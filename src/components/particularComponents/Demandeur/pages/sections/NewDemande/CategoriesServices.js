import { Avatar, Box, Card, CardContent, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useContext } from 'react';
import MyContext from '../../../../../../Contextes/MyContext';
import Separator from '../../../../../generalComponents/Elements/Separator';

function CategoriesServices({categories}) {
    const{ myVariable , setMyVariable} = useContext(MyContext)

    const CatCard = ({cat})=>{
     return (
        <Box>
         <Card  style={{cursor:'pointer', padding: 10}}
          onClick={
                   ()=>{
                      setMyVariable(prevState => ({
                     ...prevState,
                     selected: cat 
                  }))
                   }
         }
         >
          <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
             <div style={{width:'45px',height: '45px'}}></div>
             <img src={cat.icon} style={{width:'45px',height: '45px'}} alt={cat.name}/>
              <div style={{width:'45px',height: '45px'}}></div>

          </Box>
          <Typography variant='div' component={'span'} textAlign={'center'} width={'100%'}>
              {cat.name}
          </Typography>
         </Card>
      </Box>
    );
    }
  

  return (
     <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
         >     
         <br></br><br></br>
         <Separator title={'Choisir une catégorie'} style={{fontSize: '21px'}}/>
        <Grid container spacing={2} marginTop={8}>
           {
             categories.map((item)=>{
                return(
                    <Grid item xs={12} md={4} sm= {6}>
                        <CatCard  cat={item}/>
                    </Grid>
                )
             })
           } 
         </Grid>

    </Box>
  )
}

export default CategoriesServices;