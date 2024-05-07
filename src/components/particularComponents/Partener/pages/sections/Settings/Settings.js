import React, { useState } from 'react';
import { SettingsList } from './SettingsList';
import { AccountCircle, Bookmark, ChatBubble, History, Info, Notifications, Warning } from "@material-ui/icons";
import { Box, Slide } from '@mui/material';
export const settings = [
       {
      title: 'Gérer mon compte ',
      icon:  <Info />,
      content: null,
      body: 'Gérez les informations du compte( email , numéro de téléphone , mot de passe)'
    },
    {
      title: 'La boite de messagérie',
      icon:  <ChatBubble />,
      content: null,
      body: "Personnalisez  votre Chat et les intégrations de votre boîte de réception."
    },
      {
      title: 'Gérer les notifications',
      icon:  <Notifications />,
      content: null,
      body: 'Choissisez comment vous recevez les notifications'
    },
      {
      title: 'Historique de demandes ',
      icon:  <History />,
      content: null,
      body: 'Gérez les utilisateurs bloqués sur le site'
    },
    {
      title: 'Guide d\'utilisation ',
      icon:  <Bookmark />,
      content: null,
      body: 'Découvrir comment utiliser la plateforme en lisant notre guide'
    },
]
function Settings(props) {
    const [isVisible , setIsVisible] = useState(true)
    return (
        <Box sx={{p: 6}}>
                <Slide direction="right" timeout={500} in={isVisible} mountOnEnter unmountOnExit>
     
         <div> 
             <SettingsList settings={settings}/>

           
         </div>
         </Slide>
        </Box>
    );
}

export default Settings;