import React, { useContext, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../Backend/Data/config';
import MyContext from '../../../Contextes/MyContext';
import { sendMessage } from '../../../Backend/Actions/Set/sendMessage';
import { ArrowBack, Send } from '@material-ui/icons';


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
  messageList: {
    maxHeight: '80%',
    overflowY: 'auto',
    marginTop: 50
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
  },
  sendButton: {
    marginLeft: theme.spacing(1),
    padding: 16
  },
}));

const ChatBox = ({user}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);
    const {myVariable , setMyVariable} = useContext(MyContext)

  const handleClose = () => {
    setOpen(false);
    setMyVariable(prevState => ({
                     ...prevState,
                     chatSelected: null
                     
     }))
  };


  useEffect(() => {
    // Défilement automatique vers le bas de la boîte de messages
    if (messagesRef.current) {
      messagesRef.current = messagesRef.current.scrollHeight;
    }
   const dataRef = ref(db, 'messages/'+user.userId+'/'+myVariable.chatSelected.userId);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesData = Object.entries(data).map(([id, item]) => ({ id, ...item }));
     
        setMessages(messagesData);
      } else {
        setMessages([]);
      }
    });

     setOpen(true)

    return ()=>{
             setOpen(false)

          setMyVariable(prevState => ({
                     ...prevState,
                     chatSelected: null 
    }))
      }
  }, []);

    const handleSendMessage = () => {
      const MAX_WORD_LENGTH = 20;
        const words = message.split(' ');

    for (const word of words) {
      if (word.length < MAX_WORD_LENGTH) {
         if (message.trim() !== '') {
      const data = {
        messageText: message,
        sender: user ,
        receiver: myVariable.chatSelected,
        date: new Date().toISOString()
      }
      sendMessage(user , myVariable.chatSelected , data )
   
      setMessage('');
    }

        return;
      }
    }
   
  };
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
          <Paper className={classes.modalContent+ ' ' + 'container'}>
               <div className={classes.header + ' ' + ' bg-gray-200'}>

                  <IconButton onClick={()=>{
                    handleClose()
                  }}>
                    <ArrowBack />
                  </IconButton>
                 {
                  myVariable.chatSelected.profile!==undefined  ? (<Avatar src={myVariable.chatSelected.profile}  style={{marginLeft: 6}}/>): (
                    <Avatar style={{marginLeft: 6}}/>
                  )
                 }
                 {
                  myVariable.chatSelected.name!==undefined && (
                    <Typography variant='div' component={'div'} fontWeight={'bold'}marginLeft={2}>
                    {myVariable.chatSelected.name}
                   </Typography>
                  )
                 }
                   {
                  myVariable.chatSelected.firstName!==undefined && (
                    <Typography variant='div' component={'div'} fontWeight={'bold'}marginLeft={2}>
                    {myVariable.chatSelected.firstName} {myVariable.chatSelected.lastName}
                   </Typography>
                  )
                 }

                   {
                  myVariable.chatSelected.companyName!==undefined && (
                    <Typography variant='div' component={'div'} fontWeight={'bold'}marginLeft={2}>
                    {myVariable.chatSelected.companyName} 
                   </Typography>
                  )
                 }
            </div>
            {/* Liste des messages */}
            <div className={classes.messageList + '   ' + 'container'}>
                 {messages.map((msg, index) => {
  
                    const words = msg.messageText.split(' ');

    for (const word of words) {
      if (word.length < 20) {
       
       return(
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.sender.userId === user.userId ? 'flex-end' : 'flex-start',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor:msg.sender.userId === user.userId ? '#1976d2' : '#F5F5F5',
                   color:msg.sender.userId === user.userId ? 'white' : '',
                  borderRadius: '8px',
                  p: 2,
                  maxWidth: '75%',
                  width: 'fit-content',
                }}
              >
                <Typography variant="body1">{msg.messageText}</Typography>
              </Box>
              <div id='#bottom'>
              </div>
            </Box>
          )
      }
   }

          })}
            </div>

            {/* Formulaire d'envoi de message */}
            <div className={classes.messageForm + ' ' + ' bg-gray-200'}>
              <TextField
                placeholder="Nouveau message"
                variant="outlined"
                value={message}
                multiline
                onChange={(e)=>{
                    setMessage(e.target.value)
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.sendButton}
                onClick={handleSendMessage}
              >
                <Send />
              </Button>
            </div>
          </Paper>
        </Slide>
      </Modal>
    </div>
  );
};

export default ChatBox;
