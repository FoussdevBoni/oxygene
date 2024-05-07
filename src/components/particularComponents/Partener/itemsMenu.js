import { AddCircle, ChatBubble, Home, Money, Person, SettingsSharp, ShoppingCart, Star, Storage } from "@material-ui/icons";
import PartenerHome from "./pages/sections/Home/Home";
import Commandes from "./pages/sections/Commandes/Commandes";
import Products from "./pages/sections/Products/Products";
import Discussions from "./pages/sections/Discussions/Discussions";
import AddProduct from "./pages/sections/AddProduct/AddProduct";
import Settings from "./pages/sections/Settings/Settings";
import Avis from "./pages/sections/Avis/Avis";
import Ventes from "./pages/sections/Ventes/Ventes";
import Clients from "./pages/sections/Clients/Clients";



 export const partenersItems =
    [
     { icon: <Home />, label: 'Mon Dashboard', route: 'home' },
    { icon: <Storage />, label: 'Nouvelles commandes', route: 'comandes' },
    { icon: <ShoppingCart />, label: 'Nos produits en ligne', route: 'achats' },
    { icon: <ChatBubble />, label: 'Discussions', route: 'chat' },
    { icon: <Star />, label: 'Avis de nos clients', route: 'commentaires' },
    { icon: <AddCircle />, label: 'Ajouter un produit en ligne', route: 'add-service' },
    { icon: <SettingsSharp />, label: 'Paramètres', route: 'settings' } ,
     {
    icon: <Money />,
    label: 'Ventes et paiements',
    route: 'ventes' 
  }
]
 
