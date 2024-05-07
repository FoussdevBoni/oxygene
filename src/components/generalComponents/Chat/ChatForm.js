import { Send } from '@material-ui/icons';
import { Box, Container, IconButton, List, ListItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { sendMessage } from '../../../Backend/Actions/Set/sendMessage';

function ChatForm({user , receiver }) {
    const [message , setMessage] = useState()
    
    const sendMsg = ()=>{
        const body = {
            messageText: message ,
            receiver: receiver,
            sender: user , 
            date: new Date().toISOString()
        }
        sendMessage(user , receiver , body)
        setMessage('')
    }
    return (
        <List>
          <ListItem>
            <Typography variant='h6'>
              Discuter avec {receiver.companyName}
            </Typography>
          </ListItem>
          <ListItem className="flex">
            <TextField
                  className='input'
                  id="chat_input"    
                  multiline
                   value={message}
                   onChange={
                    (e)=>{
                        setMessage(e.target.value)
                    }
                   }
                   maxRows={4}
                     InputProps={{
                   disableUnderline: true
                }}/>

              
           
              <IconButton  onClick={sendMsg}>
                     <Send />
              </IconButton>
          </ListItem>
        </List>
    );
}

export default ChatForm;