import { ChatBubble, History, ListSharp, WrapText } from "@material-ui/icons"


export const workerItems =  [
    {
      icon: <ListSharp />,
      label: 'Nouvelles Tâches',
      route: 'new-task'
    },
    {
      icon: <History />,
      label: 'Tâches excécutées',
      route: 'commandes'
    },
    {
      icon: <ChatBubble />,
      label: 'Discussion',
      route: 'chat'
    },
    {
      icon: <WrapText />,
      label: 'Faire un rapport',
      route: 'rapport'
    }
  ];

