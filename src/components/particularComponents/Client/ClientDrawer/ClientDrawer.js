import React, { useContext, useEffect, useState } from 'react';
import { Modal, TextField, Button, Container, Grid, Typography, Slide, Box, Toolbar, Divider, Avatar } from '@mui/material';
import { demandersItems } from '../../Demandeur/itemsMenu';
import { Menu } from '../../../generalComponents/Drawer/Drawer';
import MyContext from '../../../../Contextes/MyContext';
import { logo } from '../../../../data-center/data';
import { ChatBubble, Money, Notifications, Star } from '@material-ui/icons';



const ClientMobileDrawer = ({user }) => {
const clientMenuItems =  [
     { icon: <ChatBubble />, label: 'Discussions', route: 'chat', },
       { icon: <Notifications />, label: 'Notifications', route: 'notifications', },
    { icon: <Star />, label: 'Avis', route: 'avis',  },

    { icon: <Money />, label: 'Payements', route: 'payements',  },
      { icon: <Avatar src={user.profile} />, label: 'Profile', route: 'chat', },
   ]

 const {myVariable , setMyVariable } = useContext(MyContext)

 const [open ,setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
   setMyVariable((prevState) => ({
              ...prevState,
              open: false,
            }));
  };
   useEffect(()=>{
    setOpen(myVariable.open)
   },[])

 
  return (
    <Box >
      <Modal open={myVariable.open} onClose={handleClose} closeAfterTransition>
        <Slide direction="right" in={myVariable.open} timeout={500}>
        <Container
  maxWidth="sm"
  style={{
    backgroundColor: 'white',
    position: 'fixed',
    left: 0,
    top: 0,
    padding: 0,
    bottom: 0,
    width: "90%",
  }}
>
     <Toolbar style={{ backgroundColor: 'black' , width: '100%', 
    left: 0,
    right: 0,
    top: 0,
    
     }}>
        <div style={{ width: '100px' }}>
          <img src={logo} alt="Logo" />
        </div>
      </Toolbar>
      <Divider style={{backgroundColor:'white'}}/>
 <Menu menuItems={clientMenuItems} user={user} onNavigate={handleClose}/>
</Container>

        </Slide>
      </Modal>
      
    </Box>
  );
};

export default ClientMobileDrawer;
