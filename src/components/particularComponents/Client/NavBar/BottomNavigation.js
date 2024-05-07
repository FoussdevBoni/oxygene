import  React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { ListItemButton, ListItemIcon, Menu, Popover, Typography , List } from '@mui/material';
import { AddCircle, MenuOutlined, Work } from '@material-ui/icons';

import { useNavigate } from 'react-router-dom';
import MyContext from '../../../../Contextes/MyContext';
import ProductDetails from '../../../generalComponents/ProductDetails/ProductDetails';
import { demandersItems } from '../../Demandeur/itemsMenu';


export default function ClientBottomNavigation({user}) {
  const navigate = useNavigate()
   const Comptes = ()=>{
     const navigate = useNavigate()
    return (
        <List>
          <ListItem key={'Intervenant'} disablePadding>
            <ListItemButton
           onClick={()=>{
              navigate('connexion/worker')
              setOpenModal(false)
           }}
            >
       <ListItemIcon sx={{ color: { xs: 'black', sm: 'black' , md: 'white' , xl:'white' , lg:'white' }}}
>                <Work /> 
              </ListItemIcon>
              <ListItemText primary={'Intervenant'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Fournisseur de produits'} disablePadding>
            <ListItemButton
           onClick={()=>{
              navigate('connexion/partener')
                            setOpenModal(false)

           }}
            >
       <ListItemIcon sx={{ color: { xs: 'black', sm: 'black' , md: 'white' , xl:'white' , lg:'white' }}}
>                <Work /> 
              </ListItemIcon>
              <ListItemText primary={'Fournisseur de produits'} />
            </ListItemButton>
          </ListItem>
         

          
        
      </List>
    )
   }
  const [value, setValue] = useState(0);
  const ref = React.useRef(null);
   const { myVariable , setMyVariable } = useContext(MyContext)
   const [openModal , setOpenModal]= useState(false)
  
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
     {
        openModal ? <ProductDetails child={<Comptes />} setContentData={()=>{
            setOpenModal(false)
            return null}}/>:null
     }
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          
          onChange={(event, newValue) => {
           
            setValue(newValue);
          }}
        >
        
          <BottomNavigationAction label="Menu" icon={<MenuOutlined />} 
           onClick={() => {
            setMyVariable((prevState) => ({
              ...prevState,
              open: true,
            }));
          }}
          />
           
          <BottomNavigationAction label="Mes demandes" icon={<Work />} 
          onClick={
            ()=>{
              navigate("/accounts/clients/"+user.userId+"/"+user.lastName+"/"+demandersItems[0].label.replace(/[^A-Za-z0-9]/g, '-'))
            }
          }
          />
          <BottomNavigationAction label="Demander" icon={<AddCircle />}
           onClick={
            ()=>{
              navigate("/accounts/clients/"+user.userId+"/"+user.lastName+"/"+demandersItems[1].label.replace(/[^A-Za-z0-9]/g, '-'))
            }
          }
          >

          </BottomNavigationAction>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}



