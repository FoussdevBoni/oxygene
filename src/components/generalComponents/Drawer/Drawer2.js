import React, { useContext, useEffect, useState } from 'react';
import { Modal, TextField, Button, Container, Grid, Typography, Slide, Box, Toolbar, Divider } from '@mui/material';
import MyContext from '../../../Contextes/MyContext';
import { Menu } from './Drawer';
import { logo } from '../../../data-center/data';



const MobileDrawer = ({ menuItems, logout, user   }) => {

 const {myVariable , setMyVariable } = useContext(MyContext)

 const [open ,setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
    setTimeout(()=>{
       setMyVariable(prevState => ({
                     ...prevState,
                     hiddenDrawer: false 
    }))
    } , 2000 )
   
  };
   useEffect(()=>{
    setOpen(myVariable.open)
   },[])

 
  return (
    <Box >
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Slide direction="right" in={open} timeout={500}>
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
 <Menu menuItems={menuItems} logout={logout} user={user} onNavigate={handleClose}/>
</Container>

        </Slide>
      </Modal>
    </Box>
  );
};

export default MobileDrawer;
