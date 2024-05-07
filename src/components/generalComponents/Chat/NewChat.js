import { Avatar, Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Paper, Slide, Typography } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../../Backend/Data/config';
import { makeStyles } from '@material-ui/core/styles';
import MyContext from '../../../Contextes/MyContext';
import { ArrowBack } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'relative',
    width: '100%',
    height: '100%',
    outline: 'none',
    padding: theme.spacing(2),
  },
  usersList: {
    maxHeight: '100%',
    overflowY: 'auto',
    marginTop: 0
  },
  messageForm: {
    position: 'absolute',
    bottom: theme.spacing(0),
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
    header: {
    position: 'absolute',
    top: theme.spacing(0),
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    zIndex: 2
  },
  sendButton: {
    marginLeft: theme.spacing(1),
    padding: 16
  },
}));
function NewChat({user ,  openNewChat}) {
    const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
    const {myVariable , setMyVariable} = useContext(MyContext)
    const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false);
    navigate(-1)
    setMyVariable(prevState => ({
                     ...prevState,
                     chatSelected: null
                     
     }))
  };

const [users, setUsers] = useState([])
useEffect(()=>{
  setOpen(true)
  const usersRef = ref(db, 'users/clients')
   onValue(usersRef, (snapshot) => {
          const usersData = snapshot.val();
          
          if (usersData) {

            // Convertir les données de la base de données en tableau
            const data = Object.entries(usersData).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setUsers(data)
          }
        });
        return ()=>{
            setOpen(false)

        }
},[])

    return (
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        disableEnforceFocus
        disableAutoFocus
      >
        <Slide direction="right" in={open} mountOnEnter unmountOnExit>
        <Paper  className={classes.modalContent+ ' ' + 'container'}>
             <div className={classes.header + ' ' + ' bg-gray-200'}>

                  <IconButton onClick={()=>{
                    handleClose()
                  }}>
                    <ArrowBack />
                  </IconButton>
                 <Typography variant='div' component={'div'} fontWeight={'bold'}marginLeft={2}>
                   Nouvelle discussion
                 </Typography>
            </div>

           <Box  className= {classes.usersList}>
                  <List>
              <ListItem style={{width: '85%'}}>
                 <ListItemButton
                 onClick={
                    openNewChat
                 }
            >
              <ListItemIcon style={{color:'white'}}>
              
              </ListItemIcon>
               <ListItemText primary={''} />
               </ListItemButton>
               </ListItem>
               <ListItem >
                 <ListItemButton
                 onClick={
                    openNewChat
                 }
            >
              <ListItemIcon style={{color:'white'}}>
                <Avatar  />
              </ListItemIcon>
               <ListItemText primary={'Société Oxygène'} />
               </ListItemButton>
               </ListItem>
                {
                  users.map((user)=>{
                    return (
                    <ListItem>
                       <ListItemButton
                          onClick={
                            ()=>{
                               setMyVariable(prevState => ({
                              ...prevState,
                              chatSelected: user
                     
                            }))
                                navigate(-1)

                         
                            }
                         }
                         >
                        <ListItemIcon style={{color:'white'}}>
                          {
                            user.profile!==undefined ?
                             <Avatar  src={user.profile}/>:  <Avatar  />
                          }
                         </ListItemIcon>
                         <ListItemText primary={user.lastName+ ' ' + user.firstName} />
                        </ListItemButton>
                    </ListItem>
                    )
                  })
                }
            </List> 
            </Box> 
        </Paper>
        </Slide>
      </Modal>
      </div>
    );
}

export default NewChat;