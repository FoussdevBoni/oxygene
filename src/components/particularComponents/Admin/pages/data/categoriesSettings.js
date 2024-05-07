import { AccountCircle, Bookmark, ChatBubble, Info, Notifications, Warning } from "@material-ui/icons";

export const settings = [
       {
      title: 'Gestion du compte et deconnexion ',
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
      title: 'Les notifications',
      icon:  <Notifications />,
      content: null,
      body: 'Choissisez comment vous recevez les notifications'
    },
      {
      title: 'Les blocages ',
      icon:  <Warning />,
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