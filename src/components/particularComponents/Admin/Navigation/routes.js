import { Chat, Mail, School, Star, Work } from "@material-ui/icons";
import { Group, History, Money, People, Room, Subscript } from "@mui/icons-material";
import { Menu } from "@mui/material";

export const routesItems = [
     {
        icon: <Work />,
        label: 'Historique des demandes'
    }, 
    {
        icon: <Star />,
        label: 'Les avis'
    }, 
    {
      icon: <People />,
        label: 'Nos clients'
    },
     {
      icon: <Group />,
        label: 'Nos prestataires'
    },
    
     {
        icon: <Money />,
        label: 'Historique des payements'
    },
     {
        icon: <Chat />,
        label: 'Discussions'
    },
     {
        icon: <School />,
        label: 'Canditatures réçues'
    },
     {
        icon: <Mail />,
        label: 'Messages des visiteurs'
    },
]