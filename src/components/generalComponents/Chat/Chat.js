import React, { useContext, useEffect, useState } from 'react';
import ChatList from './ChatList';
import { Box, Grid, Modal, Slide } from '@mui/material';
import MyContext from '../../../Contextes/MyContext';
import ChatBox from './ChatBox';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../Backend/Data/config';

function Chat({user}) {
let drawerWidth = 340;
let width = window.innerWidth

  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, 'chatList/' + user.userId);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const chatList = Object.entries(data).map(([id, item]) => ({ id, ...item }));
        const sortedChatList = chatList.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA; // Tri décroissant par date d'enregistrement
        });
        setChatData(sortedChatList);
        console.log(sortedChatList)
      } else {
        setChatData([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user.userId]);

  const [isVisible, setIsVisible] = useState(true);
    const {myVariable , setMyVariable} = useContext(MyContext)

    return (
        <Box>
            {
                myVariable.chatSelected!==null ? <ChatBox
                 receiver={myVariable.chatSelected} user={user}/>:   <ChatList data={chatData} user={user}></ChatList>
            }
      
    </Box>
    );
}

export default Chat;