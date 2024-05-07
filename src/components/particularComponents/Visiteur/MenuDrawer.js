import React, { useContext, useEffect, useState } from 'react';
import { Modal, TextField, Button, Container, Grid, Typography, Slide, Box, Toolbar, Divider } from '@mui/material';
import MyContext from '../../../Contextes/MyContext';
import { logo } from '../../../data-center/data';
import { visiteurItems } from './itemsMenu';
import { Menu } from '../../generalComponents/Drawer/Drawer';



const MobileDrawer = ({ }) => {

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
 <Menu menuItems={visiteurItems}  onNavigate={handleClose}/>
</Container>

        </Slide>
      </Modal>
      
    </Box>
  );
};

export default MobileDrawer;
