import React, { useContext, useState } from 'react';
import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Avatar, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ExitToApp } from '@material-ui/icons';
import { logo } from '../../../data-center/data';
import MyContext from '../../../Contextes/MyContext';
import MyDrawer from './Drawer2';

let drawerWidth = 340;

 const url = window.location.href
     const path = new URL(url).pathname;
     const parts = path.split('/'); // Diviser la chaîne en segments en utilisant '/'
     const userId = parts[3];
export const Menu = ({onNavigate , menuItems ,user , logout , window}) =>{
   const [activeIndex, setActiveIndex] = useState(0);
         const {myVariable , setMyVariable} = useContext(MyContext)

      const handleDrawerToggle = () => {
      setMyVariable(prevState => ({
                     ...prevState,
                     open: false 
                  })) 
               };
      const userType = localStorage.getItem('connectedAS')
    
 

   const container = window !== undefined ? () => window().document.body : undefined;
     const navigate = useNavigate();
   
   const handleMenuItemClick = (index , label , route) =>{
        if (userType==='admin') {
             navigate("/accounts/"+userType+"/"+user.userId+"/"+user.name+"/"+label)
         }else if(userType==='partener'){
               navigate("/accounts/"+userType+"s/"+user.userId+"/"+user.companyName+"/"+label)
            
             }else  if(userType==='client'){
               navigate("/accounts/"+userType+"s/"+user.userId+"/"+user.lastName+"/"+label)

              }else  if(userType==='worker'){
                  navigate("/accounts/"+userType+"s/"+user.userId+"/"+label)

              }else  if(userType===''){
                     navigate(route)

                 }  if(userType===null){
                     navigate(route)

                 } 

        }
       
     
 

 
  return  (
    <div>
       
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
               onClick={
                ()=>{
                  handleMenuItemClick(index, item.label.replace(/[^A-Za-z0-9]/g, '-') , item.route)
                  handleDrawerToggle()
                  setMyVariable(prevState => ({
                     ...prevState,
                     open: false 
                  })) 
                }
               }
            >
              <ListItemIcon sx={{ color: { xs: 'black', sm: 'black' , md: 'white' , xl:'white' , lg:'white' }}}
>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
    </div>
  );
 }



const AppDrawer = ({ menuItems, logout, user  })=>{
      const {myVariable , setMyVariable} = useContext(MyContext)

    
     const DrawerMenu = (props) => {

  return (
 

    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
         
       
        {
          myVariable.hiddenDrawer ? 
            <MyDrawer menuItems={menuItems} logout={logout} user={user}/>: null
        }
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none' , md: 'block' , xl:'block' , lg:'block'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,    backgroundColor: 'black', // Thème sombre
          color: 'white', },
          }}
          open
        >
           <Toolbar style={{ backgroundColor: 'black' , width: '100%' }}>
        <div style={{ width: '100px' }}>
          <img src={logo} alt="Logo" />
        </div>
      </Toolbar>
      <Divider style={{backgroundColor:'white'}}/>
          <Menu logout={logout} menuItems={menuItems} user={user}/>
        </Drawer>
      </Box>
  );
};


return (
    <DrawerMenu />
)
}

export default AppDrawer ;