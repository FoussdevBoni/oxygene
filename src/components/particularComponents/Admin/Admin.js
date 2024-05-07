import { AddCircle, ChatBubble, Home, People, SettingsSharp, ShoppingCart, Star, Storage } from "@material-ui/icons";
import AdminHome from "./pages/sections/Home/AdminHome";
import Users from "./pages/sections/Users/Users";
import AddServicesForm from "./pages/sections/AddService/AddServicesForm";
import Demandes from "./pages/sections/DemandesServices/Demandes";
import Discussions from "./pages/sections/Discussions/Discussions";
import Avis from "./pages/sections/Avis/Avis";


 export const adminItems = [
    { icon: <Home />, label: 'Dashboard', route: 'home' },
  { icon: <Storage />, label: 'Gérer les demandes', route: 'demandes' },
  { icon: <People />, label: 'Notre communauté', route: 'achats' },
  { icon: <ChatBubble />, label: 'Discussions', route: 'chat' },
  { icon: <Star />, label: 'Avis des clients', route: 'commentaires' },
  { icon: <AddCircle />, label: 'Ajouter un nouveau service', route: 'add-service' }
 ]