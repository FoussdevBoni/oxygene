import { Call, ChatBubble, History, Home, Info, ListSharp, Person, Storage, WrapText } from "@material-ui/icons"
import { List } from "@mui/material";


export const visiteurItems =  [
    {
      icon: <Home />,
      label: 'Acceuil',
      route: ''
    },
    {
      icon: <Person />,
      label: 'Se connecter',
      route: 'connexion/client'
    },
    {
      icon: <Info />,
      label: 'A propos',
      route: 'a-propos'
    },
    {
      icon: <Call />,
      label: 'Contactez-nous',
      route: 'noscontacts'
    },
     {
      icon: <Storage/>,
      label: 'Nos  services',
      route: 'service'
    }

  ];

